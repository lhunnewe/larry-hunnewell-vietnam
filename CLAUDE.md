# Working in this archive

This is a **historical archive with an evidence methodology**. Astro is only the renderer. The
subject is Larry Dennis Hunnewell's Vietnam service, 1964–1965; the sources are his own memory,
157 photographic scans, 8mm film, military records, and archival research. He is 86 and reads
the site.

Read `README.md` for the project, `docs/architecture.md` for the stack, `research/README.md`
for how research is filed. This file is the part that is easy to get wrong.

## Who is speaking

**Larry does not use a computer — his son types for him**, on both GitHub accounts. So
`fidelity` on a recollection records *how the words reached the page*, never who owns the
login:

- `verbatim` — Larry typed it himself. Nothing is, yet; the state exists so the flag stays
  honest if he ever does.
- `transcribed` — Larry's words, typed by his son as he spoke them. Best-effort phonetic
  spellings of names and places, checked with Larry, are still Larry's words.
- `paraphrase` — his son's report of what Larry said, in his son's words. **Third-person
  voice ("my father says…") means paraphrase, always**, whatever the source of the facts.

Fidelity is not confidence. It says how faithfully words were captured; `confidence` rates
whether what they say is true. A transcribed memory can be wrong, and often is — that is
the archive working, not failing.

## The rules that do not bend

1. **Never alter `larrysRecollection`, a recollection record's `text`, or a drawing's
   `labels`.** Not to fix grammar, spelling, or a name he misremembers. His words are
   primary-source evidence. If research contradicts him, the difference goes in
   `researchNotes` — his account stays as given.
   Preserve his own renderings: "Thom Son Nuht", "Zekeowski", "sepititis", "su-ners".
2. **Unknown is written as unknown.** Never fill a field with a plausible guess. `datePrecision:
   "unknown"` and an absent `location` are correct answers. A guess entered once becomes a fact
   three sessions later.
3. **Archive IDs are permanent.** `VN-####`, `VF-####`, `VD-####`, public filenames, and the
   person/place slugs never change once assigned — other records, the website, and Larry's
   giscus comment threads are keyed to them. Filename case is part of the ID (`VN-0002.json`, not
   `vn-0002.json`); Windows + `core.ignorecase` will let this drift silently.
4. **Machine output is hypothesis, never fact.** `data/photos/ai-observations/` is a vision
   pass. It is never merged into a catalog record as fact and **never** written into
   `larrysRecollection`. It is promoted only by Larry's confirmation, a document, or human
   research — with `confidence` set accordingly.
5. **Every important claim carries a `confidence`**: `confirmed`, `strongly-supported`,
   `plausible`, `unverified-recollection`, `contradicted`. Anything above `plausible` should
   cite a source; `npm run validate` warns when it doesn't.
6. **Do not prime him.** Several interview questions are probes that only work if the detail
   isn't supplied first. Hypotheses that would spoil a probe live in `research/` — never in a
   field that renders on a page he browses (`title`, `description`, `researchNotes`, `summary`
   on photo, footage, person, and place pages). Most of those fields are parked for now (see
   "The minimal site"), but write them as if they render: they will again. `/interview/` is deliberately unlinked and
   `noindex`; don't link it from any public page.
7. **Negative results are results.** "Searched X, not there" is a finding worth recording with
   its date and scope — it stops the next session repeating the search. The unresolved ledger
   is full of these; keep writing them.

## Before you push or merge

Nothing reaches `main` — by push, merge, or the nightly export — without passing all three:

```sh
npm run validate          # the records: relationships, files, method rules
npm run build             # zod schemas + the real build, then (postbuild) the check below
npm run check:published   # the BUILT pages in dist/: what GitHub Pages will serve
```

`npm run build` runs all three (`prebuild` validates, `postbuild` checks the output), so a clean
build is the gate. Run it before every commit you intend to push, and read its output; do not
push on a failure, and never skip or weaken a check to get past one.

- **`validate`** errors are archive corruption — a dangling reference, a lost scan, an ID that
  moved. Warnings are method drift — an elevated claim with no citation, an interview probe in a
  rendered field, an unsurveyed photo.
- **`check:published`** (`scripts/check-published.mjs`) reads every built page except
  `/interview/` and fails on: a link into a parked section; an evidence badge or research-notes
  section; an interview-probe term (`scripts/spoiler-terms.mjs`, shared with the validator) or a
  publish-only term (unit designations, the held Stars and Stripes and crash names, file paths,
  ledger and issue numbers, interview apparatus, health and benefits details); anything shaped
  like an SSN, service number, phone, email, street address or date of birth; text from a parked
  field; or the text of a held recollection. Larry's own transcribed words are exempt from the
  term checks (a probe he answers himself is answered) — a paraphrase is not.
