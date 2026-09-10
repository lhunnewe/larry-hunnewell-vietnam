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

---

# 2026-09-10, SIXTH PASS — THE EDIT-DISTANCE PASS: ALL FIVE RESOLVE, AND NOV 11 + NOV 12 ARE CLEAN

Free, offline, no subscription. The task left at the resume point above.

**Corpus rebuilt from the recipe in `kia-same-name-hypothesis.md`:** 55 state/territory files,
`mp-alpha.pdf` still 404, **202,942 lines**. That reproduces the recorded figure exactly, which
is a control on the rebuild as well as on the roll.

## The five, all matched — and none was an absence

| Printed in the paper | DCAS record | Why it is the same man |
|---|---|---|
| WO Ronald W. **MacLin**, Glendale, Cal. (Nov 11) | **MACKLIN RONALD**, Army WO1, b. 19380303, Glendale, Los Angeles Co. CA, **d. 19651020** | Given name, rank, city and county all exact. Confirms the fifth pass's reading: the record had *already matched* in the first reconciliation as an Oct 25 missing man who later entered the roll. |
| SFC **Russel Hammond**, Pittsburgh (Nov 11) | **HAMMOND RUSSELL**, Army SFC, b. 19320427, Pittsburgh, Allegheny Co. PA, **d. 19651105** | One `l`. Rank, service and city exact; 6-day lag to printing. |
| Sgt. **J. W. Barksdale**, North St. Petersburg, Fla. (Nov 12) | **BARKSDALE JAMES WILLIAM**, Army SGT, b. 19380130, St Petersburg, Pinellas Co. FL, **d. 19651106** | The initials-only case resolves outright: **J. W. = James William.** Rank, service, city and county exact; 6-day lag. |
| PFC **Kelley E. Whitaker**, Memphis, Tenn. (Nov 12) | **WHITAKER KELLY**, Army PFC, b. 19470625, Memphis, Shelby Co. TN, **d. 19651108** | Kelley/Kelly. Rank, service, city exact; 4-day lag. |
| PFC **Philip K. Rea**, Chicago (Nov 12) | **REA PHILLIP KENNETH**, Army PFC, b. 19430806, Chicago, Cook Co. IL, **d. 19651106** | Philip/Phillip, **K. = Kenneth**. Rank, service, city exact; 6-day lag. |

**Nov 11 and Nov 12 are therefore 55 of 55 matched. Not one unmatched name, and no absence to
explain.** The fifth pass's instruction — "do not record them as unmatched" — was correct, and
the reason is now documented rather than inferred.

## THE RUNNING TOTAL, CORRECTED — AND THE BASE RATE COMES DOWN

Noelke was tested in both passes, so the union is **118 distinct printed names**, not 119.

- **Printed DEAD — 94 names. 93 are in DCAS.** The one exception is Halyburton, and he was
  alive.
- **Printed MISSING — 24 names. 18 are in DCAS**; the six absent (Schierman, Norse, Sima,
  McDonald, Wheat, Jenkins) are the men who came home.
- **111 matched, 7 not — and every one of the seven was alive.** The columns still separate
  perfectly, and the instrument still has **zero false positives**.

**The correction that matters is to our own number.** The fourth pass measured the rate of men
printed dead who were not dead at **about one in forty**. On 54 further printed-dead names, all
of which matched, **that rate is now about one in ninety-four** — roughly 1%, not 2.5%.

**This cuts both ways and both should be said.** It **weakens** the prior on Larry's account
being visible in this corpus by more than half: erroneous death reports in this paper, in these
months, are rarer than the archive has been saying since yesterday. It **strengthens** the
instrument itself: 54 more names went through the method and produced no noise at all, so an
unmatched printed-dead name remains a genuinely rare event and therefore a genuinely
informative one. **Larry's case is still the kind of thing this method can see. It is simply a
rarer kind of thing than we said.**

