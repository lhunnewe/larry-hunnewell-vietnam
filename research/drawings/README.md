# Drawings from memory

Working notes on the sketches Larry draws of places from his tour. The records are
`data/drawings/VD-####.json`; this file holds what cannot go on a rendered page (rule 6) and
the provenance questions still open.

## The 2026-09-05 sheets

Three pencil drawings in a spiral-bound sketchbook, photographed in the book by his son the
same afternoon (phone photographs, file timestamps 13:31:07, 13:31:16, 13:31:24) and sent to
the archive as `IMG_20260905_1331xx.JPG_compressed.JPEG`. Filed in timestamp order:

| ID | His heading | Place record |
|---|---|---|
| VD-0001 | BASE CAMP TON SON NHUT | `thom-son-nuht` |
| VD-0002 | NUI BA DEN | `nui-ba-den` |
| VD-0003 | TU DO STREET / SAIGON | `saigon` |

They are the first evidence in the archive made by Larry's own hand with no one typing for
him. Every legible inscription on each sheet is transcribed in the record's `labels` in
capitals, spelled as written, and is guarded by the testimony hook like `larrysRecollection`.
**His mix of capitals and lower case is not recorded.** A first pass on 2026-09-05 tried to
(`MY Hooch`, `HeLi PAd`, `eMBASSY`) and review showed the 1707-px phone captures cannot
support it: at 25-30 px per glyph the same letterform was read two ways on one sheet (`FoRT`
against `A PORT`), so the claim was withdrawn before commit. Any word with a letter that cannot
be read with confidence is kept out of `labels` (see below). **ASK THE FAMILY FOR A FLAT SCAN**
of the three sheets, or a straight-on photograph in daylight: that settles every reading below
at once, and the case question with it. Glyphs the scan should settle first: the last letter
of `ARMORY` on VD-0001 (the wall line crosses it), the middle of `STREET` on VD-0003 (the
faintest ink on any sheet), and the three withheld inscriptions below. The slash in
`TO BASE /A PORT` abuts the A on the sheet and is transcribed that way.

### Provenance not recorded (ask his son, not Larry)

- Were the drawings asked for, or did he pick up the sketchbook himself? If asked, what was
  the question, and was he looking at any photograph while drawing?
- What did he say while drawing? Anything remembered goes in a recollections record as
  `paraphrase` (his son's report) and is linked with `relatedDrawings`.
- Were the three drawn in the order photographed, and in one sitting?

### Questions for Larry, from the sheets themselves

These are his marks to explain; none should be prompted with a candidate reading.

- **VD-0003, the circled M** at the head of the wide central band. Unknown.
- **VD-0003, the star-like mark** beside FLOWERS, and the small shape in the top-right corner.
- **VD-0003, the vertical label** along the right edge: two words, the second clearly
  `RIVER`, the first NOT transcribed (the inscription is withheld whole; the page names the
  legible word) — at 4x it reads as either MEKONG or MRKONG, and the
  second letter cannot be settled. It is deliberately absent from `labels` and the page says
  only that the first word has not been read. Ask him what he wrote there; do not read a
  candidate to him. (He has called the river at Saigon the Mekong in typed testimony, which is
  already on the Saigon place record; that is why no reading is offered here.)
- **VD-0003, the box on the left** — a six-letter label read as PALACE by sense, but the fifth
  letter at 16x has a stem and a shoulder, i.e. `r` as much as `c`. Choosing the letter because
  the word fits is interpretation, so it is NOT in `labels`; the page says a letter cannot be
  read. A flat scan decides it.
- **VD-0003, the box against the right-hand vertical line** — read as EMBASSY or EMBASY; the
  S-count cannot be settled at 4x (the second S has a stroke through it). NOT in `labels` for
  the same reason.
- **VD-0003, the long shapes inside the wide band, with the up and down arrows.** Traffic?
  Stalls? Ask what the band is.
- **VD-0002, the unlabelled box** right of centre, and the **scribbled mark** bottom-left.
- **VD-0002, GENERATORS** — new testimony; nothing in the recollections mentions generators on
  the mountain before this sheet. What ran on them, and whose were they?
- **VD-0001, the three unlabelled boxes** down the left side and the larger one bottom-left.
  What were they? The two figures drawn inside the SHOWER box.
- **VD-0001, OUR / ARMORY WALL** — two inscriptions: `OUR` inside the small box at the left
  end of the line, `ARMORY WALL` along the line. Whether they read together, and whether the
  line is a wall along the whole top of the camp or the armory's own wall, is his to say.

### Comparisons that stay here

- **VD-0002 and the map sheet.** `research/places/nui-ba-den-locations.md` and its ledger entry: sheet 6231-4
  (`sources/map-l7014-6231-4-tay-ninh`, 1970 revision) draws one bastioned fort symbol on the
  road about ten kilometres north of the summit, and the FSB/LZ index lists an "Old French
  Fort north of Nui Ba Den" at XT281685. His FORT on VD-0002 is the stone he calls the French
  fort at his radio position (VN-0009), at the camp. Whether these are the same structure is
  open; the drawing gives no scale and no direction, so it neither supports nor contradicts
  the map. **Do not show him the map sheet.** The value of the sketch is that it came first.
- **VD-0003 and a street plan.** From general reference, not yet cited to a period plan: Tu Do
  ran from the cathedral square to the river; the flower boulevard the survey read as Nguyễn
  Huệ on VN-0068 runs parallel; the 1965 Embassy stood on Hàm Nghi; the Palace is west of
  both. His sheet puts PALACE left of the band and
  the Embassy box right of it, beyond FLOWERS. This is not checked further here and is not to be put
  to him as a correction; the Saigon place record already carries his placements as given.
- **VD-0001 and the base.** The identification of "Ton Son Nhut" with Tân Sơn Nhứt is a
  hypothesis on the place record, not settled. The sketch names the camp in his hand, which
  strengthens the *name*, not the *location*.

### Negative results

- 2026-09-05: no earlier drawing, map, or sketch by Larry is recorded anywhere in `data/`,
  `research/`, or the giscus export. These three are the first.
- 2026-09-05: letter-case transcription from the phone captures was attempted and withdrawn;
  see above. Do not retry it from these files.
