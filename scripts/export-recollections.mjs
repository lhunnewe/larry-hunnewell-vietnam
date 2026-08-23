/**
 * Export giscus Discussion comments into data/recollections/ records.
 *
 * Full idempotent sweep of the Memories category: every comment (and reply)
 * whose author appears in scripts/recollection-authors.json is upserted as
 * data/recollections/giscus-<term-slug>-c<commentId>.json. The comment text is
 * archived verbatim; researchNotes and human-added related refs are preserved.
 * Records whose source comment has vanished get a one-time deletion note in
 * provenance and are otherwise left untouched.
 *
 * Usage: GITHUB_TOKEN=<token> node scripts/export-recollections.mjs
 * Design: docs/superpowers/specs/2026-08-09-recollection-export-design.md
 */
import { readFileSync, writeFileSync, readdirSync, renameSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// Mirrors src/lib/giscus.ts (that module is site-side TypeScript; keep in sync).
const REPO_OWNER = 'lhunnewe';
const REPO_NAME = 'larry-hunnewell-vietnam';
const CATEGORY_ID = 'DIC_kwDOTzvwHc4DDCld'; // "Memories"

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const recollectionsDir = join(root, 'data', 'recollections');
const authorMap = JSON.parse(readFileSync(join(root, 'scripts', 'recollection-authors.json'), 'utf8'));

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.error('GITHUB_TOKEN is not set.');
  process.exit(1);
}

async function graphql(query, variables) {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`GraphQL HTTP ${res.status}: ${await res.text()}`);
  const json = await res.json();
  if (json.errors) throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);
  return json.data;
}

const COMMENT_FIELDS = `
  databaseId
  url
  body
  createdAt
  lastEditedAt
  author { login }
`;

const DISCUSSIONS_QUERY = `
  query ($owner: String!, $name: String!, $categoryId: ID!, $after: String) {
    repository(owner: $owner, name: $name) {
      discussions(first: 25, after: $after, categoryId: $categoryId) {
        pageInfo { hasNextPage endCursor }
        nodes {
          id
          number
          title
          comments(first: 50) {
            pageInfo { hasNextPage endCursor }
            nodes {
              ${COMMENT_FIELDS}
              replies(first: 50) {
                pageInfo { hasNextPage }
                nodes { ${COMMENT_FIELDS} }
              }
            }
          }
        }
      }
    }
  }
`;

const MORE_COMMENTS_QUERY = `
  query ($id: ID!, $after: String) {
    node(id: $id) {
      ... on Discussion {
        comments(first: 50, after: $after) {
          pageInfo { hasNextPage endCursor }
          nodes {
            ${COMMENT_FIELDS}
            replies(first: 50) {
              pageInfo { hasNextPage }
              nodes { ${COMMENT_FIELDS} }
            }
          }
        }
      }
    }
  }
`;

async function fetchAllDiscussions() {
  const discussions = [];
  let after = null;
  do {
    const data = await graphql(DISCUSSIONS_QUERY, {
      owner: REPO_OWNER,
      name: REPO_NAME,
      categoryId: CATEGORY_ID,
      after,
    });
    const page = data.repository.discussions;
    for (const d of page.nodes) {
      let comments = d.comments.nodes;
      let commentsPage = d.comments.pageInfo;
      while (commentsPage.hasNextPage) {
        const more = await graphql(MORE_COMMENTS_QUERY, { id: d.id, after: commentsPage.endCursor });
        comments = comments.concat(more.node.comments.nodes);
        commentsPage = more.node.comments.pageInfo;
      }
      discussions.push({ ...d, allComments: comments });
    }
    after = page.pageInfo.hasNextPage ? page.pageInfo.endCursor : null;
  } while (after);
  return discussions;
}

/** Map a discussion title (the giscus term) to related-reference arrays, or null to skip. */
function relatedRefsForTerm(term) {
  if (/^VN-\d{4}$/.test(term)) return { relatedPhotos: [term.toLowerCase()] };
  if (/^VF-\d{4}$/.test(term)) return { relatedVideos: [term.toLowerCase()] };
  const place = term.match(/^place:(.+)$/);
  if (place) return { relatedPlaces: [place[1]] };
  const person = term.match(/^person:(.+)$/);
  if (person) return { relatedPeople: [person[1]] };
  if (term === 'timeline' || term === 'stories') return {};
  return null;
}

