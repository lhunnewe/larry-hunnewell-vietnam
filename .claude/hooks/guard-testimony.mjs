#!/usr/bin/env node
/**
 * PreToolUse guard: the archive's two irreversible rules, enforced.
 *
 *   1. Larry's own words are never altered  (CLAUDE.md rule 1)
 *   2. Archive IDs are permanent            (CLAUDE.md rule 3)
 *
 * Everything else in this archive is recoverable by editing a field. These two
 * are not: an edited recollection destroys the primary source, and a changed ID
 * breaks the website, other records, and Larry's giscus comment threads, which
 * are keyed to it.
 *
 * The guard simulates the pending edit, parses the result, and compares only the
 * protected fields. It blocks a change to an existing value; it never blocks
 * ADDING one, because that is what cataloging does.
 *
 * Fails open: if anything cannot be read, parsed, or simulated, the edit is
 * allowed. A guard that blocks on its own confusion would be worse than none.
 *
 * Wired up in .claude/settings.json as a PreToolUse hook on Edit|Write.
 */

import { readFileSync, existsSync } from 'node:fs';

/** Fields holding someone's own words, by the directory they live in. */
const TESTIMONY = { 'data/recollections': 'text', default: 'larrysRecollection' };
const PERMANENT_IDS = ['photoId', 'videoId'];

const allow = () => process.exit(0);

/** Block the tool call and tell Claude why. */
function block(lines) {
  console.error(lines.join('\n'));
  process.exit(2);
}

function readStdin() {
  try {
    return JSON.parse(readFileSync(0, 'utf8'));
  } catch {
    return null;
  }
}

/** Apply a pending Edit in memory so the result can be inspected. */
function simulate(tool, input, current) {
  if (tool === 'Write') return input.content;
  if (tool !== 'Edit') return null;

  const { old_string: from, new_string: to, replace_all: all } = input;
  if (typeof from !== 'string' || typeof to !== 'string') return null;
  if (!current.includes(from)) return null; // the edit will fail on its own

  return all ? current.split(from).join(to) : current.replace(from, to);
}

const payload = readStdin();
if (!payload) allow();

const tool = payload.tool_name;
const input = payload.tool_input ?? {};
if (tool !== 'Edit' && tool !== 'Write') allow();

const filePath = input.file_path;
if (typeof filePath !== 'string') allow();

const posix = filePath.replace(/\\/g, '/');
if (!/(^|\/)data\/.+\.json$/.test(posix)) allow();
if (!existsSync(filePath)) allow(); // a new record: nothing to protect yet

let currentText;
let before;
try {
  currentText = readFileSync(filePath, 'utf8');
  before = JSON.parse(currentText);
} catch {
  allow();
}

const proposedText = simulate(tool, input, currentText);
if (typeof proposedText !== 'string') allow();

let after;
try {
  after = JSON.parse(proposedText);
} catch {
  allow(); // the build and npm run validate will catch malformed JSON
}

const dir = Object.keys(TESTIMONY).find((d) => d !== 'default' && posix.includes(`${d}/`));
const testimonyField = dir ? TESTIMONY[dir] : TESTIMONY.default;
const shortPath = posix.slice(posix.search(/(^|\/)data\//)).replace(/^\//, '');

const was = before[testimonyField];
const now = after[testimonyField];

if (typeof was === 'string' && was.trim() !== '' && now !== was) {
  block([
    `BLOCKED: this edit changes "${testimonyField}" in ${shortPath}.`,
    '',
    "Larry's words are primary-source evidence and are never altered — not for",
    'grammar, spelling, or a name he misremembers (CLAUDE.md rule 1).',
    '',
    now === undefined || now === null
      ? '  The edit removes the field entirely.'
      : `  was: ${JSON.stringify(was.slice(0, 120))}${was.length > 120 ? '…' : ''}\n  now: ${JSON.stringify(String(now).slice(0, 120))}${String(now).length > 120 ? '…' : ''}`,
    '',
    'If research contradicts him, put the difference in "researchNotes" and set',
    '"confidence" accordingly — his account stays as given. If he himself revised',
    'it, add a new recollection record with its own date and provenance rather',
    'than overwriting this one.',
  ]);
}

for (const field of PERMANENT_IDS) {
  const oldId = before[field];
  const newId = after[field];
  if (typeof oldId === 'string' && newId !== oldId) {
    block([
      `BLOCKED: this edit changes "${field}" in ${shortPath} (${oldId} → ${newId ?? 'removed'}).`,
      '',
      'Archive IDs are permanent once assigned (CLAUDE.md rule 3). The website,',
      "other records, and Larry's giscus comment threads are all keyed to this ID.",
      '',
      'If a record genuinely needs a different ID, that is a migration — not an',
      'edit — and it has to be planned across every reference to it.',
    ]);
  }
}

allow();
