# Design: export Larry's Discussion comments into data/recollections/

**Date:** 2026-08-09
**Issue:** [#5 — Export Larry's Discussion comments into data/recollections/](https://github.com/lhunnewe/larry-hunnewell-vietnam/issues/5)
**Status:** Approved by owner in brainstorming session
**Depends on:** #4 (shipped 2026-08-09) — giscus Memories comments with stable terms
(`VN-####`, `place:<id>`, `person:<id>`, `timeline`)

## Purpose

Larry's giscus comments live only in GitHub Discussions. This exporter archives them as
`data/recollections/` records — verbatim, with provenance — so `git pull` retrieves
archival copies and the site renders them as first-class recollection data.

## Decisions already made

- **Authors: config map, Larry only at first.** A login→person map gates export. It ships
  empty; the exporter is a no-op until the family adds Larry's login when his account
  exists. Family logins get added only for comments that are his dictated words. Other
  commenters stay in Discussions, never exported.
- **Deletions: keep the record, mark it.** If a source comment is deleted, its record
  remains with a one-time provenance note ("Source comment deleted from Discussions as of
  <date>"). Nothing Larry said is ever lost. Mirror-delete and human-review-queue options
  were rejected as lossy / heavyweight respectively.
- **Trigger: one idempotent full-sync script, three triggers.** `discussion_comment`
  events (created/edited/deleted) for near-real-time capture, nightly cron for
  self-healing, `workflow_dispatch` for manual runs. Every run reconciles the whole
  Memories category — no incremental state to corrupt. Event-payload-incremental and
  cron-only designs were rejected (fragile / up to 24h lag).

## Units

### `scripts/recollection-authors.json` (new, human-edited)

```json
{ "<github-login>": "<person-id in data/people/>" }
```

Ships as `{}`. The one-line change that turns the pipeline on is adding
`"larrys-login": "larry-dennis-hunnewell"`.

### `scripts/export-recollections.mjs` (new)

Node ≥18, no new dependencies (built-in `fetch`). Auth via `GITHUB_TOKEN` env var.
Run: `node scripts/export-recollections.mjs` (locally: any token with public-repo read).

Each run:

1. GraphQL-page through all discussions in the repo's **Memories** category (100/page,
   comments and their replies 100/page with per-discussion pagination fallback).
2. The discussion **title is the term** (giscus `specific` mapping): `VN-####` →
   `relatedPhotos: [lowercased id]`; `place:<id>` → `relatedPlaces: [id]`;
   `person:<id>` → `relatedPeople: [id]`; `timeline` → no related refs. Titles matching
   no pattern are skipped with a warning (not an error).
3. For every comment or reply whose author login is a key in the author map, upsert
   `data/recollections/giscus-<term-slug>-c<databaseId>.json` (term slug lowercased,
   `:` → `-`). **Records are matched by the `c<databaseId>` filename suffix alone**, so
   if a discussion is ever retitled the record is renamed in place rather than
   duplicated-and-marked-deleted. Record fields:
   - `person`: mapped person id
   - `recorded`: comment `createdAt` as `YYYY-MM-DD`
   - `text`: comment body **byte-for-byte** (markdown preserved, no trimming beyond
     GitHub's own storage)
   - `fidelity`: `"verbatim"`
   - `provenance`: `giscus comment by @<login> on the <term> page; discussion #<n>;
     <comment url>`, plus `; edited <YYYY-MM-DD>` when `lastEditedAt` is set, plus the
     deletion note when applicable (see below)
4. **Machine/human field ownership.** The exporter owns `person`, `recorded`, `text`,
   `fidelity`, and `provenance` (recomputed each run — an edit on GitHub refreshes
   `text`; that is the verbatim rule, not a violation of it). It never writes
   `researchNotes` and preserves it if a human added one. Related arrays are the union
   of derived refs and whatever a human added — entries are never removed.
5. **Deletion pass.** Existing `data/recollections/giscus-*.json` files whose comment id
   no longer appears in the live sweep get the deletion note appended to `provenance`
   once (idempotent — the note is not duplicated on later runs), all other fields left
   untouched, including `text`.
6. Output is deterministic (2-space JSON, trailing newline, stable key order) so re-runs
   with no upstream changes produce a zero diff. Exit code 0 with a summary line
   (`exported N, marked deleted M, skipped K comments by unmapped authors`); nonzero on
   API failure (never partial-writes: sweep fully, then write).

### `.github/workflows/export-recollections.yml` (new)

- `on:` `discussion_comment` (types: created, edited, deleted), `discussion`
  (type: deleted, so whole-thread deletions don't wait for the nightly), `schedule`
  (nightly, `0 9 * * *` UTC), `workflow_dispatch`.
- `permissions:` `contents: write`, `discussions: read`, `actions: write`.
- Steps: checkout, setup-node, run the script with the default `GITHUB_TOKEN`; if
  anything changed, `git pull --rebase` (push-race protection), commit
  `data/recollections/` as `github-actions[bot]` (`Archive recollections from
  Discussions`), push, then **explicitly dispatch the deploy workflow**
  (`gh workflow run deploy.yml`). The dispatch is required because pushes made with the
  default `GITHUB_TOKEN` intentionally do not trigger `on: push` workflows — that same
  suppression (plus deploy.yml never writing to the repo) is the loop protection.
- Concurrency group `export-recollections`: GitHub keeps at most one pending run
  (latest-wins). Fine here — every run is a full idempotent sweep, so the newest run
  covers everything earlier ones would have.
- Note: GitHub disables cron schedules after ~60 days of repo inactivity;
  `workflow_dispatch` remains the manual safety valve.

## Error handling

- API/network failure → nonzero exit, no files written, workflow shows red; next
  trigger (or the nightly) retries naturally. No partial state to repair.
- Push rejected (main advanced mid-run despite the rebase) → red run, same self-healing:
  the next trigger re-sweeps and re-commits.
- Unknown discussion title → warn and skip (someone opened a manual thread; Announcement
  format makes this maintainers-only, so it's rare and deliberate).
- Author not in map → count and skip silently (expected: most commenters are family or
  visitors, only mapped logins are archival voices).
- Record filename collisions are impossible (`databaseId` is unique per comment).

## Testing (against the real API, then cleaned up)

1. `node scripts/export-recollections.mjs` with the empty map → "exported 0", zero diff.
2. Post a test comment as `lhunnewe` on one photo page; temporarily map
   `lhunnewe → larry-dennis-hunnewell` locally; run → record appears; `npm run build`
   passes (zod validates the record; `person` reference resolves).
3. Edit the test comment on GitHub; re-run → `text` refreshed, `edited` note appears;
   add a fake `researchNotes` to the file; re-run → preserved.
4. Delete the test comment (and discussion); re-run → deletion note appended once;
   re-run again → zero diff.
5. Remove the test record, restore the empty author map, verify `git status` clean
   except intended files.
6. Workflow smoke test: `workflow_dispatch` run completes green with "exported 0" and
   no commit.

## Out of scope

- Rendering recollections anywhere new on the site (they already flow through the
  existing `recollections` collection).
- Exporting reactions, or comments by unmapped authors.
- Larry's account creation and the author-map entry that activates the pipeline
  (family task, tracked in #4's closing comment).
