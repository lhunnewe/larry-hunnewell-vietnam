// Generate cleaned web copies of the family's Vietnam film footage.
//
// The source captures live on the NAS ("Dad's Vietnam Footage" — the 2009
// projector-to-wall MiniDV transfer of Larry's 8mm reels). They are raw DV
// video far over GitHub's file limits, and the NAS is not reachable from the
// GitHub Actions build — so unlike the photo derivatives, the web MP4s this
// script writes into public/videos/ ARE committed to the repo.
//
// For every record in data/videos/ with a segment, writes:
//
//   public/videos/VF-####.mp4          — cleaned web copy (H.264, no audio;
//                                        the captures carry only projector noise)
//   public/videos/posters/VF-####.jpg  — poster frame for players and the grid
//
// Cleanup pipeline, per clip: deinterlace (the MiniDV capture is 480i),
// crop to the projected image (per-record crop spec), two-pass stabilization,
// deflicker (projector/camera shutter beat), exposure and color lift, and
// pixel-aspect correction (DV pixels are not square).
//
// Skips clips whose MP4 already exists; pass --force to rebuild everything.
// Requires ffmpeg on PATH and the NAS mounted (or FOOTAGE_DIR set).
//
//   node scripts/build-video-clips.mjs [--force]

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(import.meta.dirname, '..');
const RECORDS = path.join(ROOT, 'data', 'videos');
const OUT = path.join(ROOT, 'public', 'videos');
const OUT_POSTERS = path.join(OUT, 'posters');
const FOOTAGE_DIR =
  process.env.FOOTAGE_DIR ??
  "W:\\Shared Photos\\1964-1965 Vietnam War Photos\\Dad's Vietnam Footage";
const FORCE = process.argv.includes('--force');

fs.mkdirSync(OUT_POSTERS, { recursive: true });

const records = fs
  .readdirSync(RECORDS)
  .filter((f) => /^VF-\d{4}\.json$/.test(f))
  .map((f) => JSON.parse(fs.readFileSync(path.join(RECORDS, f), 'utf8')))
  .filter((r) => r.segment && r.crop)
  .sort((a, b) => a.videoId.localeCompare(b.videoId));

// cwd is the OS temp dir so the vidstab transforms file can be referenced by a
// bare relative name — drive-letter colons break ffmpeg filter-option parsing.
function ffmpeg(args) {
  execFileSync('ffmpeg', ['-v', 'error', '-y', ...args], { stdio: 'inherit', cwd: os.tmpdir() });
}

let built = 0;
let skipped = 0;
for (const r of records) {
  const src = path.join(FOOTAGE_DIR, r.sourceFile);
  const mp4 = path.join(OUT, `${r.videoId}.mp4`);
  const poster = path.join(OUT_POSTERS, `${r.videoId}.jpg`);
  const needMp4 = FORCE || !fs.existsSync(mp4);
  const needPoster = needMp4 || !fs.existsSync(poster);
  if (!needMp4 && !needPoster) {
    skipped++;
    continue;
  }

  const { start, end } = r.segment;
  const dur = end - start;

  if (needMp4) {
    if (!fs.existsSync(src)) {
      console.error(`MISSING source for ${r.videoId}: ${src} (is the NAS mounted?)`);
      process.exitCode = 1;
      continue;
    }
    encode(r, src, mp4, dur);
    built++;
  }
  if (needPoster) {
    // Poster from the cleaned clip: a cataloger-chosen moment, or a third in.
    ffmpeg(['-ss', String(r.posterTime ?? dur / 3), '-i', mp4, '-frames:v', '1', '-q:v', '3', poster]);
  }
}

function encode(r, src, mp4, dur) {
  const seek = ['-ss', String(r.segment.start), '-t', String(dur), '-i', src];
  const transforms = `vidstab-${r.videoId}.trf`; // relative to os.tmpdir(), see ffmpeg()

  console.log(`${r.videoId}  ${r.sourceFile}  ${r.segment.start}s-${r.segment.end}s (${Math.round(dur)}s)`);

  // Pass 1: measure camera shake.
  ffmpeg([
    ...seek,
    '-vf',
    `bwdif=mode=0,crop=${r.crop},vidstabdetect=shakiness=6:accuracy=15:result=${transforms}`,
    '-f',
    'null',
    '-',
  ]);
  // Pass 2: full cleanup chain.
  ffmpeg([
    ...seek,
    '-vf',
    [
      'bwdif=mode=0',
      `crop=${r.crop}`,
      `vidstabtransform=input=${transforms}:zoom=2:smoothing=30`,
      'deflicker=size=10',
      // Denoise the wall texture and capture grain — without this the grain
      // pushes the encoded chapters toward GitHub's 100MB file limit.
      'hqdn3d=4:4:8:8',
      'eq=brightness=0.05:contrast=1.2:saturation=1.25:gamma=1.25',
      'scale=trunc(iw*8/9/2)*2:ih', // undo DV's non-square pixels
      'setsar=1',
      'unsharp=5:5:0.4',
    ].join(','),
    '-c:v',
    'libx264',
    '-crf',
    '23',
    '-preset',
    'slow',
    '-pix_fmt',
    'yuv420p',
    '-movflags',
    '+faststart',
    '-an',
    mp4,
  ]);
  fs.rmSync(path.join(os.tmpdir(), transforms), { force: true });
}

console.log(`${records.length} records; ${built} built; ${skipped} already current.`);
