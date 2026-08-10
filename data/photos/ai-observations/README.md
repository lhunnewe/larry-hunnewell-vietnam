# AI survey observations

Machine-generated observation records, one per photograph, produced by an AI vision pass over
the archival scans (issue #16). One JSON file per photo, named by archive ID.

**Ground rules**

- Everything in these files is **machine-generated hypothesis**, not catalog fact. Nothing here
  carries evidentiary weight on its own.
- These records are never merged into the catalog records (`data/photos/VN-####.json`) as fact.
  Promotion happens only through Larry's confirmation, documentary evidence, or human research —
  with the evidence classification set accordingly.
- Nothing is ever written into `larrysRecollection` from here.
- `questionsForLarry` is the working payoff: concrete prompts to use when going through the
  photos with Larry (issue #1).

Record fields: `photoId`, `surveyed` (date), `surveyedBy`, `description`, `visibleText`,
`objects`, `setting`, `people` (count + notes, no identity claims), `landmarkHypotheses`,
`geolocationHypothesis` (hypothesis / reasoning / confidence), `crossReferences` (related photos
or open questions), `questionsForLarry`, `qualityNotes`.
