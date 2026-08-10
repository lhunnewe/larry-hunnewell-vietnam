# Archival photo scans — originals

These are the archival scans of the 157 photographs Larry brought home from Vietnam. They are
the project's primary photographic evidence.

## Provenance

- Received from the family in a folder labeled **"1969 Vietnam War Photos"**. Note the
  discrepancy: Larry's service was 1964–1965. The "1969" label is preserved here as a fact about
  how the prints were stored, not as a date claim — whether it is a mislabel or means something
  (a developing date, a different batch of photos mixed in) is an open research question.
- The subfolders are the **family's own sorting** of the prints (Group Photos with Unit;
  Landscape, Locations and villages; Military Vehicles; Native Vietnamese; and Vietnam Ladies
  nested under Group Photos). This sorting is preserved as catalog information and recorded in
  each photo's `originalPath`.
- Filenames follow the scanning lab's roll/exposure scheme (e.g. `1920236-R1-E004.jpg`) and are
  **never renamed**.

## Rules

1. Never rename, move, or delete files here. Each photo's identity lives in its `VN-####` record
   one directory up, keyed by `originalPath`.
2. Web copies are generated (never hand-edited) into `public/images/photos/` by
   `npm run photos:build`; they are not committed.
3. Embedded metadata (EXIF/IPTC/XMP) may be written into these files as cataloging establishes
   facts — driven from the JSON records via a script (planned), so the records stay the single
   source of truth. This is safe because git history preserves every prior version of each file;
   a pre-metadata original can always be recovered.
4. New scans: drop them in (in an appropriate folder) and run `npm run photos:import` to assign
   the next free IDs. IDs are permanent once assigned.
