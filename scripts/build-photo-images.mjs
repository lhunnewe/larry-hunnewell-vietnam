// Generate web copies of the archival photo scans.
//
// For every photo record in data/photos/ that points at an original scan,
// writes into public/images/photos/ (which is gitignored — derivatives are
// build artifacts, the originals in data/photos/originals/ are the source
// of truth):
//
//   full/VN-####.jpg   — max 1600px wide, recompressed for the web
//   thumbs/VN-####.jpg — 480px wide, for the gallery grid
//
// Skips images whose derivatives are already newer than the original.
// Runs automatically before `npm run dev` and `npm run build`.

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const ORIGINALS = path.join(ROOT, 'data', 'photos', 'originals');
const RECORDS = path.join(ROOT, 'data', 'photos');
const OUT_FULL = path.join(ROOT, 'public', 'images', 'photos', 'full');
const OUT_THUMB = path.join(ROOT, 'public', 'images', 'photos', 'thumbs');

fs.mkdirSync(OUT_FULL, { recursive: true });
fs.mkdirSync(OUT_THUMB, { recursive: true });

const records = fs
  .readdirSync(RECORDS)
  .filter((f) => /^VN-\d{4}\.json$/.test(f))
  .map((f) => JSON.parse(fs.readFileSync(path.join(RECORDS, f), 'utf8')))
  .filter((r) => r.originalPath);

function isFresh(src, dest) {
  return fs.existsSync(dest) && fs.statSync(dest).mtimeMs >= fs.statSync(src).mtimeMs;
}

let built = 0;
let missing = 0;
for (const record of records) {
  const src = path.join(ORIGINALS, record.originalPath);
  if (!fs.existsSync(src)) {
    console.warn(`MISSING original for ${record.photoId}: ${record.originalPath}`);
    missing++;
    continue;
  }
  const full = path.join(OUT_FULL, `${record.photoId}.jpg`);
  const thumb = path.join(OUT_THUMB, `${record.photoId}.jpg`);
  if (isFresh(src, full) && isFresh(src, thumb)) continue;

  await sharp(src)
    .rotate() // respect EXIF orientation
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(full);
  await sharp(src)
    .rotate()
    .resize({ width: 480, withoutEnlargement: true })
    .jpeg({ quality: 75, mozjpeg: true })
    .toFile(thumb);
  built++;
}

console.log(`${records.length} records; ${built} rebuilt; ${missing} missing originals.`);
if (missing > 0) process.exit(1);
