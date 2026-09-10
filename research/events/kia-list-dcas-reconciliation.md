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

### The two that looked open — RESOLVED the same day, and both were our errors

> **Superseded by the re-read below.** Both were transcription errors in this archive's own
> reading of Nov 19, p.4. See **"RESOLVED — the Nov 19 re-read"** at the foot of this file.
> The section is kept as written because the reasoning it records — and the fact that it was
> wrong — is the point.

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

---

# RESOLVED — the Nov 19 re-read, 2026-09-09

The one-page target named above was bought and read the same day. **Pacific Stars and Stripes,
Friday 19 November 1965, page 4, "DOD Names Dead, Missing"** (imageID **133215485**, as
recorded — the ID verified correct).

**Scan quality, checked first per the method note: native size 2975 × 4273** — nearly twice the
European page's 1553 × 2095, roughly 200 dpi. **Agate resolves cleanly at this density.** The
item was read at native resolution via the IIP crop endpoint.

## Both open cases were OUR transcription errors, not instances of the error class

| This archive had transcribed | The page actually prints | DCAS |
|---|---|---|
| "PFC **Floyd D. Simmons**" | **PFC Floyd D. JOHNSON, Marsland, Neb.** | **JOHNSON FLOYD DEAN**, Army PFC, Marsland, Dawes Co. NE, d. **19651114** — exact on city, state, service, rank, and a 5-day lag to printing |
| "1st Lt **Richard L. Gandy**, Clovis N.M." *(recorded as Army)* | **Air Force 1st Lt. Richard L. GOUDY of Clovis, N.M.** | **GOUDY RICHARD LEE**, Air Force CAPT, Sharon Springs, Wallace Co. KS, d. **19650809** |

**Neither man was falsely reported. Both are in DCAS. The archive had simply misread two
surnames off a 1965 scan** — `Johnson`→`Simmons` and `Goudy`→`Gandy` — and mis-assigned Goudy's
service. Goudy's DCAS death date of **9 August 1965** is the date he went missing, not the date
of the announcement, which is exactly what "previously listed as missing" implies.

## Four further corrections from the same re-read

| Transcribed | Printed |
|---|---|
| "S/Sgt Lawrence **Covoy**" | **Covey** — so "Covoy" was ours; the paper had it right |
| "PFC Rafael Santiago-Cruz, **Guayanina**, P.R." | **Guayama, Puerto Rico** |
| "SP4 Ralph A. Copeland" *(no hometown)* | **Copeland, Minot AFB, N.D.** |
| "Capt William N. Miller, non-hostile" *(recorded as Army, no hometown)* | **Air Force** Capt. William N. Miller, **Wichita, Kan.** |

The five missing men are also fuller than transcribed: **Navy Cdr. Harry T. Jenkins Jr.; Air
Force Lt. Col. George C. McCleary; Air Force TSgt. Thomas Moore; Air Force S/Sgt. Samuel Adams;
and Air Force S/Sgt. Charles G. Dusing.**

## The five missing men, now also reconciled — and the method fired a third time

| Name | DCAS | |
|---|---|---|
| Lt. Col. George C. McCleary | MCCLEARY GEORGE CARLTON, AF COL, Baton Rouge LA, d. 19651105 | matched |
| TSgt. Thomas Moore | MOORE THOMAS, AF CMSGT, Baton Rouge LA, d. 19651031 | matched |
| S/Sgt. Samuel Adams | ADAMS SAMUEL, AF CMSGT, Goldenrod FL, d. 19651031 | matched |
| S/Sgt. Charles G. Dusing | DUSING CHARLES GALE, AF CMSGT, Charleston SC, d. 19651031 | matched |
| **Cdr. Harry T. Jenkins Jr.** | **no record anywhere in the national roll** | **UNMATCHED** |

**Harry T. Jenkins Jr. was a prisoner of war, released in 1973.** He lived. **The method
returned him unprompted, from the missing column, having been told nothing about him** — a
third independent confirmation after Halyburton and the Oct 25 five.

*(Moore, Adams and Dusing share a death date of 31 October and two share a home city, which is
the signature of a single aircraft loss. Their DCAS "remains recovered" flag is `N`.)*

---

# THE CORRECTED RESULT

**64 printed names reconciled** — the original 59 plus the five Nov 19 missing men.
**57 matched. 7 did not. And the two columns separate perfectly.**

## Printed as DEAD — 40 names

> **39 of 40 are in DCAS. The single exception is Porter A. Halyburton, and he was alive.**

**After the transcription errors are removed, the method has no false positives at all among
the dead.** Every man the paper said was killed, died — except the one who did not.

