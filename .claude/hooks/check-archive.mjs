#!/usr/bin/env node
/**
 * PostToolUse check: run the archive validator after a record changes.
 *
 * Catches a broken cross-collection reference or a lost scan at the moment it
 * is introduced, rather than at the next build. Only ERRORS are surfaced —
 * warnings and notes are method drift for a human to weigh, and interrupting
 * every edit with them would train everyone to ignore the hook.
 *
 * Wired up in .claude/settings.json as a PostToolUse hook on Edit|Write.
 */

import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const done = () => process.exit(0);

let payload;
try {
  payload = JSON.parse(readFileSync(0, 'utf8'));
} catch {
  done();
}

const filePath = payload?.tool_input?.file_path;
if (typeof filePath !== 'string') done();

const posix = filePath.replace(/\\/g, '/');
// Only records and the interview guide/page, whose sync the validator checks.
if (!/\/data\/.+\.json$/.test(posix) && !/(breakfast-questions\.md|interview\.astro)$/.test(posix)) {
  done();
}

// Derive the project root from this file's own location (.claude/hooks/), not
// from the payload's cwd — that arrives in whatever path format the calling
// shell uses, and a POSIX-style path silently fails to resolve on Windows.
const projectDir = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const validator = join(projectDir, 'scripts', 'validate-archive.mjs');
if (!existsSync(validator)) done(); // nothing to enforce

let output;
try {
  execFileSync('node', [validator], {
    cwd: projectDir,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  done(); // exit 0 from the validator means no errors
} catch (e) {
  output = `${e.stdout ?? ''}${e.stderr ?? ''}`;
}

// The validator exited non-zero, so it found at least one error. Show only the
// ERRORS block; warnings and notes are for `npm run validate` to report.
const lines = output.split(/\r?\n/);
const start = lines.findIndex((l) => /^ERRORS \(\d+\)$/.test(l));
const isNextSection = (l) => /^(WARNINGS|NOTES) \(\d+\)$/.test(l) || /^\d+ error\(s\)/.test(l);

let errors = '';
if (start !== -1) {
  const rest = lines.slice(start + 1);
  const end = rest.findIndex(isNextSection);
  errors = [lines[start], ...(end === -1 ? rest : rest.slice(0, end))].join('\n').trim();
}

console.error(
  [
    'npm run validate reports errors after this edit:',
    '',
    errors || output.trim(),
    '',
    'These are archive corruption — a broken reference, a lost scan, an ID that',
    'moved. Fix before continuing; run `npm run validate` for the full report.',
  ].join('\n')
);
process.exit(2);
