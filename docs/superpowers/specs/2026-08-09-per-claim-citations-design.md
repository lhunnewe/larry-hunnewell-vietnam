# Design: per-claim citations from the sources collection

**Date:** 2026-08-09
**Issue:** [#8 — Render per-claim citations from the sources collection](https://github.com/lhunnewe/larry-hunnewell-vietnam/issues/8)
**Status:** Approved by owner in brainstorming session

## Purpose

Photos, people, places, and timeline events all carry a `sources` array, but nothing
renders it. This feature turns those arrays into visible citations that resolve to
anchored entries on `/sources/`, and seeds the sources collection with real records
for the two already-confirmed war events (Rolling Thunder, Marines at Da Nang). The
machinery activates wherever a `sources` array is non-empty, so citations appear
automatically as future research fills records in.

## Decisions already made

- **Record-style "Sources:" line, not numbered footnotes.** Each record with a
  non-empty `sources` array gets a small mono/record line listing its citations,
  matching the existing "Places:" lines on timeline events. Numbered footnote
  markers were rejected: per-entry numbering across the merged timeline adds
  complexity for no evidentiary gain. Zero client JS either way.
- **Timeline photo entries show their citations too.** Citations render wherever a
  sources array is non-empty — authored events and merged photo entries alike — for
  consistency. (Owner-confirmed.)
- **The `sourceRefs` free-text escape hatch stays.** `sources` remains
  `z.array(z.string())`. A string matching a `data/sources/` id renders as a link;
  any other string renders as plain text. The schema is deliberately **not**
  tightened to `reference('sources')` — free text is a valid interim state while a
  claim awaits a formal source record.

## Units

### `src/components/Citations.astro` (new)

Props: `{ sources: string[] }`. The component loads the sources collection itself
(`getCollection('sources')` is cached by Astro, so per-instance calls are cheap),
keeping call sites to a single line.

- `sources` empty → renders nothing (house dormant-feature pattern).
- Each string that matches a source entry id → `<a
  href={withBase('/sources/#<id>')}>` with the source's **title** as link text.
- Any other string → the string itself as plain text, no link.
- Output: one `<p class="cite-line record">Sources: …</p>` with entries separated
  by `·`, styled like the timeline's `.event-links` lines (scoped component style;
  mono `record` class, `--ink-soft`-leaning color).

### `src/pages/sources.astro` (edit)

- Each `<li>` gains `id={source.id}` so citations can deep-link
  (`/sources/#usaf-gradual-failure`).
- A small `:target` style (background tint using existing tokens) highlights the
  entry a citation link landed on. No JS.
- No other changes; the empty-state branch remains for safety but will no longer
  render once the seed records exist.

### Page wiring (edit, one line each)

`<Citations sources={…} />` renders after the record's own narrative content,
before related-item lists:

- `src/pages/timeline.astro` — authored events: after the description/recollection,
  next to the existing "Places:" line. Photo entries: same position.
- `src/pages/photos/[id].astro` — after the Research notes block.
- `src/pages/places/[id].astro` — after the Research notes block.
- `src/pages/people/[id].astro` — after the Research notes block.

All links go through `withBase()` like every internal link on these pages.

### Seed source records (`data/sources/`, new)

Two records; ids are the filenames:

- **`usaf-gradual-failure.json`** — Jacob Van Staaveren, *Gradual Failure: The Air
  War over North Vietnam, 1965–1966* (Washington, D.C.: Air Force History and
  Museums Program, 2002). Type `secondary-history`; notes mark it as the official
  USAF historical series volume covering Rolling Thunder's start on March 2, 1965.
- **`usmc-landing-buildup-1965.json`** — Jack Shulimson and Charles M. Johnson,
  *U.S. Marines in Vietnam: The Landing and the Buildup, 1965* (Washington, D.C.:
  History and Museums Division, Headquarters, U.S. Marine Corps, 1978). Type
  `secondary-history`; notes mark it as the official USMC series volume covering
  the March 8, 1965 Da Nang landing.

No `url`/`accessed` fields: both volumes are public but the project only records
URLs it has verified; the owner can add links later. Adding the records removes the
build's "collection sources does not exist or is empty" warning.

### Timeline event records (`data/timeline/`, edit)

- `1965-03-02-rolling-thunder.json` — `sources: ["usaf-gradual-failure"]`; update
  the `researchNotes` clause that says a formal citation "should still be added"
  (now stale), keeping the bomb-jettison research question untouched.
- `1965-03-08-marines-da-nang.json` — `sources: ["usmc-landing-buildup-1965"]`;
  same stale-clause update.
- No recollection or verbatim text changes anywhere — citations are additive
  rendering plus research-metadata upkeep only.

## Error handling

- Empty `sources` array (every other record today) → component renders nothing;
  pages are byte-identical in intent to before.
- Free-text entry → plain text, no broken link (deliberate interim state).
- A dangling id (typo that matches no source record) renders as plain text via the
  same fallback — visible on the page, caught by eye rather than by build failure,
  which is the accepted trade-off for keeping free text legal.

## Testing

No test framework; verification is build + temporary-record inspection:

1. `npm run build` green; confirm the sources empty-collection warning is gone.
2. `grep` dist/timeline/index.html: both war events contain
   `/sources/#usaf-gradual-failure` and `/sources/#usmc-landing-buildup-1965`
   links; no other event has a `cite-line`.
3. dist/sources/index.html contains both `id` anchors with title, type label, and
   citation text.
4. Temporarily put a free-text string in one record's `sources`, rebuild, confirm
   it renders as plain text with no `<a>`; `git checkout` the record.
5. Regression: photo/place/person pages and the places map build unchanged for
   records with empty `sources`; no new build warnings.

## Out of scope

- Cataloging further sources or citing any other claims (research work, not
  rendering work).
- Per-sentence/per-field citation granularity — the array is per-record.
- Numbered footnotes, popovers, or any client JS.
- Tightening `sourceRefs` to a zod `reference()`.