## Printed as MISSING — 24 names

> **18 are in DCAS. Six are not: Schierman, Norse, Sima, McDonald, Wheat, Jenkins.**

Those six are the men who **came home**. Schierman, Sima, Wheat and Jenkins are all known
returned prisoners of the 1973 releases.

## What that gives issue #9

1. **The instrument is validated to zero false positives.** Across 40 men printed dead, it
   flagged exactly one, and that one is independently known to have been a false report.
2. **The base rate is now measured, not assumed: about one in forty.** In these months, in this
   paper, roughly one man in forty printed as dead was not dead. Small sample, but it is a real,
   non-zero, documented rate — **and Larry says he was one of them.**
3. **It is cheap to run.** Corpus re-downloads in about a minute; a list screens in seconds.

---

# A DISCRIMINATOR WARNING THAT MATTERS MORE THAN THE RESOLUTION

The re-read exposed something the reconciliation had only hinted at. **The hometown this paper
prints is frequently not a hometown at all.**

| Printed | Actually |
|---|---|
| Copeland, "**Minot AFB, N.D.**" | an Air Force **base**, not a home town |
| Goudy, "**Clovis, N.M.**" | Cannon AFB is at Clovis — DCAS home of record is **Sharon Springs, Kansas** |
| Miller, "**Wichita, Kan.**" | McConnell AFB is at Wichita — DCAS home of record is **Norfolk** |
| Covey, "**Los Angeles**" | DCAS home of record is **Benedict, Nebraska** |

**Four of eight men in a single item carry a printed place that is a duty station or simply
disagrees with the official home of record.**

**This bears directly on the search for Larry, and it cuts against a method the archive has
leaned on.** Sessions have used *Inglewood* as the identifying hometown — the 2026-08-17 sweep
read all 44 "inglewood" hits for 1965 and found nothing, and the August table repeatedly ruled
entries out on hometown ("the one Los Angeles man is Covoy, not him"). Those readings are not
wrong, **but their power was overestimated**: if his name was printed, the place beside it might
have been **Tan Son Nhut, Saigon, a hospital, a home of record his family had moved from, or
nothing at all.**

**Consequence: do not rule a candidate out on hometown alone, and do not treat the negative
"inglewood" sweep as covering a printed entry for Larry.** The name is the discriminator; the
place is corroboration at best.

---

# NEXT, REVISED

- [x] ~~Re-read Nov 19 p.4 and check Simmons and Gandy~~ — **done; both were our errors**
- [ ] **Re-read the Nov 11, Nov 12 and Nov 15 lists capturing given names and hometowns**, not
      surnames only. Three pages, ~70 testable names. **Now the best remaining use of the
      subscription**, and the Nov 19 re-read shows how much a transcription can drift.
- [x] ~~Correct the transcription variants~~ — done, in `kia-misreport-stars-stripes.md`
- [ ] Screen any newly found list against DCAS as a matter of course.
- [ ] **Revisit the hometown-based exclusions** recorded across this search in light of the
      warning above. None need reversing on present evidence, but their weight should be
      downgraded from "rules out" to "does not support".

---

# 2026-09-09, FIFTH PASS — NOV 11 AND NOV 12 RE-READ WITH GIVEN NAMES AND HOMETOWNS

Two of the three surname-only lists were re-read at native resolution and are now fully
transcribed. **Nov 15 was located but not read — see the resume point.**

## Nov 11, p.4 — "U.S. Identifies 31 War Dead" (imageID **133215320**, scan 3006×4353)

**ARMY (27):** WO Don G. Knowlton, Savage, Minn.; WO Ronald W. **MacLin**, Glendale, Cal.;
SFC Russel Hammond, Pittsburgh; SSgt. Arlen C. Tuttle, Columbus, Ga.; SSgt. Robert F. Townsend,
Royal Oak, Minn.; SSgt. Morris E. Wheeler, Clarksville, Tenn.; SSgt. Gordon S. Huggins,
Columbia, S.C.; Sgt. Charles C. Cox, Greensboro, N.C.; Sgt. Miles H. **Loper** Jr., Washington;
Sgt. Samuel Bess, Sanford, N.C.; Sgt. James H. **Jarzenski**, Cochranton, Pa.; SP5 Walter W.
Brown, Waukegan, Ill.; SP5 James J. **Howard**, Dora, Ala.; SP4 Robert A. Tillquist, Branford,
Conn.; PFC Fred Moore Jr., Shapsville, Ind.; PFC Richard A. Noelke, Fontana, Cal.; PFC Wright B.
Hamill, Albany, Ore.; PFC Ronald H. Luke, Miami; PFC Daniel Santos-Trujillo, Puerto Rico; PFC
Clayton Collins, Roselle, Ill.; PFC Willie C. Pickett, Pensacola, Fla.; PFC Timothy H. Johnson,
Milwaukee; PFC James T. **Pottkotter**, New Weston, Ohio; PFC Laris White Jr., Chiplese, Fla.;
PFC James R. Parrett, Colorado Springs, Colo.; PFC Alan L. Barnett, Astoria, Ore.; Pvt. Carl S.
Daniels, New Orleans.