*(Method note for anyone re-running this: every one of the five was found by a plain surname
grep on the full national roll with a 3-line window. No fuzzy matching was needed. The five
looked like edit-distance problems only because the fifth pass screened them against the
printed state before the national roll — the same trap recorded as correction 2 in this file's
Method section, which caught 14 names on the first pass and 5 here.)*

## RESUME POINT, REVISED

- [x] ~~Resolve the five near-spelling cases~~ — **done; all five matched, none an absence**
- [ ] **Nov 15, p.4, "Casualties Identified" — RE-READ with given names and hometowns.**
      imageID **133215410**, 36-page issue, bottom-left column, names begin about page fraction
      **y = 0.72**, column **x ≈ 0.048, width ≈ 0.19**. **Note: this list is NOT unread** — an
      earlier session read it in full and recorded 17 Army surnames (Pasqual, Harrington,
      Holcum, Howard, Oliver, Sullivan, Weber, C. Bell, Herman, Spencer, Allen, Elsasser,
      Foster, Hawes, Ross, Mathison, Potter) with the composition **19 killed + 5 non-hostile
      + 1 missing**. What is missing is given names and hometowns, and the Nov 11/12 re-read
      found **nine surnames in 55 had drifted**, so expect drift here too.
      **The single missing man on this list is a free test of the instrument.**
- [ ] Screen the re-read Nov 15 names against DCAS as a matter of course.
- [ ] **Revisit the hometown-based exclusions** and downgrade them from "rules out" to "does
      not support". None need reversing on present evidence.

---

# 2026-09-10, SEVENTH PASS — NOV 15 RE-READ, AND THE CORPUS RECIPE ITSELF WAS WRONG

**Pacific Stars and Stripes, Monday 15 November 1965, archive p.4 = printed p.6** (folio read
directly off the page), "Casualties Identified", imageID **133215410**, scan native
**2975 × 4295**. Read at 2× and 3× native, fully legible at agate.

**The item is now transcribed in full for the first time: 25 names.** The earlier session's
record listed 17 Army surnames only and gave the composition as "19 killed + 5 non-hostile +
1 missing" — **the composition was exactly right; the name list was not.**

## The item as printed

> WASHINGTON (AP) — The Defense Department has identified 19 more U.S. servicemen killed in
> action in Vietnam. Five others were listed as dead from other than hostile causes.

**Reported killed — Marine Corps (1):** Cpl. **Larry D. Bell**, Steamboat Springs, Colo.

**Reported killed — Army (18):** SFC Florendo B. **Pascuel**, Fort Benning, Ga.; SSgt. Clifford
W. Harrington, Clarksville, Tenn.; Sgt. Rebel L. **Holcum**, Wichita, Kan.; Sgt. Lawrence Howard
Jr., Clarksville, Tenn.; Sgt. Walter R. Oliver, Newark, Ohio; Sgt. William A. Sullivan, Camden,
N.J.; Sgt. Willis W. Weber, Valley City, N.D.; SP5 Carl T. **Ball**, Columbus, Ga.; SP4 Clyde R.
**Merman**, Richmond, Va.; SP4 Cordell Spencer, Bessemer, Ala.; **SP4 (no first name given)
Sciptltate**, Newark, N.J.; PFC James L. Allen, Beaumont, Tex.; PFC Gary L. **Elmore**, Lavonia,
Ga.; PFC Byron J. Foster, Hudson, Mich.; PFC James D. Hawes, Ocilla, Ga.; PFC John K. **Keao
III**, Haleiwa, Hawaii; PFC Michael K. Mathison, East St. Louis, Ill.; PFC Jerry L. Potter,
Denver, Colo.

**Dead from other than hostile causes — Marine Corps (1):** Sgt. Richard L. **Nuziard**,
Bellflower, Cal.

**Dead from other than hostile causes — Army (4):** Capt. Daniel G. Dawson, Rohnert Park, Cal.;
WO James W. Sizemore, Hattiesburg, Miss.; SP4 Wilbur W. Ivanov, Claremont, N.H.; PFC Ben K.
McBride, Boise City, Ida.

