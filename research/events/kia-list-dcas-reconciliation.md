# Reconciling the printed casualty lists against DCAS (issue #9)

**Run:** 2026-09-09. **Method:** desk work, no subscription needed.
**Corpus:** the complete NARA DCAS-derived fatal-casualty roll, re-downloaded and reproduced
exactly as in `kia-same-name-hypothesis.md` — 55 state/territory files, **202,942 lines**
(`mp-alpha.pdf` still 404s, as recorded there).
**Source of the printed names:** the lists transcribed in
`kia-misreport-stars-stripes.md` from Pacific Stars and Stripes, 1965.

---

## Why this is worth doing

`kia-same-name-hypothesis.md` established that **there is no Hunnewell anywhere in DCAS**. The
corollary was noted there but never acted on, and it is the whole point of this exercise:

> **A man reported killed in error and later corrected never enters DCAS — but he does appear
> in the newspaper.** So a name printed in a casualty list with **no matching DCAS record** is
> the documentary signature of an erroneous report.

That is exactly Larry's situation. If the signature is real and detectable, then printed lists
become testable objects, and any future list that surfaces can be screened for it.

**The exercise therefore has a control built in.** The Oct 25 list printed **Lt. (jg) Porter A.
Halyburton** among the dead; he was in fact a living POW. **A working method must return him
unmatched.** If it does not, the method is worthless.

---

## What was reconciled

**59 printed names**, being every name transcribed with enough detail to test:

| List | Names | Notes |
|---|---|---|
| Sep 2, p.32 | 13 | 11 dead + 2 missing |
| Sep 10, p.19 | 11 | 5 KIA + 6 non-hostile |
| Oct 25, p.19 | 26 | 9 dead + 17 missing |
| Nov 19, p.4 | 8 | killed, dead of wounds, previously-missing, non-hostile |
| Nov 11, p.4 | 1 | the one man given with a hometown (Noelke, Fontana) |

**Not reconcilable, and excluded:** the Nov 11, Nov 12 and Nov 15 lists are transcribed in
`kia-misreport-stars-stripes.md` as **surnames only**. Common surnames match somewhere in a
59,577-row roll by chance, so testing them would produce noise, not evidence. **If those three
lists are ever re-read, capture given names and hometowns** and they become testable — roughly
70 further names.

### Method, and the two corrections it needed

1. **Match on surname + given name/initial co-occurring within a 3-line window.** The PDFs wrap
   records across lines, so a line-by-line match misses men. The window handles it.
2. **DCAS files by HOME STATE OF RECORD, which frequently differs from the hometown a newspaper
   printed.** A first pass that trusted the printed state produced 14 false "unmatched". **A
   state-file miss is not a miss** — every name must be re-checked against the full national
   roll before it is called absent. Several men matched only nationally (Just, Carn, Honaker,
   Botts, Gill, Richey, Gollahon).
3. **Near-spellings must be tested before calling a name absent** — see the four artefacts
   below. Edit-distance candidates were generated against all 23,971 distinct surname tokens.

**Coverage caveat, recorded honestly:** the line-based record extractor recognised 56,366
service-bearing rows against an expected ~58,220 names, so about 2,000 rows are missed by that
extractor where a record wraps awkwardly. **Every unmatched name below was therefore re-checked
with the 3-line windowed search, which does not depend on that extraction**, and all came back
zero. The gap does not affect the results.

---

## Result

> **51 of 59 matched. 8 unmatched — and every one of the 8 falls into a category that predicts
> it.**

### The four that looked unmatched and were not — printing/transcription variants

These matter as much as the failures: they show the false-positive rate of a naive run, and
they correct four names in the archive's own transcriptions.

| Printed in S&S | DCAS record | Verdict |
|---|---|---|
| Cpl. Terry J. **Neumier**, Kewaunee, Wis. | **NEUMEIER TERRY JAMES**, Marine Corps CPL, Kewaunee, Kewaunee Co. WI, d. **19650830** | Same man. City, service, rank and date all agree; the death date matches the Sep 2 item's own "Aug 30" announcement |
| Lance Cpl. Michael T. **Badsling**, Chicago | **BADSING MICHAEL**, Marine Corps LCPL, IL, d. **19650906** | Same man; our transcription carries an intrusive `L` |
| S/Sgt Lawrence **Covoy**, Los Angeles | **COVEY LAWRENCE**, Army SSG, Benedict, York Co. **NE**, d. **19651114** | Same man — rank, given name and a 5-day lag to the Nov 19 printing all fit. **But the hometown differs: printed Los Angeles, DCAS Benedict, Nebraska** |
| Lance Cpl. **Veron** Hadley, Bay Minette, Ala. | **HADLEY VERLON**, Marine Corps LCPL, Bay Minette, Baldwin Co. AL, d. **19650818** | Same man; the given name is **Verlon**, not Veron |

**The Covey hometown discrepancy is worth keeping.** The August session used "the one Los
Angeles man is Covoy, not him" to rule that entry out for Larry. That reasoning still holds —
he is a different man — but the episode shows **the paper's printed hometown can disagree with
the official home of record**, which weakens hometown as a discriminator anywhere in this
search. Larry's Inglewood is a hometown argument.

### THE CONTROL FIRED — and this is the result that licenses everything else