- **CI enforces it.** The deploy workflow's build runs `postbuild`, so a failure stops the
  publish, including after an export. `.github/workflows/check.yml` runs the same build on every
  pull request and every non-`main` branch: merge only when it is green.

None of it is auto-fixable: every fix is a judgment about evidence, so read the failures, don't
silence them. If a term has become safe because Larry has said it himself, retire it in the list
with a dated comment saying so.

Known open drift is listed at the bottom of this file.

## The minimal site

Since 2026-09-14 the public site is held to **Home, Photographs, Footage, Drawings and Tell a
Story**, until Larry's service file comes back from NPRC (SF-180 mailed 2026-08-17; the certified
receipt came back about 2026-09-09; no reply expected soon). An audit that day found the other
pages carrying stale claims (the "118th AOD" brief, a KIA date that contradicts his departure),
answers to open cold questions, and private details (a living widow's name, an old street
address, VA and medical specifics). Findings, page by page: `research/site-audit-2026-09-14.md`.

What renders now, and nothing else:

| Page | Shows |
|---|---|
| Photograph | the scan, `title` (hedged to his words), Larry's recollections, the comment box |
| Film clip | the clip, Larry's recollections, the comment box |
| Drawing | the sheet, `title`, `drawnDisplay`, `labels`, Larry's recollections, the comment box |
| Home, indexes, Tell a Story | short fixed text written in the templates |

Under each recollection only its date renders (`recordedLine`), not its provenance.
`description`, `researchNotes`, `summary`, `provenance`, dates, places, people, evidence badges
and citations all stay on the records and do not render. Keep writing them — they are the
archive — but a field that does not render is still in the public repository, so rule 6 and the
privacy rule still apply to it.

**`researchNotes` stays unrendered even when pages come back** (decided 2026-09-14). It is the
archive's working field: cross-references, file paths and ledger numbers belong there and need
not be stripped. The fields that will render again — `title`, `description`, `summary`, `name`,
`role`, timeline `displayDate`, sources `notes` — must read cleanly to Larry: no file paths,
ledger or issue numbers, or interview talk.

**The comment boxes load GitHub Discussions live**, so the build cannot check them. A comment
that must come off the site is hidden on GitHub (minimized as outdated, which giscus shows as
"This comment was minimized"; reversible), as well as held in its record. Hidden so far: the
2026-08-15 VN-0023 prisoner paraphrase, and the four comments telling the VN-0157 story.

