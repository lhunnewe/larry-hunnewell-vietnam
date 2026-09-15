#!/usr/bin/env node
/**
 * Published-site check: reads the BUILT site in dist/ — exactly what GitHub
 * Pages will serve — and fails if anything that must stay off the public pages
 * made it into them.
 *
 *   npm run check:published      (also runs automatically after `npm run build`)
 *
 * scripts/validate-archive.mjs checks the records; this checks the output. The
 * two differ whenever a template renders a field it should not, a parked page
 * comes back, or a new comment arrives carrying a withheld detail. Because it
 * runs as `postbuild`, a failure stops the GitHub Pages deploy, including the
 * deploys that follow the nightly recollection export.
 *
 * Nothing here is auto-fixed. A failure means a page would publish something
 * it should not: fix the template or the record, or — if a term has become
 * safe because Larry has now said it himself — retire it in the list with a
 * dated comment saying so.
 *
 * /interview/ is skipped: it is the family's unlinked, noindex working guide
 * and holds the probes on purpose.
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SPOILER_TERMS } from './spoiler-terms.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const DATA = join(ROOT, 'data');

if (!existsSync(DIST)) {
  console.error('dist/ does not exist — run `npm run build` first.');
  process.exit(1);
}

/** Sections parked as src/pages/_*.astro while the site is held minimal. */
const PARKED_SECTIONS = ['people', 'places', 'timeline', 'story', 'units', 'research', 'sources', 'glossary'];

/**
 * Terms withheld from the published site beyond the validator's probe list.
 * These are checked against the built pages only, not every record field:
 * several live correctly in parked records and research notes.
 */
const PUBLISH_ONLY_TERMS = [
  // The unit question is open and asked cold (tier 1): no designation of any kind.
  { term: /\baod\b/i, why: 'unit designation — the unit name/number question is open' },
  { term: /operations? detachment/i, why: 'unit designation — the unit name/number question is open' },
  { term: /pathfinder/i, why: "founding brief detail traced to his son's mishearing (2026-09-13)" },
  // The 24 Oct 1964 Stars and Stripes caption, held in research/ (rule 6).
  { term: /lefrancois|douglas l\.? hanna|tommy r\.? chapman/i, why: 'names as printed in the held 18th AOD caption' },
  { term: /gary w\.? hanna/i, why: "a candidate first name for Hanna — his first name is an open question" },
  // The 14 Aug 1964 Nui Ba Den helicopter loss, held in research/ (rule 6).
  // (Rewerts and Dean are also painted on the VN-0035 rock and named in his own
  // 2026-09-03 answer there, so only the names that are not are listed.)
  { term: /harriman|caughey|62-02051/i, why: 'the held 14 Aug 1964 Nui Ba Den crash' },
  { term: /pathet/i, why: 'a label for the VN-0023 prisoner — the question says offer neither label' },
  // Research apparatus: he must not see the machinery of the interview or the files behind it.
  { term: /\bdata\/(photos|videos|drawings|people|places|timeline|recollections|sources)\b/i, why: 'repository file path' },
  { term: /\bresearch\/[a-z]/i, why: 'repository file path' },
  { term: /ai-observations|vision survey|vision pass/i, why: 'machine output named on a public page (rule 4)' },
  { term: /\bledger #|\bissue #\d|unresolved question #/i, why: 'research ledger or issue number' },
  { term: /\bprobe\b|\(validate\)|interview guide/i, why: 'interview apparatus' },
  { term: /giscus comment posted from|discussioncomment-/i, why: 'raw provenance line (render recordedLine instead)' },
  // Records and health: parked with the pages that carried them.
  { term: /agent orange|\bptsd\b|va rating|rating decision/i, why: 'health or benefits detail' },
];

/** Patterns that would expose personal data. Checked against page text. */
const PRIVACY_PATTERNS = [
  { term: /\b\d{3}-\d{2}-\d{4}\b/, why: 'looks like a Social Security number' },
  { term: /\b(RA|US|ER|NG)\s?\d{8}\b/, why: 'looks like an Army service number' },
  { term: /[\w.+-]+@[\w-]+\.[\w.]+/, why: 'email address' },
  { term: /\(\d{3}\)\s?\d{3}-\d{4}|\b\d{3}[-.]\d{3}[-.]\d{4}\b/, why: 'telephone number' },
  { term: /\b\d{2,5}\s+(?:[A-Z][a-z]+\s+){1,3}(?:Road|Rd|Street|St|Avenue|Ave|Boulevard|Blvd|Drive|Dr|Lane|Ln|Court|Ct|Way)\b\.?/, why: 'street address' },
  { term: /date of birth|\bborn (on )?(january|february|march|april|may|june|july|august|september|october|november|december) \d/i, why: 'date of birth' },
];

// ------------------------------------------------------------------ the pages

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : []
  );
}

const decode = (s) =>
  s
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&[a-z]+;/g, ' ');

/**
 * Testimony blocks rendered by src/components/Recollection.astro. His own words
 * (caption "Larry's recollection" or "Larry's own writing") may say anything he
 * said — a probe he answers himself is answered — so term checks skip them. A
 * paraphrase (caption "as related by…") is somebody else's sentence and is
 * checked like any other text.
 */