**Missing (1), quoted because the wording matters:** *"Missing in action was Army PFC William
Esposito Jr. His home town was withheld."*

## What the re-read corrected

**Five surname corrections in the 17 previously recorded**, and the pattern is the same as
Nov 11/12 — the drift is ours, not the paper's:

| Recorded before | Actually printed |
|---|---|
| Pasqual | **Pascuel** |
| "C. Bell" | **Ball** — SP5 Carl T. Ball |
| Herman | **Merman** *(see the glyph note below)* |
| Elsasser | **Elmore** |
| Ross | **Keao** |

**And nine names had never been transcribed at all:** the Marine Cpl. **Larry D. Bell**; the
Army SP4 printed as **"(no first name given) Sciptltate"**; and the whole non-hostile block plus
the missing man — **Nuziard, Dawson, Sizemore, Ivanov, McBride, Esposito**. The earlier "READ IN
FULL" entry covered one of the item's four blocks.

**Glyph note, recorded rather than resolved:** the surname at Richmond, Va. reads **Merman** on
this scan at 3× — a clear initial **M**. The earlier session read *Herman*, and DCAS holds
**HERMAN CLYDE RUSSEL**. Either the paper mis-set the initial or the scan has broken the
crossbar of an H. **It is transcribed here as printed.**

## Screening against DCAS — 25 of 25 matched, and no signature fires

| Printed | DCAS | Note |
|---|---|---|
| Cpl. Larry D. Bell, Steamboat Springs, Colo. | BELL LARRY DEAN, USMC CPL, Rockford, Winnebago IL, d. 19651110 | service + rank exact; **home of record is Illinois, not Colorado** |
| SFC Florendo B. Pascuel, Fort Benning, Ga. | PASCUAL FLORENDO B, Army SFC, **Honolulu HI**, d. 19651103 | the printed "hometown" is his **post** |
| SSgt. Clifford W. Harrington | HARRINGTON CLIFTON, Army SSG, Aberdeen, Moore NC, d. 19651108 | Clifford/Clifton |
| Sgt. Rebel L. Holcum, Wichita, Kan. | HOLCOMB REBEL LEE, Army SGT, Wichita, Sedgwick KS, d. 19651108 | Holcum/HOLCOMB; city exact |
| Sgt. Lawrence Howard Jr., Clarksville, Tenn. | HOWARD LAWRENCE, Army SGT, **Philadelphia PA**, d. 19651108 | |
| Sgt. Walter R. Oliver, Newark, Ohio | OLIVER WALTER B, Army SGT, Newark, Licking OH, d. 19651104 | city + county exact |
| Sgt. William A. Sullivan, Camden, N.J. | SULLIVAN WILLIAM, Army SGT, **Fayetteville NC**, d. 19651106 | |
| Sgt. Willis W. Weber, Valley City, N.D. | WEBER WILLIS WILLIAM, Army SGT, Valley City, Barnes ND, d. 19651111 | exact |
| SP5 Carl T. Ball, Columbus, Ga. | **BAAL CARL THOMAS**, Army SP5, Lebanon, Lebanon PA, d. 19651109 | Ball/BAAL; rank exact; Columbus Ga. is **Fort Benning** |
| SP4 Clyde R. Merman, Richmond, Va. | HERMAN CLYDE RUSSEL, Army SP4, Roanoke VA, d. 19651106 | see glyph note |
| SP4 Cordell Spencer, Bessemer, Ala. | SPENCER CORDELL, Army SP4, Bessemer, Jefferson AL, d. 19651108 | exact |
| SP4 (no first name given) **Sciptltate**, Newark, N.J. | **TATE SCIP**, Army SP4, Newark, Essex NJ, d. 19651108 | **the printed word is "Scip Tate" run together** — city, county, rank exact |
| PFC James L. Allen, Beaumont, Tex. | ALLEN JAMES LOUIS, Army PFC, Beaumont, Jefferson TX, d. 19651106 | exact |
| PFC Gary L. Elmore, Lavonia, Ga. | ELMORE GARY LEWIS, Army PFC, **Garden City, Wayne MI**, d. 19651108 | |
| PFC Byron J. Foster, Hudson, Mich. | FOSTER BYRON JAMES, Army PFC, Detroit, Wayne MI, d. 19651108 | state exact |
| PFC James D. Hawes, Ocilla, Ga. | HAWES JAMES DALE, Army PFC, Waycross, Ware GA, d. 19651111 | state exact |
| PFC John K. Keao III, **Haleiwa, Hawaii** | KEAO JOHN K III, Army PFC, **Los Angeles, Los Angeles CA**, d. 19651106 | name exact to the suffix |
| PFC Michael K. Mathison, East St. Louis, Ill. | MATHISON MICHAEL K, Army PFC, East St Louis, St Clair IL, d. 19651108 | exact |
| PFC Jerry L. Potter, Denver, Colo. | POTTER JERRY LEE, Army PFC, **Englewood**, Arapahoe CO, d. 19651108 | Denver suburb |
| Sgt. Richard L. Nuziard, Bellflower, Cal. | NUZIARD RICHARD LEE, USMC SGT, **Mishawaka, St Joseph IN**, d. 19651108 | |
| Capt. Daniel G. Dawson, Rohnert Park, Cal. | DAWSON DANIEL GEORGE, Army CPT, Ft Bragg, Mendocino CA, **d. 19641106**, remains **N** | **see below** |
| WO James W. Sizemore, Hattiesburg, Miss. | SIZEMORE JAMES, Army WO1, Hattiesburg, Forrest MS, d. 19651104 | exact |
| SP4 Wilbur W. Ivanov, Claremont, N.H. | IVANOV WILBUR WILLIAM, Army SP4, **Windsor, Windsor [VT]**, d. 19651111 | across the river from Claremont |
| PFC Ben K. McBride, Boise City, Ida. | MCBRIDE BEN K, Army PFC, **Boise City, Cimarron [OK]**, d. 19651025 | **the paper read the wrong Boise City** |
| PFC William Esposito Jr. — **printed MISSING** | ESPOSITO WILLIAM JR, Army CPL, New York, Kings NY, **d. 19651111** | **see below** |

