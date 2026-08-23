#!/usr/bin/env node
/**
 * Archive integrity check.
 *
 * Zod (src/content.config.ts) validates the SHAPE of each record. This script
 * validates what zod cannot see: relationships between records, agreement
 * between records and the files on disk, and the archive's method rules
 * (evidence classification, citation, the no-spoiler rule for pages Larry
 * browses).
 *
 *   npm run validate              errors fail, warnings report
 *   npm run validate -- --strict  warnings fail too
 *
 * ERRORS are archive corruption: a broken link, a lost scan, an ID that moved.
 * WARNINGS are method drift: an elevated claim with no citation, an interview
 * probe in a rendered field, a photo with no survey.
 *
 * Nothing here is auto-fixed. Every fix is a judgment about evidence.
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'data');
const STRICT = process.argv.includes('--strict');

const errors = [];
const warnings = [];
const notes = [];
const err = (where, msg) => errors.push({ where, msg });
const warn = (where, msg) => warnings.push({ where, msg });
const note = (where, msg) => notes.push({ where, msg });

/**
 * Terms that must never reach a field rendered on the public site. These are
 * interview probes: they only work if the detail is not supplied to Larry
 * first. See research/interviews/breakfast-questions.md ("don't prime him").
 * Add a term here when a new probe is written.
 */
const SPOILER_TERMS = [
  // The Ginza restaurant probe — Ketel's signature feature (research/places/ginza-heidelberg.md)
  'beer barrel',
  "ketel",
  // The helicopter/explosion story, and the sapper hypothesis behind it
  'su-ner',
  'sooner',
  'sapper',
  'two-friends split',
  // The tail-emblem probe: he is shown VN-0012 and asked what his unit painted
  // on its aircraft, so no reading of the emblem may appear on a page he reads
  // (research/magnification/README.md, breakfast question #3)
  'thunderbird',
  'lightning bolt',
  '...control',
  // The Australian captain — a lead to verify, not an established frame
  'aattv',
  'australian army training',
  // The interview apparatus itself: he must not learn a numbered question list
  // exists, or that he is being worked through one
  'breakfast question',
];

/**
 * Fields that actually render on a page Larry may browse, per collection.
 * researchNotes renders on the photo, footage, person, and place detail pages
 * only — the timeline shows larrysRecollection but not notes, and recollections
 * have no detail page. Keep this in sync with src/pages/.
 */
const RENDERED_FIELDS = {
  photos: ['title', 'description', 'researchNotes'],
  videos: ['title', 'description', 'researchNotes'],
  people: ['name', 'role', 'summary', 'researchNotes'],
  places: ['name', 'summary', 'researchNotes'],
  timeline: ['title', 'description'],
  recollections: [],
  sources: ['title', 'citation', 'notes'],
};

const COLLECTIONS = ['photos', 'videos', 'people', 'places', 'timeline', 'recollections', 'sources'];

/**
 * Cross-collection reference fields, by collection.
 * Mirrors the reference() calls in src/content.config.ts — keep in sync.
 */
const REFS = {
  photos: { location: 'places', people: 'people', relatedPhotos: 'photos', relatedEvents: 'timeline' },
  videos: { location: 'places', people: 'people', relatedPhotos: 'photos', relatedVideos: 'videos' },
  people: { relatedPlaces: 'places' },
  places: { relatedPeople: 'people' },
  timeline: { relatedPlaces: 'places', relatedPeople: 'people', relatedPhotos: 'photos' },
  recollections: {
    person: 'people',
    relatedPhotos: 'photos',
    relatedVideos: 'videos',
    relatedPlaces: 'places',
    relatedPeople: 'people',
  },
  sources: {},
};

const ELEVATED = ['confirmed', 'strongly-supported'];
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Astro's glob loader derives an entry id from the filename, lowercased. */
const idOf = (file) => basename(file, '.json').toLowerCase();

function load(collection) {
  const dir = join(DATA, collection);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((file) => {
      const path = join(dir, file);
      try {
        return { collection, file, id: idOf(file), data: JSON.parse(readFileSync(path, 'utf8')) };
      } catch (e) {
        err(`${collection}/${file}`, `unparseable JSON: ${e.message}`);
        return null;
      }
    })
    .filter(Boolean);
}

const db = Object.fromEntries(COLLECTIONS.map((c) => [c, load(c)]));
const ids = Object.fromEntries(COLLECTIONS.map((c) => [c, new Set(db[c].map((e) => e.id))]));