const termSlug = (term) => term.toLowerCase().replace(/:/g, '-');
const isoDate = (s) => s.slice(0, 10);
const DELETION_NOTE = 'Source comment deleted from Discussions as of';

/** Existing giscus records on disk, keyed by comment databaseId parsed from the filename. */
function existingRecords() {
  const map = new Map();
  for (const file of readdirSync(recollectionsDir)) {
    const m = file.match(/^giscus-.+-c(\d+)\.json$/);
    if (m) map.set(m[1], file);
  }
  return map;
}

const union = (a = [], b = []) => [...new Set([...a, ...b])];

function buildRecord(comment, discussion, term, personId, existing) {
  const refs = relatedRefsForTerm(term);
  let provenance =
    `giscus comment posted from @${comment.author.login} on the ${term} page; ` +
    `discussion #${discussion.number}; ${comment.url}`;
  if (comment.lastEditedAt) provenance += `; edited ${isoDate(comment.lastEditedAt)}`;

  const record = {
    person: personId,
    recorded: isoDate(comment.createdAt),
    provenance,
    text: comment.body,
    // Larry's son types these for him, so the default is 'transcribed', never
    // 'verbatim'. A human reclassification — usually to 'paraphrase', when a
    // comment reports what Larry said rather than quoting him — is preserved,
    // the same way researchNotes is.
    fidelity: existing?.fidelity ?? 'transcribed',
  };
  if (existing?.researchNotes) record.researchNotes = existing.researchNotes;
  for (const key of ['relatedPhotos', 'relatedVideos', 'relatedPlaces', 'relatedPeople']) {
    const merged = union(refs[key], existing?.[key]);
    if (merged.length > 0) record[key] = merged;
  }
  return record;
}

const discussions = await fetchAllDiscussions();
const onDisk = existingRecords();
const liveIds = new Set();
const writes = [];
const renames = [];
let skippedUnmapped = 0;

for (const d of discussions) {
  const refs = relatedRefsForTerm(d.title);
  if (refs === null) {
    console.warn(`Skipping discussion #${d.number} "${d.title}": title is not a known term.`);
    continue;
  }
  const flat = d.allComments.flatMap((c) => [c, ...(c.replies?.nodes ?? [])]);
  for (const comment of flat) {
    const login = comment.author?.login;
    const id = String(comment.databaseId);
    liveIds.add(id);
    const personId = login ? authorMap[login] : undefined;
    if (!personId) {
      skippedUnmapped++;
      continue;
    }
    const filename = `giscus-${termSlug(d.title)}-c${id}.json`;
    const currentFile = onDisk.get(id);
    if (currentFile && currentFile !== filename) renames.push({ from: currentFile, to: filename });
    const existing = currentFile
      ? JSON.parse(readFileSync(join(recollectionsDir, currentFile), 'utf8'))
      : undefined;
    writes.push({ filename, record: buildRecord(comment, d, d.title, personId, existing) });
  }
}

// Deletion pass: giscus records whose source comment no longer exists.
const deletionMarks = [];
for (const [id, file] of onDisk) {
  if (liveIds.has(id)) continue;
  const record = JSON.parse(readFileSync(join(recollectionsDir, file), 'utf8'));
  if (record.provenance.includes(DELETION_NOTE)) continue;
  record.provenance += `; ${DELETION_NOTE} ${new Date().toISOString().slice(0, 10)}`;
  deletionMarks.push({ filename: file, record });
}

// Sweep complete — apply all writes.
for (const { from, to } of renames) {
  renameSync(join(recollectionsDir, from), join(recollectionsDir, to));
}
for (const { filename, record } of [...writes, ...deletionMarks]) {
  writeFileSync(join(recollectionsDir, filename), JSON.stringify(record, null, 2) + '\n');
}

console.log(
  `exported ${writes.length}, marked deleted ${deletionMarks.length}, ` +
    `skipped ${skippedUnmapped} comments by unmapped authors`
);