**MARINE CORPS (4) — never transcribed before:** Lance Cpl. John P. Duchnowski, Cleveland;
PFC William L. Hunt, Indianapolis; PFC William B. Mitchell, Danbury, Conn.; PFC Larry A. Rayski,
St. Louis.

**Corrections to this archive's earlier surname-only transcription:** Macklin→**MacLin**,
Jarnigan→**Jarzenski**, Lopez→**Loper**, Hayward→**Howard**, Potkanicz→**Pottkotter**.

## Nov 12, p.4 — "Casualty List For Vietnam", 23 Army + 1 Marine (imageID **133215338**)

**ARMY (23):** 2d Lt. Felix D. King, Indiana, Pa.; 2d Lt. David L. Ugland, Minneapolis, Minn.;
1st Sgt. Thomas E. Thayer, Clarksville, Tenn.; SFC Everett R. Anderson, Fort Collins, Colo.;
SSgt. Ralph N. Smith, Clarksville, Tenn.; Sgt. Louis Sherrod, Kokomo, Ind.; Sgt. Samuel A.
**Eidson**, North Birmingham, Ala.; Sgt. J. W. Barksdale, North St. Petersburg, Fla.; Sgt. Varis
Savage, Newport News, Va.; Sgt. Gary W. **Platt**, Nederland, Colo.; SP4 George C. **Kosovich**,
Bloomfield, Conn.; SP4 John A. Nathan, San Francisco; Cpl. Eddie L. Hill, Columbus, Ga.; Cpl.
Rudolph Rodriguez, Highland Falls, N.Y.; PFC Alvin C. Sligh, Greensboro, N.C.; PFC Thomas H.
Maynard, El Monte, Cal.; PFC James J. Crafton, Philadelphia; PFC Samuel S. Tolliver, Richmond,
Va.; PFC Kelley E. Whitaker, Memphis, Tenn.; PFC James Mooney, Selma, Ala.; PFC Philip K.
**Rea**, Chicago; PFC John S. Hannigan II, Antioch, Cal.; PFC Justin M. Lynch, Fayetteville, N.C.

**MARINE CORPS (1):** Lance Cpl. Gerald P. Metott, Springwater, N.Y.

**Corrections:** Ebison→**Eidson**, Elliott→**Platt**, Kusovich→**Kosovich**, Ren→**Rea**.

## Screening result — first strict pass

**55 names. 50 matched to DCAS. 5 unresolved, and none is claimed as an absence:**
MacLin, Russel Hammond, J. W. Barksdale, Kelley Whitaker, Philip Rea.

**All five are near-spelling or initials-only cases, not candidate false reports.** MacLin is the
clearest demonstration: the paper prints **MacLin**, DCAS holds **MACKLIN**, and that record
*already matched* in the first reconciliation as one of the Oct 25 missing men who later entered
the roll. Likewise "Russel"/Russell, "Kelley"/Kelly, "Philip"/Phillip, and Barksdale is printed
with initials only so a given-name test cannot fire.

**These five need an edit-distance pass before any verdict.** Do not record them as unmatched.

## Note on hometowns, added to the warning above

Neither list contains an Inglewood man. The California men are Noelke (Fontana), MacLin
(Glendale), Nathan (San Francisco), Maynard (El Monte) and Hannigan (Antioch). Nothing here
changes the hometown caution — it reinforces it: "Royal Oak, **Minn.**" is printed for Townsend,
and Royal Oak is in Michigan.

## RESUME POINT

- [ ] **Nov 15, p.4, "Casualties Identified" — LOCATED BUT NOT READ.** imageID **133215410**,
      36-page issue. The item is the **bottom-left column**; its lede reads *"The Defense
      Department has identified 19 more U.S. servicemen killed in action in Vietnam. Five others
      were listed as dead from other than hostile causes."* The names begin at roughly page
      fraction **y = 0.72**, column **x ≈ 0.048, width ≈ 0.19**. One page, ~24 names.
- [ ] **Resolve the five near-spelling cases above** with the edit-distance pass. Free, offline.
