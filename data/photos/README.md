# Photograph records

One JSON file per photograph, named by permanent archival ID: `VN-0001.json` … `VN-0157.json`,
following the `photos` schema in `src/content.config.ts`. The archival scans themselves live in
`originals/` (see its README for the rules).

## Pipeline

1. `npm run photos:import` — walks `originals/`, assigns the next free `VN-####` ID to any scan
   without a record, and writes a stub record (`cataloged: false`). Never touches existing
   records; re-running is safe.
2. `npm run photos:build` — generates web copies into `public/images/photos/` (`full/` at max
   1600px, `thumbs/` at 480px), named by photo ID. Runs automatically before `dev` and `build`;
   output is gitignored.
3. **Cataloging** (by hand, ongoing): edit a record to add `title`, `approximateDate`,
   `location`, `people`, `description`, and — word for word — `larrysRecollection`. Set
   `cataloged: true` when the record has real content. Unknown fields stay absent, never guessed.

Larry's recollection about a photo is stored verbatim in `larrysRecollection` and never edited;
research conclusions go in `researchNotes`.