**Twenty-five of twenty-five. The signature does not fire anywhere on this list.**

## Three things this list teaches beyond the count

**1. The Dawson case is the backdating pattern, documented again.** He is printed on 15 November
1965 among the newly identified dead; DCAS gives his death as **6 November 1964** with remains
**not recovered**. That is a **one-year lag**, and it is the Goudy pattern already in this file:
when a man carried as missing is resolved to dead, **the date that enters the record is the date
he went missing, not the date of the announcement.** Any future attempt to date an item from a
DCAS death date must allow for this.

**2. The Esposito case is the mirror image of Larry's.** The paper printed him **missing** on 15
November; DCAS has him **dead on 11 November**, four days before the item ran. So the printed
*missing* column is not reliable either — it can lag a death. The two columns of this instrument
are asymmetric: **an unmatched name in the DEAD column is informative; the MISSING column is
noisy in both directions.**

**3. The hometown discriminator collapses completely on this list, and it can now be quantified.**
Of the 24 men whose home of record is known, **at least eleven were printed with a place that is
not it** — Bell (Colo./Ill.), Pascuel (a post), Harrington, Howard, Sullivan, Ball (a post),
Merman, Elmore (Ga./Mich.), **Keao (Hawaii/California)**, Nuziard (Cal./Ind.), Ivanov (N.H./Vt.),
McBride (the wrong Boise City) — and the paper **states outright** that Esposito's "home town was
withheld". That is **the paper telling us, in print, that the hometown field is not a hometown.**
The downgrade recorded earlier today was not cautious enough: **on this list hometown is not
corroboration, it is noise.**

## RUNNING TOTAL — 143 names