// ------------------------------------------------------------------ references
for (const collection of COLLECTIONS) {
  for (const entry of db[collection]) {
    const where = `${collection}/${entry.file}`;
    for (const [field, target] of Object.entries(REFS[collection])) {
      const raw = entry.data[field];
      if (raw === undefined || raw === null) continue;
      for (const ref of Array.isArray(raw) ? raw : [raw]) {
        if (typeof ref !== 'string') continue;
        if (!ids[target].has(ref)) {
          err(
            where,
            ids[target].has(ref.toLowerCase())
              ? `${field}: "${ref}" must be lowercase — Astro ids are lowercased filenames ("${ref.toLowerCase()}")`
              : `${field}: "${ref}" does not exist in ${target}/`
          );
        }
        if (target === collection && ref === entry.id) err(where, `${field}: references itself`);
      }
    }
  }
}

// --------------------------------------------------------- ids, dates, method
for (const collection of COLLECTIONS) {
  for (const entry of db[collection]) {
    const where = `${collection}/${entry.file}`;
    const d = entry.data;

    // Permanent IDs match their filename. README principle 4: once assigned, never changes.
    for (const key of ['photoId', 'videoId']) {
      if (!d[key]) continue;
      const name = basename(entry.file, '.json');
      if (d[key].toLowerCase() !== name.toLowerCase()) {
        err(where, `${key} "${d[key]}" does not match the filename`);
      } else if (d[key] !== name) {
        // git's core.ignorecase hides this on Windows: the tracked name still has
        // the right case, but the working copy drifted. Fix with `git mv`.
        err(where, `filename case drifted from the permanent ID — on disk "${name}.json", ID "${d[key]}"`);
      }
    }

    for (const key of ['sortDate', 'endDate']) {
      if (d[key] && !ISO_DATE.test(d[key])) err(where, `${key} "${d[key]}" is not YYYY-MM-DD`);
    }
    if (d.sortDate && d.endDate && ISO_DATE.test(d.sortDate) && ISO_DATE.test(d.endDate) && d.endDate < d.sortDate) {
      err(where, `endDate ${d.endDate} precedes sortDate ${d.sortDate}`);
    }

    // README principle 2: every important claim carries a classification. An
    // elevated claim with nothing behind it is the failure this catches.
    if (ELEVATED.includes(d.confidence) && (d.sources ?? []).length === 0) {
      warn(where, `confidence "${d.confidence}" with no sources — elevated claim, no citation`);
    }

    // sources[] holds a sources/ id, or free text until a record exists for it.
    for (const s of d.sources ?? []) {
      if (typeof s === 'string' && !ids.sources.has(s.toLowerCase())) {
        note(where, `uncited source (free text, no sources/ record): "${s.slice(0, 60)}${s.length > 60 ? '…' : ''}"`);
      }
    }

    for (const field of RENDERED_FIELDS[collection] ?? []) {
      const text = d[field];
      if (typeof text !== 'string') continue;
      for (const term of SPOILER_TERMS) {
        if (text.toLowerCase().includes(term)) {
          warn(where, `${field} contains the interview probe "${term}" — this renders on a page Larry may browse; keep it in research/`);
        }
      }
    }
  }
}

// ----------------------------------------------------------------- photo files
const ORIGINALS = join(DATA, 'photos', 'originals');
const OBSERVATIONS = join(DATA, 'photos', 'ai-observations');

for (const entry of db.photos) {
  const where = `photos/${entry.file}`;
  const d = entry.data;

  if (d.originalPath) {
    if (!existsSync(join(ORIGINALS, d.originalPath))) {
      err(where, `originalPath "${d.originalPath}" not found under data/photos/originals/`);
    }
  } else {
    warn(where, 'no originalPath — the scan this record describes is not identified');
  }

  if (d.photoId && !existsSync(join(OBSERVATIONS, `${d.photoId}.json`))) {
    warn(where, `no ai-observations/${d.photoId}.json — this photo has not been surveyed`);
  }

  // "Cataloged" is a claim that the record has been through the process.
  if (d.cataloged) {
    if (!d.description) err(where, 'cataloged: true but no description');
    if (!d.larrysRecollection && !d.researchNotes) {
      warn(where, 'cataloged: true but neither larrysRecollection nor researchNotes — nothing was recorded');
    }
  }
}

if (existsSync(OBSERVATIONS)) {
  for (const f of readdirSync(OBSERVATIONS).filter((f) => f.endsWith('.json'))) {
    if (!ids.photos.has(idOf(f))) err(`photos/ai-observations/${f}`, 'observation has no photo record');
  }
}