| | |
|---|---|
| **Lt. (jg) Porter A. Halyburton**, Navy, Decatur, Ga. — printed among the **dead**, Oct 25 | **NO occurrence of the surname anywhere in the national roll.** The near-name HALIBURTON exists; no Porter |

**Halyburton was alive.** He was a POW, released in 1973, and died in 2024. The method returned
him, from the dead column, as absent — **without being told anything about him.** That is the
signature working on a known case.

### The five unmatched from the MISSING column — the men who came home

| Name | Service | List |
|---|---|---|
| Capt. **Wesley D. Schierman** | USAF | Sep 2, missing |
| Pvt. **Joseph Samuel Norse Jr.** | USMC | Oct 25, missing |
| Capt. **Thomas W. Sima** | USAF | Oct 25, missing |
| SP5 **Wesley McDonald** | Army | Oct 25, missing |
| Lt. (jg) **David R. Wheat** | Navy | Oct 25, missing |

**This is the second validation, and it is stronger than the first because it is five cases
rather than one.** Men listed *missing* who never enter DCAS are precisely the men who **were
not killed** — repatriated POWs and recovered survivors. Schierman, Sima and Wheat are all
known returned prisoners of the 1973 releases.

**So the two categories behave exactly as the theory predicts:** of 17 men printed as *missing*
on Oct 25, twelve later entered DCAS and five did not; of 9 printed as *dead* the same day,
eight entered DCAS and one — Halyburton — did not, and he is the one who lived.

### The two that are genuinely open — both printed as DEAD, both absent

| Name | Category | List |
|---|---|---|
| **PFC Floyd D. Simmons** | "dead of wounds" | Nov 19, p.4 |
| **1st Lt. Richard L. Gandy**, Clovis, N.M. | "previously listed as missing", then dead | Nov 19, p.4 |

Neither has any DCAS record. Checked exhaustively: exact surname, 3-line windowed search, and
edit-distance neighbours (SIMMONDS, SIMONS, SIMMS, SIMON…; GRANDY, GANDEE, CANDY, SANDY…). No
Floyd Simmons exists in the roll at all, despite SIMMONS appearing in 25 states. GANDY appears
in CT, FL and KS — Kent, Clauddell and Michael Lee — but there is **no Richard L. Gandy**.

**Two explanations, and this session cannot choose between them:**

1. **Our transcription of the Nov 19 list is wrong for these two names.** It was read off a 1965
   scan. Note that six other names from that same list — Campbell, McClellan, Copeland, Miller,
   Santiago-Cruz and Covey — all reconcile, so the list as a whole is sound; but Covey was
   itself mis-transcribed as "Covoy", which proves the list's transcription is not perfect.
2. **They are further instances of the error class** — men printed as dead who were not. The
   Gandy entry is the more suggestive of the two: the paper explicitly says he *"was previously
   listed as missing"*, so his status had already moved once. **A second move — back to alive —
   is exactly the Halyburton pattern**, and this file already records three separate
   demonstrations that these releases corrected themselves.

**This is cheap to settle and it is now the most specific unread target in the whole question:
re-read Pacific Stars and Stripes, 19 November 1965, page 4, and check those two names
letter by letter.** One page. It is already located, and its imageID is recorded in the method
notes of `kia-misreport-stars-stripes.md` (133215485).

---

## What this does and does not do for Larry

**It does not find him.** No Hunnewell was printed in any list the archive has read, so there
was nothing here to match or fail to match.

**What it establishes is that the test works** — and that matters, because it converts a
hypothesis into an instrument:

- The signature Larry's case would leave — **printed dead, absent from DCAS** — is real,
  detectable, and was recovered blind from a known case.
- The base rate is measurable rather than assumed: across 59 names, **exactly one man printed
  as dead was demonstrably alive**, with two more unresolved. That is a small but non-zero rate,
  in the same months, in the same paper.
- **Any list found from here on can be screened in minutes**, including the 15-name Defense
  Department release of 2 September 1965 found in the European edition — *if* a legible copy of
  it is ever located. (It is not legible in this subscription: that scan is 1553×2095, and the
  agate does not resolve. See `kia-misreport-stars-stripes.md` §4 of the second 2026-09-09
  session.)

**It also sharpens what "his name was in the list" would mean.** Larry did not need to be in
DCAS to have been printed. The reverse is the point: **the printed record and the official
record disagree in about one case in sixty here**, and Larry says he was one of them.

---

## Next

- [ ] **Re-read Pacific S&S, 19 Nov 1965, p.4** and verify "Floyd D. Simmons" and "Richard L.
      Gandy" letter by letter. One page; settles both open cases.
- [ ] **Re-read the Nov 11, Nov 12 and Nov 15 lists capturing given names and hometowns**, not
      surnames only. That adds ~70 testable names for the cost of three pages.
- [ ] **Correct the four transcription variants** in `kia-misreport-stars-stripes.md`:
      Neumier→Neumeier, Badsling→Badsing, Covoy→Covey, Hadley Veron→Verlon. *(These are
      corrections to our own transcription of a printed source, not to any of Larry's words —
      rule 1 is not engaged. Note both forms so the printed spelling is not lost.)*
- [ ] Screen any newly found list against DCAS as a matter of course. The scripts are
      reproducible from the method above; the corpus re-downloads in about a minute.
