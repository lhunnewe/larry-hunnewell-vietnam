# Design: interactive map of places

**Date:** 2026-08-09
**Issue:** [#6 — Interactive map of places](https://github.com/lhunnewe/larry-hunnewell-vietnam/issues/6)
**Status:** Approved by owner in brainstorming session

## Purpose

A map on the Places index showing settled locations as markers, with unsettled places
("Thom Son Nuht", Japan) kept visually and conceptually distinct: they are listed off
the map, never pinned. Clicking a marker surfaces the place's cross-referenced records
and links to the place detail page, which becomes the full hub (gaining reverse-lookup
sections for photographs and timeline events).

## Decisions already made

- **Leaflet from npm (self-hosted JS/CSS in the bundle), OpenStreetMap raster tiles.**
  The issue suggests exactly this; OSM tile policy comfortably covers this site's
  traffic. The only external requests are tile images. Hand-built SVG map (high effort,
  no useful zoom) and MapLibre GL + vector tiles (tile host, heavy bundle) rejected.
- **The map lives on the existing `/places/` index page**, above the card grid. No new
  page or nav entry.
- **Only places with `coordinates` get markers.** The schema already states coordinates
  are recorded only when the geographic identification is settled — so the map inherits
  the archive's evidence discipline. Places without coordinates render in a
  **"Not yet on the map"** panel (name, evidence badge, one-line reason from the
  record, link) — that panel *is* the visually-distinct treatment the issue asks for.
  Tan Son Nhut appears as a pin only if research (#11) settles the identification and
  coordinates are recorded; no dashed "hypothesis pins".

## Units

### Places index (`src/pages/places/index.astro`, edit)

Build-time work:

- Reverse-lookup counts per place: photographs (`photos.location`), timeline events
  (`timeline.relatedPlaces`), recollections (`recollections.relatedPlaces`), people
  (`place.relatedPeople`).
- Split places into `mapped` (has `coordinates`) and `unmapped`.
- Serialize `mapped` to a `<script type="application/json" id="map-places">` block:
  `[{ id, name, lat, lng, confidence, confidenceLabel, summary, counts, url }]` —
  `url` pre-computed with `withBase()`.

Markup:

- `<div id="places-map" hidden>` above the card grid (revealed by the map script; page
  is unchanged for no-JS visitors).
- "Not yet on the map" panel after the map: a short standing explanation ("nothing
  gets coordinates until its identification is settled") plus one entry per unmapped
  place — linked name and `EvidenceBadge`; the specifics of *why* each is unpinned
  live on its place page. Rendered server-side, visible with or without JS. This panel
  is how the issue's "Japan" bullet is satisfied: Japan (location within the country
  unknown) and Thom Son Nuht (identification itself unsettled) differ in kind, but
  both stay off the map for the same evidentiary reason.
- The existing card grid stays untouched below.

### Map script (client `<script>` in `places/index.astro`)

- `import L from 'leaflet'` and `import 'leaflet/dist/leaflet.css'` (Astro bundles
  both; Leaflet's default marker PNGs are replaced by inline `L.divIcon` circles so no
  image assets need copying — divIcons are styled with the site's palette and colored
  by evidence level via the existing `--ev-*` custom properties where sensible).
- Reads the JSON block; if zero places, exits without revealing the map div.
- Reveals the div, creates the map with OSM tile layer (standard attribution),
  `fitBounds` over all markers with padding; `scrollWheelZoom` disabled (page-scroll
  friendliness), zoom control on.
- Marker popup HTML: name (link to place page), confidence label, one-line summary,
  and a compact "N photographs · N events · N recollections · N people" line — only
  non-zero counts shown. Text fields are HTML-escaped before interpolation into popup
  markup (data is repo-controlled, but summaries contain quotes and future text should
  never be able to break the popup).
- The map container carries an explicit CSS height (Leaflet renders zero-tall
  otherwise); the JSON block uses `type="application/json"` with
  `set:html={JSON.stringify(...)}` so Astro leaves it inline and unprocessed.

### Place detail page (`src/pages/places/[id].astro`, edit)

Three reverse-lookup sections, each rendered only when non-empty:

- **"Photographs at this place"** — thumbnail grid (`/images/photos/thumbs/`, linked
  to photo pages, `loading="lazy"`), from `photos.location === place.id`.
- **"On the timeline"** — linked list of timeline events whose `relatedPlaces`
  include the place, sorted by `sortDate`, showing `displayDate` and title.
- **"Recollections"** — records from the `recollections` collection whose
  `relatedPlaces` include the place, rendered with the existing `Recollection`
  component plus a provenance line. (Without this, the popup's recollection count
  would point at a page where those records are unfindable — e.g. the KIA-report
  recollection references japan today.)

People (`relatedPeople`, which includes Larry himself — the popup's "N people" count
deliberately matches that list) and the place's own `larrysRecollection` field already
render; no change there.

### Dependency

`leaflet` (runtime) and `@types/leaflet` (dev). Verify presence in `package.json` /
lockfile rather than assuming an install step; no CDN, no other additions.

## Error handling

- No JS → map div stays hidden; card grid and "Not yet on the map" panel carry the
  page (they are server-rendered).
- Tile requests fail (offline, OSM outage) → Leaflet shows blank tiles; markers and
  popups still work.
- All places lose coordinates some day → JSON block empty, script exits, no empty map
  box.
- A photo referencing a place with no thumbnail on disk → standard `<img>` 404;
  acceptable (thumbnails exist for all scans).

## Testing

1. `npm run build` passes; built `/places/` page contains the JSON block with exactly
   the two coordinate-bearing places and the off-map panel with the other two.
2. Confirm the built page pulls no CDN resources: Leaflet JS/CSS come from the site's
   own hashed assets; the only external hosts referenced are `tile.openstreetmap.org`
   (and giscus, from the pre-existing MemoryBox embed elsewhere).
3. Local preview: markers render at Nha Trang and Nui Ba Den, popups show counts and
   link through; keyboard: markers are focusable (Leaflet default) and popups openable.
4. No-JS check: map absent, panel and cards fine.
5. Place detail pages: with a temporary local photo `location` assignment, the
   thumbnail section renders; reverted afterward (no photos reference places yet in
   committed data). Timeline section renders for places already referenced by events
   (nha-trang, nui-ba-den have timeline events today).
6. Owner click-test on the deployed site.

## Out of scope

- Coordinates for Japan or Thom Son Nuht (research questions #9/#11/#14 own that).
- Marker clustering, search, routing, fullscreen control.
- Historical-map tile layers (period maps would be lovely; separate issue if wanted).
