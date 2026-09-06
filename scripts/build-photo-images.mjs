// Generate web copies of the archival photo scans and of Larry's drawings.
//
// For every photo record in data/photos/ that points at an original scan,
// writes into public/images/photos/ (which is gitignored — derivatives are
// build artifacts, the originals in data/photos/originals/ are the source
// of truth):
//
//   full/VN-####.jpg   — max 1600px wide, recompressed for the web
//   thumbs/VN-####.jpg — 480px wide, for the gallery grid
//
// Drawing records in data/drawings/ get the same treatment from
// data/drawings/originals/ into public/images/drawings/{full,thumbs}/VD-####.jpg.
//
// Skips images whose derivatives are already newer than the original.
// Runs automatically before `npm run dev` and `npm run build`.

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');

/** One source-of-truth directory and where its web copies go. */
const SERIES = [
  { name: 'photos', idField: 'photoId', pattern: /^VN-\d{4}\.json$/ },
  { name: 'drawings', idField: 'drawingId', pattern: /^VD-\d{4}\.json$/ },
];

function isFresh(src, dest) {
  return fs.existsSync(dest) && fs.statSync(dest).mtimeMs >= fs.statSync(src).mtimeMs;
}

let totalMissing = 0;
for (const series of SERIES) {
  const originals = path.join(ROOT, 'data', series.name, 'originals');
  const recordsDir = path.join(ROOT, 'data', series.name);
  const outFull = path.join(ROOT, 'public', 'images', series.name, 'full');
  const outThumb = path.join(ROOT, 'public', 'images', series.name, 'thumbs');
  fs.mkdirSync(outFull, { recursive: true });
  fs.mkdirSync(outThumb, { recursive: true });

  const records = fs.existsSync(recordsDir)
    ? fs
        .readdirSync(recordsDir)
        .filter((f) => series.pattern.test(f))
        .map((f) => JSON.parse(fs.readFileSync(path.join(recordsDir, f), 'utf8')))
        .filter((r) => r.originalPath)
    : [];

  let built = 0;
  let missing = 0;
  for (const record of records) {
    const id = record[series.idField];
    const src = path.join(originals, record.originalPath);
    if (!fs.existsSync(src)) {
      console.warn(`MISSING original for ${id}: ${record.originalPath}`);
      missing++;
      continue;
    }
    const full = path.join(outFull, `${id}.jpg`);
    const thumb = path.join(outThumb, `${id}.jpg`);
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

  console.log(`${series.name}: ${records.length} records; ${built} rebuilt; ${missing} missing originals.`);
  totalMissing += missing;
}

if (totalMissing > 0) process.exit(1);
