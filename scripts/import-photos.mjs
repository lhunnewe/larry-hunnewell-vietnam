// Assign permanent VN-#### archive IDs to photo scans.
//
// Walks data/photos/originals/ recursively, and for every image that has no
// record yet in data/photos/, creates a stub JSON record with the next free
// ID. Existing records are never modified: the mapping key is originalPath,
// so re-running is safe and IDs are stable once assigned.
//
// Usage: npm run photos:import

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const ORIGINALS = path.join(ROOT, 'data', 'photos', 'originals');
const RECORDS = path.join(ROOT, 'data', 'photos');

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.jpe?g$/i.test(entry.name)) out.push(full);
  }
  return out;
}

const originals = walk(ORIGINALS)
  .map((f) => path.relative(ORIGINALS, f).replaceAll('\\', '/'))
  .sort();

const existing = fs
  .readdirSync(RECORDS)
  .filter((f) => /^VN-\d{4}\.json$/.test(f))
  .map((f) => JSON.parse(fs.readFileSync(path.join(RECORDS, f), 'utf8')));

const known = new Set(existing.map((r) => r.originalPath).filter(Boolean));
let nextId = existing.reduce((max, r) => Math.max(max, Number(r.photoId.slice(3))), 0) + 1;

let created = 0;
for (const rel of originals) {
  if (known.has(rel)) continue;
  const photoId = `VN-${String(nextId++).padStart(4, '0')}`;
  const record = {
    photoId,
    originalFilename: path.basename(rel),
    originalPath: rel,
    cataloged: false,
    title: 'Uncataloged photograph',
    datePrecision: 'unknown',
    confidence: 'unverified-recollection',
  };
  fs.writeFileSync(
    path.join(RECORDS, `${photoId}.json`),
    JSON.stringify(record, null, 2) + '\n'
  );
  created++;
}

console.log(`${originals.length} originals; ${created} new records; ${existing.length + created} total.`);