**VN-0157** (the family's decision, 2026-09-14): the photograph stays public; the story of the
injury is held — its four recollections (on VN-0157, VN-0041 and the stories page) carry a
`hold`, their comments are hidden, and the title is neutral. Lift all three together when the
family decides to show it (#22).

- **Parked pages** are `src/pages/_*.astro` and `src/pages/_people/`, `_places/`, `_research/`
  (Astro does not build `_`-prefixed files). They are not deleted; IDs, slugs and giscus
  threads are untouched. **To bring one back:** work through its entries in the audit file, then
  rename it without the underscore, add it back to the nav in `src/layouts/BaseLayout.astro`,
  remove it from `PARKED_SECTIONS` in `scripts/check-published.mjs`, and get a clean build.
  Restore a page because its content has been checked, not because a record arrived.
- **Held recollections.** A recollection with a `hold` (a sentence saying why) never renders —
  use it for a report that would hand Larry the answer to a question still to be put to him,
  typically his son's account of what he said while drawing — or for a story the family has
  chosen not to show yet. The record's words are unchanged; the exporter preserves `hold` like
  `fidelity`. Delete the field once the question is asked or the family decides.

## What is enforced automatically

Two hooks in `.claude/settings.json` back the rules above, so they don't depend on anyone
remembering them:

- **`guard-testimony.mjs`** (before every edit) blocks any change to an existing
  `larrysRecollection`, a recollection's `text`, a drawing's `labels`, or a
  `photoId`/`videoId`/`drawingId`. It simulates the pending edit and compares only those
  fields, so it never blocks *adding* Larry's words to a stub — that is cataloging. It fails open: if it cannot read or parse, the edit proceeds.
- **`check-archive.mjs`** (after every edit to a record) runs the validator and reports
  errors only. Warnings and notes stay for `npm run validate`, so the hook interrupts for
  corruption and nothing else.

If Larry himself revises something, that is a **new recollection record** with its own date
and provenance — not an edit to the old one.

## Where things go

| You have | It goes in |
|---|---|
| Larry's words | `larrysRecollection` on the record, or a `data/recollections/` record with `fidelity` and `provenance` |
| A drawing he made | `data/drawings/` with the next `VD-####`, the capture file unrenamed in `originals/`, every legible word on the sheet in `labels`, in capitals, spelled as written, and `provenance` saying what was not recorded. An inscription with any letter you cannot read stays out of `labels` whole; `description` may say it exists, but its legible words and readings go only in `research/drawings/README.md`, never in a title. A word found later, or one he confirms, is added by editing the JSON outside the Edit tool, in a commit that says so |
| A paraphrase of what he said | a recollections record with `fidelity: "paraphrase"` — never in `larrysRecollection` |
| A report that would answer a question he has not yet been asked | the recollection record as usual, plus `hold` saying which question — it will not render |
| Analysis, a hypothesis, a contradiction | `researchNotes` — but see rule 6 before writing it to a rendered field |
| A working search, leads, transcriptions | `research/<area>/<slug>.md`, dated, with provenance |
| An open question | `research/unresolved/README.md` **and** a GitHub issue |
| A document you cited | `data/sources/*.json`, then reference its id from every record making the claim |
| Anything with an SSN, DOB, or a living person's contact details | `private/` (gitignored) — never the repo |

The NAS folder `W:\Shared Photos\1964-1965 Vietnam War Photos\Private Archive` is a **mirror
target**: `scripts/sync-private-archive.ps1` copies `private/` onto it with `robocopy /MIR`, so
anything saved straight into that folder is deleted on the next sync. When the family drops a
new scan there, copy it into the repo (or `private/`) before anything else.

`data/` is what the website renders and what is asserted. `research/` is the messy middle.
Findings move from `research/` to `data/` only when the evidence supports the classification.

## Content model

Records are JSON under `data/`, loaded as Astro content collections with zod validation
(`src/content.config.ts`). Collections: `photos`, `videos`, `drawings`, `people`, `places`,
`timeline`, `recollections`, `sources`. They reference each other with `reference()`, so
relationships are data, not markup.

**Reference ids are the lowercased filename.** `data/photos/VN-0028.json` is referenced as
`"vn-0028"`. Getting this wrong fails the build; `npm run validate` names the fix.

Dates: `sortDate` (`YYYY-MM-DD`) orders, `displayDate`/`approximateDate` show, `datePrecision`
says how much to trust it. Display text never fakes precision the evidence doesn't support.

Two files are the same interview question list in two forms and must be updated together:
`research/interviews/breakfast-questions.md` and `src/pages/interview.astro`.

## Commits

Session work gets one commit per session with a summary subject and a bulleted body of what was
established, what was ruled out, and what was left open — see `git log` for the pattern. Cite
issue numbers. Record negatives in the body; they are the most re-readable part.

## Known drift

`npm run validate` currently reports **0 errors, 0 warnings, 1 note** — and that note is the
benign one saying the working guide covers more photographs than the curated `/interview/`
page, which is by design.

What the validator cannot see, and what is actually behind:

- **The summary surfaces are one harvest behind the records.** New testimony arrives in
  `data/recollections/` from the giscus export and is read for *fidelity* but not always for
  *content*, so answers sit there while `research/unresolved/README.md`, the GitHub issues,
  `src/pages/research.astro` and the interview guide still list the question as open. After
  any export, read the new records for what they answer, not only for who said them.
- **Nine sections are parked, cleaned but not restored** (`research/site-audit-2026-09-14.md`).
  A restore test passes except for the source `notes`, and the restored templates do not yet
  render person/place `summary` or timeline `description`. Family decisions still open before
  restoring: whether those fields render; the 450-civilians event on a page he browses; medical
  details (`2026-call-japan-medevac.json` is held pending this); the UTT/68th source titles
  while the unit question is open; and two public research files holding private family and
  records detail (`research/people/hunnewell-family-newspapers.md`,
  `research/records-request/dd214-findings.md`), which may belong in `private/`.
- **The research page (now parked) listed six questions; the ledger holds thirty-eight.**
  Closing that gap is authorship, not bookkeeping: several ledger questions cannot be published
  as written without breaking rule 6.
- **Not every ledger question has an issue, and not every issue has a ledger entry**, though
  the rule above says both are required.

Keep this section honest. It described drift that had already been fixed until an audit
caught it, which is the same failure it exists to prevent.
