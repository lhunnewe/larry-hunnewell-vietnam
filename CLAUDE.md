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

1. **Never alter `larrysRecollection`, or a recollection record's `text`.** Not to fix grammar,
   spelling, or a name he misremembers. His words are primary-source evidence. If research
   contradicts him, the difference goes in `researchNotes` — his account stays as given.
   Preserve his own renderings: "Thom Son Nuht", "Zekeowski", "sepititis", "su-ners".
2. **Unknown is written as unknown.** Never fill a field with a plausible guess. `datePrecision:
   "unknown"` and an absent `location` are correct answers. A guess entered once becomes a fact
   three sessions later.
3. **Archive IDs are permanent.** `VN-####`, `VF-####`, public filenames, and the person/place
   slugs never change once assigned — other records, the website, and Larry's giscus comment
   threads are keyed to them. Filename case is part of the ID (`VN-0002.json`, not
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
   on photo, footage, person, and place pages). `/interview/` is deliberately unlinked and
   `noindex`; don't link it from any public page.
7. **Negative results are results.** "Searched X, not there" is a finding worth recording with
   its date and scope — it stops the next session repeating the search. The unresolved ledger
   is full of these; keep writing them.

## Before you finish

```sh
npm run validate    # relationships, files, and method rules
npm run build       # zod schema validation + the real build
```

`npm run validate` also runs before `build`. Errors are archive corruption — a dangling
reference, a lost scan, an ID that moved. Warnings are method drift — an elevated claim with no
citation, an interview probe in a rendered field, an unsurveyed photo. Neither is auto-fixable:
every fix is a judgment about evidence, so read them, don't silence them.

Known open drift is listed at the bottom of this file.

## What is enforced automatically

Two hooks in `.claude/settings.json` back the rules above, so they don't depend on anyone
remembering them:

- **`guard-testimony.mjs`** (before every edit) blocks any change to an existing
  `larrysRecollection`, a recollection's `text`, or a `photoId`/`videoId`. It simulates the
  pending edit and compares only those fields, so it never blocks *adding* Larry's words to
  a stub — that is cataloging. It fails open: if it cannot read or parse, the edit proceeds.
- **`check-archive.mjs`** (after every edit to a record) runs the validator and reports
  errors only. Warnings and notes stay for `npm run validate`, so the hook interrupts for
  corruption and nothing else.

If Larry himself revises something, that is a **new recollection record** with its own date
and provenance — not an edit to the old one.

## Where things go

| You have | It goes in |
|---|---|
| Larry's words | `larrysRecollection` on the record, or a `data/recollections/` record with `fidelity` and `provenance` |
| A paraphrase of what he said | a recollections record with `fidelity: "paraphrase"` — never in `larrysRecollection` |
| Analysis, a hypothesis, a contradiction | `researchNotes` — but see rule 6 before writing it to a rendered field |
| A working search, leads, transcriptions | `research/<area>/<slug>.md`, dated, with provenance |
| An open question | `research/unresolved/README.md` **and** a GitHub issue |
| A document you cited | `data/sources/*.json`, then reference its id from every record making the claim |
| Anything with an SSN, DOB, or a living person's contact details | `private/` (gitignored) — never the repo |

`data/` is what the website renders and what is asserted. `research/` is the messy middle.
Findings move from `research/` to `data/` only when the evidence supports the classification.

## Content model

Records are JSON under `data/`, loaded as Astro content collections with zod validation
(`src/content.config.ts`). Collections: `photos`, `videos`, `people`, `places`, `timeline`,
`recollections`, `sources`. They reference each other with `reference()`, so relationships are
data, not markup.

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

Current `npm run validate` output that is real and unfixed:

- `src/pages/interview.astro` shows **VN-0034**, which the breakfast guide doesn't track.
- `people/ron-tototz.json` cites four newspaper/Find-a-Grave items as free text; they should
  become `data/sources/` records now that the identification is settled.