// ------------------------------------------------------------ testimony voice
// Fidelity records how the words reached the page. A third-person sentence is
// the son's, whatever its source, so it cannot be Larry's own words — see the
// `fidelity` comment in src/content.config.ts.
const THIRD_PERSON =
  /\b(my (father|dad)|father (says?|said|thinks?|didn't|was|does)|he (says|said|thinks) that|Larry (says|said|remembers))\b/i;

for (const entry of db.recollections) {
  const where = `recollections/${entry.file}`;
  const d = entry.data;
  if (typeof d.text !== 'string') continue;

  const match = THIRD_PERSON.exec(d.text);
  if (match && d.fidelity !== 'paraphrase') {
    warn(where, `fidelity "${d.fidelity}" but the text is written in the third person ("${match[0]}") — that is the son's sentence, so it is a paraphrase`);
  }
  if (d.fidelity === 'verbatim') {
    warn(where, 'fidelity "verbatim" means Larry typed it himself — use "transcribed" for his words typed by his son');
  }
}

// --------------------------------------------------------- unreferenced records
// A person or place nothing points at renders as an unconnected page.
const inbound = new Set();
for (const collection of COLLECTIONS) {
  for (const entry of db[collection]) {
    for (const [field, target] of Object.entries(REFS[collection])) {
      const raw = entry.data[field];
      for (const ref of Array.isArray(raw) ? raw : raw ? [raw] : []) {
        if (typeof ref === 'string') inbound.add(`${target}/${ref}`);
      }
    }
  }
}
for (const collection of ['people', 'places']) {
  for (const entry of db[collection]) {
    if (!inbound.has(`${collection}/${entry.id}`)) {
      note(`${collection}/${entry.file}`, 'nothing references this record — it renders as an unconnected page');
    }
  }
}

// ------------------------------------------------- interview guide / page sync
// research/interviews/breakfast-questions.md and src/pages/interview.astro are
// the same question list in two forms; the guide says to keep them in sync.
const GUIDE = join(ROOT, 'research', 'interviews', 'breakfast-questions.md');
const PAGE = join(ROOT, 'src', 'pages', 'interview.astro');
if (existsSync(GUIDE) && existsSync(PAGE)) {
  // The page writes ids lowercase ('vn-0003'), the guide uppercase (VN-0003).
  const photoIds = (text) => new Set((text.match(/VN-\d{4}/gi) ?? []).map((s) => s.toUpperCase()));
  const inGuide = photoIds(readFileSync(GUIDE, 'utf8'));
  const inPage = photoIds(readFileSync(PAGE, 'utf8'));
  const only = (a, b) => [...a].filter((x) => !b.has(x)).sort();

  // The page is a curated subset, so guide-only photos are normal. A photo the
  // page shows that the guide does not track is real drift — the guide is the
  // record of what was asked.
  const pageOnly = only(inPage, inGuide);
  const guideOnly = only(inGuide, inPage);
  if (pageOnly.length) {
    warn('src/pages/interview.astro', `photos on /interview/ but not in the guide: ${pageOnly.join(', ')}`);
  }
  if (guideOnly.length) {
    note('research/interviews/breakfast-questions.md', `${guideOnly.length} photo(s) in the guide are not on /interview/ (expected if the page is a curated subset): ${guideOnly.slice(0, 8).join(', ')}${guideOnly.length > 8 ? ', …' : ''}`);
  }
}

// ----------------------------------------------------------------------- report
const report = (label, list) => {
  if (!list.length) return;
  console.log(`\n${label} (${list.length})`);
  let last = null;
  for (const { where, msg } of list) {
    if (where !== last) {
      console.log(`  ${where}`);
      last = where;
    }
    console.log(`      ${msg}`);
  }
};

const counts = Object.fromEntries(COLLECTIONS.map((c) => [c, db[c].length]));
const cataloged = db.photos.filter((e) => e.data.cataloged).length;
console.log(
  `Archive: ${Object.entries(counts).map(([c, n]) => `${n} ${c}`).join(', ')} — ` +
    `${cataloged}/${counts.photos} photos cataloged`
);

report('ERRORS', errors);
report('WARNINGS', warnings);
report('NOTES', notes);

const failing = errors.length > 0 || (STRICT && warnings.length > 0);
console.log(
  `\n${errors.length} error(s), ${warnings.length} warning(s), ${notes.length} note(s)` +
    (failing ? '' : ' — archive is intact')
);

process.exit(failing ? 1 : 0);