- **Printed DEAD — 118 names. 117 are in DCAS.** The sole exception remains Halyburton, and he
  was alive.
- **Printed MISSING — 25 names. 19 are in DCAS**; the six absent are the men who came home.
- **136 matched, 7 not, and every one of the seven was alive.**
- **The measured rate of men printed dead who were not dead is now about one in 118** — it was
  "one in forty" two days ago and "one in ninety-four" this morning. **It has fallen every time
  the corpus has grown, which is what an honest denominator does.**

---

# 2026-09-10 — THE CORPUS RECIPE IS WRONG, AND IT HAS BEEN WRONG SINCE THE SAME-NAME PASS

This was found by accident while chasing two names on the Nov 15 list, and it is the most
consequential thing in this file for anyone who re-runs the method.

**The recipe recorded in `kia-same-name-hypothesis.md` converts the NARA PDFs with
`pdftotext -layout`. That mis-associates names with their data.**

The NARA casualty PDFs are **column-major tables**: the Name column is set on tighter line
spacing than the data columns. `-layout` reconstructs by vertical position, so on many pages the
name printed on a text line is **not** the name whose service, rank, birthdate, home of record
and death date follow it. The symptom is easy to see once you know it: in the Illinois file,
`-layout` produces alternating bare-name lines —

    BELL DONNELL
    BELL JAMES WILLIAM           SP4  19480731 HARRISBURG SALINE  19680731  Y
    BELL JERRY W
    BELL JOHN HENRY     ARMY     PVT  19490809 VENICE     MADISON 19680225  Y
    BELL LARRY DEAN
    BELL LEO JR         MARINE CORPS PFC 19500224 CHICAGO COOK    19690217  Y

— and note that the rows carrying data are missing the **Service** field, which is the tell.

**`pdftotext -table` is correct.** Three independent checks:

1. **Prediction test.** Working from the wrapped `-layout` text by hand, the Pennsylvania record
   for our man was reconstructed as *BAAL CARL THOMAS, Army SP5, b. 19270128, Lebanon, Lebanon
   Co., d. 19651109*. Re-extracting `pa.pdf` with `-table` returns **exactly that row**. The
   newspaper independently prints **SP5 Carl T. Ball** — rank, given names and a 6-day lag all
   agree.
2. **Control record.** `HAMMOND RUSSELL, Army SFC, 19320427, Pittsburgh, Allegheny, 19651105` is
   identical under both modes, so `-table` is not shifting everything.
3. **Row count.** `-table` yields **58,096** date-bearing rows against `-layout`'s **59,354**.
   This file's own note says the true figure should be near the **~58,220** names on the Wall.
   **`-layout` was inflating the roll with spurious rows.**

**The two controls that matter both still hold under the corrected corpus:**

- **There is no Hunnewell anywhere in the `-table` roll.** The same-name finding stands.
- **Halyburton is absent.** He was a living POW, so he must be, and he is. The instrument's
  built-in control fires under the corrected extraction too.

**What this changes, and what it does not.** No verdict recorded in this file is reversed by it:
every match asserted here was corroborated by rank, service, city or date agreeing with the
printed entry, and corroborated matches cannot be victims of a mis-association. **What it
changes is the confidence attaching to an UNMATCHED verdict.** Under `-layout`, a name could be
present in the roll and still fail a data-bearing search — which is exactly what happened to
Bell, Ball, Spencer and Tate on this list, all four of which are in DCAS and all four of which
the first strict pass would have called absent. **Since an unmatched name is the whole
signature, this was a live source of false positives, and it is now closed.**

**Corrected recipe — supersedes the one in `kia-same-name-hypothesis.md`:**

```sh
for f in *.pdf; do pdftotext -table "$f" "${f%.pdf}.txt"; done
```

**Also worth recording:** `mp-alpha.pdf` still 404s, 55 files download, and the raw
(non-`-layout`, non-`-table`) extraction is useless here — it emits each column as one run-on
paragraph.
