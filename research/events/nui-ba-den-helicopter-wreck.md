# The burnt helicopter on Núi Bà Đen (VN-0148)

**Opened 2026-09-02** (ledger #21, issue #89). First search run **2026-09-03**.

Larry, on his own photograph (`data/recollections/giscus-vn-0148-c18259776.json`):

> **7 guys dead in it. It burnt for 3 hours.** I don't know whose helicopter it belonged to.
> Trung Xi Nhat Nham is whose in the picture… **This is on Nui Ba Den.**

---

## First pass: the VHPA panel sweep — NEGATIVE, and scoped

**Searched 2026-09-03.** Result: **no helicopter loss at Núi Bà Đen or anywhere in Tây Ninh
province appears in the VHPA data for September 1964 – September 1965.**

### How it was searched, so nobody repeats it

The Vietnam Helicopter Pilots Association keeps the fullest helicopter loss database there is,
built on the Defense Intelligence Agency Helicopter Loss database and the Army Aviation Safety
Center files. Two things about getting into it are worth writing down, because both cost time:

- **`vhpa.org/KIA/` returns 403** — to WebFetch *and* to a real browser. It is a directory with
  no index file, not bot-blocking. Individual incident pages fetch fine.
- **The useful door is the panel index: `https://www.vhpa.org/KIA/panel/panelind.htm`** — every
  helicopter crew member on the Vietnam Veterans Memorial, grouped by Wall panel, and **each
  panel carries an explicit date range.** This is far better than the name index
  (`KIAINDEX.HTM`), which is alphabetical and useless for a date question.

**Larry's entire tour falls inside two panels**, which makes the whole window enumerable:

| Panel | Date range | URL |
|---|---|---|
| 01E | 10/21/57 – 6/6/65 | `KIA/panel/PANEL01E.HTM` |
| 02E | 6/6/65 – 10/27/65 | `KIA/panel/PANEL02E.HTM` |

Both were downloaded and parsed: **493 crew-member rows, 300 of them inside 1 Sept 1964 –
30 Sept 1965**, resolving to **37 linked incident pages**, all of which were fetched and read.

### What the sweep found

- **Zero** incidents mentioning "Tay Ninh", "Ba Den" or "Black Virgin".
- **Zero** incidents with a UTM grid in square **XT**, which is where Núi Bà Đen sits.
- Only **two** incidents in the window killed six or more, and **both are ruled out on
  location**:
  - **28 May 1965** — a **mid-air collision between two 118 AML UH-1Bs over Bien Hoa Air Base**
    (63-08592 and 63-08594), ten dead across the two aircraft, one of which "burst into flame."
    Not the mountain.
  - **2 September 1965** — 118 AML UH-1B 62-02046, shot down by 12.7mm, "the helicopter burned
    or exploded", **twelve killed** (four crew and eight unidentified passengers). Located by
    the eyewitness diary in the record to **about two miles south of Ben Cat**, Bình Dương
    province. Not the mountain — and in any case Larry was already medevaced by then.

### The limits of this negative — read these before trusting it

The VHPA panel data lists **helicopter crew members who died and are named on the Wall.** That
leaves at least four ways Larry's wreck could be real and still absent:

1. **All seven dead may have been passengers.** An aircraft whose crew survived, or whose crew
   are recorded elsewhere, would not put a name on these panels.
2. **They may not have been American.** This was a CIDG site with Cambodian troops, and Larry
   says outright he does not know whose helicopter it was. A VNAF H-34 carrying indigenous
   troops would be invisible in every US casualty source, not merely this one.
3. **Coverage of VNAF, USAF and USMC aircraft is partial**, as the database's own notes say.
4. **Rows without an incident link were not fetched** — 37 pages were linked from the 300 rows.

**So this is a documented partial negative with a named resume point, not a closed search** —
the same shape as the Stars and Stripes sweep in ledger #1.

---

## THE WINDOW IS PROBABLY WRONG, AND THAT MAY BE WHY

The search above assumed the crash happened during Larry's tour. **Nothing he said supports
that assumption.**

He says *"This is on Nui Ba Den"* and *"7 guys dead in it"* and *"It burnt for 3 hours"* — but
he never says he was there when it happened, and he does not know whose aircraft it was, which
is a strange thing not to know about an event you witnessed at your own small camp. What he
photographed is **a wreck**, and wrecks persist. A burnt-out airframe on a mountainside in 1965
could have got there in 1964, 1963, or earlier — the mountain had been fought over since the
French war.

His "7 guys dead" and "burnt for 3 hours" would then be **what he was told about it**, which is
exactly how the detail sounds: a round number and a round duration, of the kind a story acquires.

**Consequence: widen the window backwards** — 1961 to his arrival — before concluding anything.
Panel 01E already covers 10/21/57 onward and was parsed in full, so the crew-member data for
those earlier years has been swept by this pass and is also negative. The gap that remains is
the same one listed above: non-US and passenger deaths.

---

## Next, in order

- [ ] **Ask Larry first, and ask relatively.** He gave no date, so the only route from him is
      against events he can place: *"was that before or after the Canadian film people came?
      Before or after the day with the rocket launcher?"* And the question this pass raises:
      **did he see it happen, or was it already there when he arrived?** In the guide, tier 1 #6.
- [ ] **VNAF and CIDG losses.** The likeliest explanation of a negative in US crew data. Folds
      into the NARA RG 472 request (#27) and the MACV/III Corps journals already queued in #66 —
      add aircraft loss and accident reporting for Tây Ninh sector to that request rather than
      filing separately.
- [ ] **Army Aviation Safety Center accident files.** Named as a source in every VHPA record
      read today, and a direct request path that does not depend on anyone having died.
- [ ] Nothing further to do on VHPA panels 01E/02E. They are read.

---

## By-products worth keeping

**The 118th Aviation Company's losses in Larry's window are now enumerated**, which bears
directly on ledger #2 / issue #10 — if Larry was with the 118th, these are the losses his unit
took while he was there:

| Date | Aircraft | Killed | Where |
|---|---|---|---|
| 7 Oct 1964 | UH-1B 63-08598 | 5 | Long Khánh, YS570950 |
| 1 Nov 1964 | — | 4 | — |
| 28 May 1965 | UH-1B 63-08592 + 63-08594 | 10 | mid-air over Bien Hoa Air Base |
| 10 Jun 1965 | UH-1B 63-08557 | 4 | (Đồng Xoài window) |
| 31 Aug 1965 | — | 3 | — |
| 2 Sep 1965 | UH-1B 62-02046 | 12 | ~2 mi south of Ben Cat, burned |

---

# 2026-09-09 — reading the wreck itself, and finding the ceiling

**Searched by:** Claude Opus 5 in session with Larry's son. No new testimony taken.

The previous pass ended pointed at records nobody can reach without an archival request. This
pass tried the one route that needs no archive at all: **identify the airframe from the
photograph.** An airframe type would narrow the search enormously — a turbine UH-1 puts the loss
squarely in US Army data that has already been swept and come back negative, while a radial-engine
H-34 or CH-21 opens VNAF, USMC and contractor operators, which is precisely where the last pass
said the answer probably lies.

**It did not work, and the reason it did not work is the finding.**

## What was done

`data/photos/originals/Native Vietnamese/1920236-R2-E060.jpg` was cropped and magnified 4× and 8×
over three regions — the dark panels at left, the pale structure at centre, the scorched mass at
right — with contrast and sharpening applied. Colour was then sampled numerically rather than by
eye, against in-frame references (sky, foliage, the standing man's fatigues).

## What was seen, and what it turned out to be

At 4× a **fluted arc** appears at the top of the wreck, and fluting reads as the cooling fins of a
radial piston engine — which would have been decisive, since a radial means H-34, CH-21, H-19 or
H-37 and rules out the UH-1 entirely.

**At 8× it resolves into a rolled sheet-metal edge — a torn skin panel curled over. It is not an
engine.** Recorded because the wrong version of this observation is exactly the kind of thing that
becomes a fact three sessions later.

## The colour question is genuinely inconclusive

The large dark panels do read blue, and consistently:

| Patch | RGB | Hue | Sat | Val |
|---|---|---|---|---|
| dark panel, lower left | 59, 67, 82 | 219° | 0.28 | 0.32 |
| dark panel, upper left | 98, 107, 129 | 223° | 0.24 | 0.51 |
| pale panel, centre | 219, 212, 211 | 8° | 0.04 | 0.86 |
| burnt mass, right | 79, 64, 66 | 352° | 0.19 | 0.31 |
| sky (white reference) | 249, 248, 243 | — | 0.02 | 0.98 |

A dark blue airframe would matter: US Army helicopters of 1964–65 were olive drab, so blue-and-white
would point at a contractor or civil operator — and *"I don't know whose helicopter it belonged to"*
is exactly what a man says about an aircraft that is not in his own service's markings.

**But there is an innocent explanation that fits equally well and cannot be excluded from this
scan.** These panels are dark (value 0.31–0.51) and lie in shade under vegetation. Shadowed
surfaces under open sky are lit by blue skylight, and blue-shifted shadows are the normal
behaviour of colour reversal film, not evidence of blue paint. Two readings, one scan, no way to
separate them:

1. genuinely blue-painted panels, or
2. blue skylight fill on dark scorched metal.

Note also that the in-frame references are not behaving: foliage sampled at 119,119,116 — neutral
grey, saturation 0.03 — where it should be clearly green. Whether that is patch placement or dye
fade in a sixty-year-old slide is itself unresolved, and until it is, **no colour claim from this
frame should be treated as evidence of anything.**

## The actual finding: the scan is the bottleneck, and it is measurable

| | |
|---|---|
| File | 1600 × 1081 |
| Lit image area inside the slide mount | **1162 × 858** |
| Effective resolution over a 36 × 24 mm frame | **~820 dpi** |
| A 4000 dpi archival rescan | ~5669 × 3780 — **4.9× linear, 24× the pixels** |

At 820 dpi the airframe cannot be identified, and no amount of further processing will change
that: 8× magnification is already well past what the data supports, which is why the fluted arc
dissolved. **Identifying this aircraft from the photograph depends on rescanning the original
slide, not on looking harder at the file the archive has.**

**This bears directly on issue #20** (magnification/OCR pass on high-value details). VN-0148 is the
test case, and it says #20's yield is capped by scan resolution rather than by effort. Worth
knowing before that pass is planned across 157 frames.

## Negative worth recording, because a search engine will offer it again

**Civil Air Transport Flight 106 is not this aircraft.** It surfaces on searches pairing Núi Bà Đen
with a 1964 aircraft crash and looks superficially perfect — 20 June 1964, an aircraft destroyed,
non-military so it would explain both the absence from US loss data and Larry not knowing whose it
was. **It crashed near Shenkang, western Taiwan**, a Curtiss C-46D, 57 dead, no survivors. Nothing
to do with Vietnam. Checked and closed.

## Next, revised

- [ ] **Rescan VN-0148 at archival resolution** before any further visual work on it. This is now
      the gating step for the airframe question, and it is cheap compared with a records request.
- [ ] The three record paths from the previous pass stand unchanged: VNAF/CIDG losses via NARA
      RG 472 (#27, #66), Army Aviation Safety Center accident files, and asking Larry relatively
      rather than absolutely.
- [ ] **Do not re-run the VHPA panel sweep.** Panels 01E and 02E are read in full.

---

**And a candidate for a different question.** The standing ask on **VN-0074/VN-0078** — the fire
Larry photographed twice from the air — has always been pointed at the May 1965 Bien Hoa ammunition
explosion. The **28 May 1965 mid-air collision over Bien Hoa Air Base**, with an aircraft
bursting into flame on the field, is a second candidate for a fire at Bien Hoa in that month.
**Do not offer either to him**; the question stays open-ended, and this note stays out of every
rendered field.
