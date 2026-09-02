# Are photographs missing? — scan reconciliation, 2026-09-01

**Asked because** Larry said on 2026-09-01 that there are "pictures of the guys from CBC" among
his photographs, none of which the archive can find, and his son reported that Larry also
says **photos are missing**.

## What was checked

| Check | Result |
|---|---|
| Photo records in `data/photos/` | **157**, `VN-0001`–`VN-0157` |
| Gaps in the ID sequence | **none** — unbroken |
| Records carrying an `originalPath` | **157 of 157** |
| Records whose scan file is missing from disk | **0** |
| Scan files under `data/photos/originals/` | **157** |
| Scan files not matching the lab's naming scheme | **0** |

So the archive is internally complete: every record has a scan, every scan has a record, and
nothing has been lost between the scanning lab and this repository.

## The decisive check — the lab's own numbering

The scanning lab named every file `<job>-R<roll>-E<exposure>`, and the README rule that these
filenames are **never renamed** turns them into an audit trail. Parsed:

| Job / roll | Frames | Exposure range | Interior gaps |
|---|---|---|---|
| 1920236-R1 | 57 | E001–E057 | none |
| 1920236-R2 | 26 | E058–E083 | none |
| 1920236-R3 | 70 | E084–E153 | none |
| 1920236-R4 | 4 | E154–E157 | none |

One job, four rolls, exposures numbered **continuously from E001 to E157 with not a single
number missing**. The lab numbered every item it scanned in one unbroken run, so a frame
dropped anywhere between the lab and here would leave a hole in the sequence. There is no hole.

## What this means, and what it does not

**It means:** nothing has gone missing *inside* the digital archive, and nothing was lost in
transfer from the lab. The 157 are exactly what the lab was given, complete.

**It does not mean Larry is wrong.** The reconciliation can only measure from the scanner
forward. If photographs exist that never reached the scanning lab, this audit is blind to them
by construction, and the numbering would look exactly as it does now. Larry's statement and
this result are fully compatible: **the gap, if there is one, is upstream of the scan.**

Places an unscanned print or slide could be: still with Larry; separated into another folder or
album before the family sorting; given away over sixty years; or in a second batch nobody has
looked for. The family sorting preserved in `originals/` — Group Photos with Unit; Landscape,
Locations and villages; Military Vehicles; Native Vietnamese; Vietnam Ladies — is the sorting
of what was handed over, not necessarily of what exists.

## The CBC photographs specifically

The machine vision survey of all 157 scans was searched for film crews: movie and cine
cameras, tripods, booms and microphones, press, journalists, correspondents, and Western
civilians in non-military dress. **No photograph in the archive shows anything identifiable as
a film crew.** Every apparent hit resolved to something else — "boom" is a helicopter tail
boom, "microphone" is a pilot's boom mic, "photographer" is the survey's own word for whoever
was holding Larry's camera.

That is a genuine negative from a machine pass, and it should be treated as a hypothesis
generator rather than proof (the survey is a vision pass, never catalog fact). But taken with
the reconciliation above, the simplest reading is the one that fits both facts: **the CBC
photographs are among the material that was never scanned.**

## Next

- [ ] Ask Larry where the unscanned photographs might be, and whether he remembers a second
      folder, album, or box — added to the interview guide.
- [ ] Ask him to describe what the CBC pictures show; a described frame can be matched against
      the survey even if the survey did not label it as a film crew.
- [ ] Reconcile against the family's own holdings — the NAS folder the scans came from, and any
      prints still in the house. That comparison is outside this repository and needs the
      family to run it.
- [ ] If a second batch is found, it extends the `VN-####` sequence from VN-0158. **Existing
      IDs never move.**

---

## The NAS reconciliation — done the same day, and it closes

The family NAS was reachable from the working machine, so the comparison the section above
called for was run directly against
`W:\Shared Photos\1964-1965 Vietnam War Photos` (`\192.168.50.174\homes\LeRoy\Photos`).

### The four photo folders hold exactly 157 JPEGs

| Folder | JPEGs |
|---|---|
| Group Photos with Unit | 29 |
| Group Photos with Unit\Vietnam Ladies | 5 |
| Landscape, Locations and villages | 102 |
| Military Vehicles | 7 |
| Native Vietnamese | 14 |
| **Total** | **157** |

### And they are the same 157, by name

A filename-level comparison against `data/photos/originals/`:

- NAS photo JPEGs: **157**
- Repository scans: **157**
- On the NAS but not in the repository: **0**
- In the repository but not on the NAS: **0**

Not merely equal counts — **identical sets**. With Google Photos also holding 157 in its
album, three independent stores agree exactly.

### Where the other files went

The folder tree holds 168 files in total, which is where a count of "165 in the four Vietnam
folders" comes from — the extra files are not photographs:

| What | Count | Where |
|---|---|---|
| The 157 photographs | 157 | the four photo folders |
| 8mm footage: the 2009 master capture, 4.54 GB | 1 | `Dad's Vietnam Footage` |
| 8mm footage: 30-second vertical export clips | 5 | `Dad's Vietnam Footage` |
| Private documents (a DD-214 PNG, two PDFs, a README) | 5 | `Private Archive` |

The `Private Archive` files are personal documents and were **not opened** — only their
names were listed. They are correctly outside this repository.

### The footage is accounted for too

The five small AVIs are all exactly 116,077,366 bytes but have **different MD5 hashes**, so
they are five *distinct* 30-second clips rather than copies of one — same size because they
share an encode. Their timestamps are all 10 November 2023, and their names ("-1 Vertical 30
sec clip", "Vertical 30 sec clip Copy") mark them as derived exports, not source material.

The archive's five video records `VF-0001`–`VF-0005` are chapters of the 2009 master, defined
by segment and crop, and they run **0 to 1320.22 seconds** — the master's full twenty-two
minutes, end to end, with no interior gap. There is no footage on the NAS that the archive
does not account for.

## Conclusion

**Nothing is missing digitally, anywhere we can see.** The repository, the NAS and Google
Photos hold the same 157 images; the footage is complete; the only other files are private
documents that belong outside the repo.

**Which sharpens Larry's statement rather than contradicting it.** If photographs are
missing, they are **physical** — prints or slides that never reached the scanning lab in
2019, and that are not on the NAS in any form. The place to look is the house, not a disk:
another album, a box, an envelope, a folder that was never handed over, or pictures given
away over sixty years. That question is in the interview guide, and only Larry can answer it.

The CBC photographs he remembers fall on the same side of that line.
