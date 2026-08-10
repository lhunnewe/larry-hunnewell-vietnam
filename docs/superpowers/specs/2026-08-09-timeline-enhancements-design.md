# Design: interactive timeline — category filters and photo events

**Date:** 2026-08-09
**Issue:** [#7 — Interactive timeline enhancements](https://github.com/lhunnewe/larry-hunnewell-vietnam/issues/7)
**Status:** Approved by owner in brainstorming session

## Purpose

The timeline page renders all events as a static list with category colors. Two
enhancements: (1) filter by category, (2) photographs appear on the timeline
automatically once cataloging (#1) gives them dates.

## Decisions already made

- **Photos join via a build-time merge, gated by a new optional `sortDate` field**
  (`YYYY-MM-DD`, zod-validated by regex) on the photos schema, set during cataloging.
  Photos with `cataloged: true` **and** a `sortDate` become synthetic timeline entries.
  Hand-authoring duplicate timeline JSON (drift) and parsing free-text
  `approximateDate` (fragile) were rejected. Zero photos qualify today; the feature
  activates as cataloging progresses, with no further code changes.
- **Filtering is client-side, vanilla JS, progressive enhancement.** No framework, no
  URL state, no date-range slider, no animation (YAGNI — the issue asks for category
  filtering only). Without JS, the full unfiltered list renders and the filter UI does
  not appear.

## Units

### Photos schema (`src/content.config.ts`, edit)

Add to the `photos` collection:

```ts
/** Sortable date for timeline placement, set during cataloging. */
sortDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
```

### Timeline page (`src/pages/timeline.astro`, edit)

**Merge.** Load `photos` alongside `timeline`. For each photo with
`cataloged && sortDate`, build an entry shaped like a timeline event:

- `sortDate` from the photo; `displayDate` = `approximateDate ?? sortDate`
- `datePrecision`, `confidence`, `title`, `description` from the photo record
- category `photo` (already in `CATEGORY_META`)
- link target `/photos/<id>/` and thumbnail `/images/photos/thumbs/<photoId>.jpg`

Merge with authored timeline events into one list sorted by `sortDate` (ties: authored
events first, then photos by photoId). Render photo entries in the same `<li>`
structure, adding the thumbnail (linked, `loading="lazy"`, alt = photo title) and a
"View photograph →" link. Existing `photo`-category *authored* events (if any are ever
written) are untouched — the merge only adds entries.

**Markup for filtering.** Each `<li class="event">` gains
`data-category={event.category}`. The legend stays as-is for the no-JS case.

### Filter chips (inline `<script>` in `timeline.astro`)

- On DOMContentLoaded, the script builds a chip row (`<button>` per category present,
  from the categories actually on the page, plus "All") and inserts it after the lede,
  hiding the static legend (the chips replace it — same swatches, plus per-category
  counts).
- Multi-select toggles: clicking a category chip toggles it; events whose category is
  not in the active set get `hidden`. "All" (the default) clears the set and shows
  everything; activating any category deactivates "All" and vice versa when the last
  category is untoggled.
- Accessibility: `aria-pressed` on chips, chip row is a `<div role="group"
  aria-label="Filter timeline by category">`; buttons are real `<button>`s (keyboard
  free); chip text ≥ 1rem with the site's record/mono styling; color swatches are
  supplementary (label text always present).
- No persistence — a page load starts at "All".

## Error handling

- Photo with `sortDate` but `cataloged: false` → not merged (cataloging is the gate).
- Photo entry with no thumbnail on disk → normal `<img>` 404 behavior; acceptable
  (thumbnails exist for all 157 scans via the existing image pipeline).
- Zero qualifying photos (today's state) → page renders exactly as before, plus chips.

## Testing

1. `npm run build` passes with the schema addition (no data files change).
2. Temporarily set `cataloged: true`, `sortDate`, and a title on one local photo
   record → build → verify the entry appears at the right chronological position with
   thumbnail and link; revert the record.
3. Browser check (local `npm run dev` or built output): chips toggle categories,
   multi-select works, "All" resets, `aria-pressed` reflects state, keyboard operable.
4. JS disabled → full list renders, legend visible, no chips, no errors.

## Out of scope

- Cataloging any photos (issue #1 does that; this feature consumes its output).
- URL-persisted filter state, date-range filtering, animations.
- The interactive map (#6).