const TESTIMONY = /<figure class="recollection"[^>]*>[\s\S]*?<\/figure>/g;
const isHisOwnWords = (figure) =>
  /Larry(&#39;|'|&#x27;|’)s (recollection|own writing)\s*<\/figcaption>/.test(figure);

/** Visible text of a page: scripts, styles and tags removed, whitespace collapsed. */
function visibleText(html) {
  return decode(
    html
      .replace(/<script[\s\S]*?<\/script>/g, ' ')
      .replace(/<style[\s\S]*?<\/style>/g, ' ')
      .replace(/<!--[\s\S]*?-->/g, ' ')
      .replace(/<[^>]+>/g, ' ')
  )
    .replace(/\s+/g, ' ')
    .trim();
}

const normalize = (s) => s.replace(/\s+/g, ' ').trim().toLowerCase();

const pages = walk(DIST)
  .map((file) => ({ file, rel: relative(DIST, file).split('\\').join('/') }))
  .filter((p) => !p.rel.startsWith('interview/'));

// ---------------------------------------------------------------- the records

function records(collection) {
  const dir = join(DATA, collection);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => ({ file: `data/${collection}/${f}`, data: JSON.parse(readFileSync(join(dir, f), 'utf8')) }));
}

/**
 * Fields that stay on the record but must not render while the site is held
 * minimal. A distinctive run of each value is looked for in the page text.
 */
const PARKED_FIELDS = {
  photos: ['description', 'researchNotes'],
  videos: ['description', 'researchNotes'],
  drawings: ['description', 'researchNotes', 'provenance'],
  people: ['summary', 'researchNotes'],
  places: ['summary', 'researchNotes'],
  timeline: ['description', 'researchNotes'],
  recollections: ['provenance', 'researchNotes'],
  sources: ['notes'],
};

/** A window of text long enough that finding it on a page is not coincidence. */
const WINDOW = 60;

function fingerprints(value) {
  const n = normalize(String(value));
  if (n.length < WINDOW) return [];
  // Two windows (start and middle), so a template that renders a trimmed or
  // partial field is still caught.
  const mid = Math.floor((n.length - WINDOW) / 2);
  return [...new Set([n.slice(0, WINDOW), n.slice(mid, mid + WINDOW)])];
}

const parkedPrints = [];
for (const [collection, fields] of Object.entries(PARKED_FIELDS)) {
  for (const rec of records(collection)) {
    for (const field of fields) {
      if (!rec.data[field]) continue;
      for (const print of fingerprints(rec.data[field])) {
        parkedPrints.push({ print, where: `${rec.file} ${field}` });
      }
    }
  }
}

// Recollections under a hold: their text must not render anywhere.
const heldPrints = [];
for (const rec of records('recollections')) {
  if (!rec.data.hold) continue;
  const n = normalize(rec.data.text);
  const prints = n.length < WINDOW ? (n.length >= 20 ? [n] : []) : fingerprints(rec.data.text);
  for (const print of prints) heldPrints.push({ print, where: rec.file });
}

// ------------------------------------------------------------------ the check

const failures = [];
const fail = (page, msg) => failures.push({ page, msg });

for (const { file, rel } of pages) {
  const html = readFileSync(file, 'utf8');
  /** Everything on the page, for held-recollection checks. */
  const fullText = visibleText(html);
  /** The page minus his own words, for term and privacy checks. */
  const text = visibleText(html.replace(TESTIMONY, (fig) => (isHisOwnWords(fig) ? ' ' : fig)));
  /** The page minus all testimony, for parked-field checks (a field may quote him). */
  const outsideTestimony = visibleText(html.replace(TESTIMONY, ' '));
  const lower = text.toLowerCase();

  // 1. Links into parked sections.
  for (const m of html.matchAll(/href="([^"]*)"/g)) {
    const href = m[1];
    const section = PARKED_SECTIONS.find((s) => new RegExp(`/${s}/`).test(href));
    if (section && !/^https?:\/\/(?!lhunnewe\.github\.io)/.test(href)) {
      fail(rel, `links to parked section /${section}/ (${href})`);
    }
  }

  // 2. Evidence badges and research-notes headings: parked on the minimal site.
  if (/class="evidence"/.test(html)) fail(rel, 'renders an evidence badge');
  if (/>\s*Research notes\s*</i.test(html)) fail(rel, 'renders a Research notes section');

  // 3. Probe terms (the validator's list) and publish-only terms.
  for (const term of SPOILER_TERMS) {
    if (lower.includes(term.toLowerCase())) fail(rel, `contains interview-probe term "${term.trim()}"`);
  }
  for (const { term, why } of PUBLISH_ONLY_TERMS) {
    const m = text.match(term);
    if (m) fail(rel, `contains "${m[0]}" — ${why}`);
  }

  // 4. Personal data.
  for (const { term, why } of PRIVACY_PATTERNS) {
    const m = text.match(term);
    if (m) fail(rel, `contains "${m[0]}" — ${why}`);
  }

  // 5. Parked record fields and held recollections.
  const outside = normalize(outsideTestimony);
  for (const { print, where } of parkedPrints) {
    if (outside.includes(print)) fail(rel, `renders parked field ${where}`);
  }
  const everything = normalize(fullText);
  for (const { print, where } of heldPrints) {
    if (everything.includes(print)) fail(rel, `renders held recollection ${where}`);
  }
}

// ----------------------------------------------------------------- the report

const byPage = new Map();
for (const f of failures) {
  if (!byPage.has(f.page)) byPage.set(f.page, new Set());
  byPage.get(f.page).add(f.msg);
}

console.log(`Published-site check: ${pages.length} page(s) in dist/ (interview/ skipped)`);
if (byPage.size === 0) {
  console.log('0 problem(s) — nothing withheld is on the published pages');
  process.exit(0);
}
for (const [page, msgs] of [...byPage].sort()) {
  console.log(`\n  ${page}`);
  for (const msg of msgs) console.log(`      ${msg}`);
}
const total = [...byPage.values()].reduce((a, s) => a + s.size, 0);
console.log(`\n${total} problem(s) on ${byPage.size} page(s) — do not publish; see scripts/check-published.mjs`);
process.exit(1);
