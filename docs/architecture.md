# Architecture

## Stack

- **Astro 5**, fully static output — no backend, no database
- **GitHub Pages** hosting, deployed by **GitHub Actions** (`withastro/action`)
- Self-hosted fonts via `@fontsource` packages (Oswald, Source Serif 4, Courier Prime)
- Planned: **GitHub Discussions + giscus** for Larry's comments, with a later export job that
  archives his comments into `data/recollections/`

## Content model

All historical records live as JSON files under `data/`, loaded through Astro content collections
(`src/content.config.ts`) with zod validation. Collections: `photos`, `people`, `places`,
`timeline`, `recollections`, `sources`. Records reference each other by file id (`reference()`),
so relationships — photo → person → place → event — are data, not hardcoded HTML.

Shared conventions enforced by the schemas:

- `confidence`: one of `confirmed`, `strongly-supported`, `plausible`,
  `unverified-recollection`, `contradicted`
- `larrysRecollection`: Larry's words, never edited; research goes in `researchNotes`
- Date precision is explicit (`exact` / `approximate` / `unknown`); ordering uses a separate
  `sortDate` so display text never has to fake precision

## Design system

Tokens in `src/styles/global.css`. Two typographic voices carry the project's method: Source
Serif 4 for memory (memoir prose, Larry's quotes), Courier Prime for the record (IDs, dates,
evidence badges, the service-record card). Display face is Oswald. Palette: canvas paper,
olive-black ink, khaki lines, VS-17 signal-panel orange as the single accent.

Key components: `BaseLayout` (masthead + nav + footer), `EvidenceBadge` (the five-level
classification), `Recollection` (quoted memory with attribution).

## URL structure

Base path `/larry-hunnewell-vietnam` (GitHub Pages project site). All internal links go through
`withBase()` in `src/lib/paths.ts`. Detail pages are generated per collection entry:
`/photos/VN-0001/`, `/people/sgt-lowry/`, `/places/nui-ba-den/`.

## Photo pipeline

Archival scans live in `data/photos/originals/` (committed, never renamed; the family's folder
sorting is preserved and recorded per photo as `originalPath`). `scripts/import-photos.mjs`
assigns permanent `VN-####` IDs and writes stub records; `scripts/build-photo-images.mjs`
(automatic before `dev`/`build`, including in CI) generates gitignored web copies under
`public/images/photos/{full,thumbs}/` named by ID. Cataloging is manual edits to the JSON
records; `cataloged: false` records render honestly as "not yet cataloged."

## Not yet built

Planned next, roughly in order: photo cataloging with Larry (titles, dates, places, verbatim
recollections), interactive map, giscus integration, recollection export from Discussions,
per-claim citation rendering from the `sources` collection, embedding settled metadata into
original scans via exiftool driven from the JSON records.
