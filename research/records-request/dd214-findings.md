# DD-214 findings (non-identifying transcription)

**Research note, 2026-08-10.** Larry's wife photographed the family's copy of his DD-214 and
sent the picture; transcribed the same day from a contrast-enhanced copy of that photo. The
photo itself, the enhanced copy, and the identifying fields (service number, SSAN, date of
birth, street address) live in the family's **private archive** (`private/` — gitignored),
never in this repo. Source record: `data/sources/dd214-1965.json`.

**Updated 2026-08-15** from a clear scan of the DD-214 that arrived bundled with Larry's VA
paperwork (`private/documents/va/`, gitignored). Every "blurry" reading below is now
resolved; corrections are folded into the table and detailed in the
[clear-scan addendum](#clear-scan-corrections-2026-08-15).

Provenance of the paper copy: it carries a **State of Montana** recorder's stamp, so a
certified copy was filed with a Montana county recorder after the family moved — a second
place to get a clean copy if the original photo stays blurry.

## What the form establishes (previously unknown or unconfirmed)

| Fact | Detail | Form item |
|---|---|---|
| Inducted (drafted) | **October 28, 1963**, Los Angeles Selective Service local board; entered as PVT E-1 at Los Angeles | 18, 19, 21, 22 |
| Promotions | PFC (E-3) **June 29, 1964**; SP4 (E-4) **May 15, 1965** (grade at separation) | 5, 32 |
| Specialty | **Radio teletype operator**, MOS **05C20** ("05C20 RAD TT OPER"); Signal school, **15 weeks, 1964** ("SIG … 15 WKS 64 … RAD TT OPN") | 23a, 25 |
| Foreign service | **1 year, 1 month, 18 days** | 24 |
| Last duty assignment | "**MHD USA MED COMD APO SF 96343 USARJ**" — the **Medical Holding Detachment** of the Army medical command under U.S. Army Japan; APO 96343 served Camp Zama | 11, 12 |
| Separation | **November 30, 1965**, US Army Personnel Center, Oakland, Calif.; **Honorable**; ETS (AR 635-200, SPN 201); retained 1 month 2 days "for the convenience of the government" | 6, 9, 11a, 13, 32 |
| Total active service | 2 years, 1 month, 2 days | 24 |
| Reserve transfer | USAR control group, US Army Admin Center, St. Louis, MO; obligation to **October 27, 1969** | 10, 16 |
| Decorations | **Armed Forces Expeditionary Medal (Vietnam)**; Marksman (Rifle) | 26 |
| Wounds | Box 27 ("wounds received as a result of action with enemy forces") reads **NONE** | 27 |
| Personal | Born 1940, Los Angeles; married at separation; home of record Inglewood (Los Angeles), Calif.; education incl. ~45 semester hours, "General–Engineering" | 7, 8, 15 |

## What it changes

1. **The draft year moves to 1963.** Family memory said 1964; the form says October 28, 1963.
   Timeline updated (`data/timeline/1963-10-28-inducted.json`).
2. **He finished his service in Japan, not Vietnam.** The last-duty medical command under
   USARJ is a genuinely new lead. It fits the cool-season Tokyo photo series and makes his
   memory of seeing the Stars and Stripes KIA item *while in Japan* documentary-plausible —
   and it extends the newspaper search window to roughly August–November 1965. ~~Open
   question: reassignment, or medical treatment?~~ **Answered 2026-08-15:** the clear scan
   reads the unit prefix as "MHD" — Medical Holding Detachment — so medical treatment, as a
   patient. (Box 27's NONE for combat wounds is consistent: he was evacuated for illness.)
3. **Tour-date arithmetic.** Foreign service of 1 yr 1 mo 18 days counted back from the
   November 30, 1965 separation puts the start of continuous overseas service near
   **October 12, 1964** — a few weeks after the remembered "about September 1964" arrival.
4. **The "42" memory is not the service number.** The actual number (kept off-repo) contains
   no 42. Whatever 42 meant to him in military matters, it was something else — worth one
   gentle follow-up, but the prompt is retired from the interview guide.
5. **The AFEM (Vietnam) is itself proof of the Vietnam tour** — the standard award for
   Vietnam service before the Vietnam Service Medal (est. July 1965) reached the field.
6. **What the form does NOT give: the Vietnam unit.** Item 11 names only the *last* duty
   assignment (Japan). The 118th AOD question still rides on the NPRC file — and the SF-180
   can now be filled completely (service number, exact induction and separation dates).

## Clear-scan corrections (2026-08-15)

A clear, straight-on scan of the DD-214 arrived 2026-08-15 (bundled in the same PDF as the
VA paperwork, archived in `private/documents/va/`). Every open reading from the 2026-08-10
photo transcription is now resolved:

1. **The illegible last-duty prefix reads "MHD" — Medical Holding Detachment.** This is
   exactly the reading `research/places/japan-hospital-1965.md` predicted ("PAT DET,"
   "MED HOLD DET," or "HQ"): patients evacuated from Vietnam were attached to the receiving
   facility's medical holding detachment until return to duty or separation. Larry's
   separation *from patient status* at the Camp Zama medical command is now **documentary**,
   not inferred. Timeline entry upgraded
   (`data/timeline/1965-fall-japan-medical-command.json`).
2. **MOS is 05C20**, not 054.20 — "05C20 RAD TT OPER," consistent with the era's 05C radio
   teletype operator MOS. Related civilian occupation: NA.
3. **Signal school was 15 weeks** ("15 WKS 64"), not 17.
4. **SP4 date of rank is May 15, 1965** (item 3b), not May 13.
5. **Statement of service confirmed:** net service 2 yr 1 mo 2 days; foreign and/or sea
   service 1 yr 1 mo 18 days — the earlier soft readings were correct.
6. Remarks block confirmed: PFC (P) appointed June 29, 1964; blood group A; SGLI $10,000;
   lump-sum payment for 5 days accrued leave; "retained in service 1 month & 2 days for the
   convenience of the government."
7. The scan carries the same **State of Montana** recorder's stamp ("Book 685, Page 878")
   noted on 2026-08-10.

## The VA paperwork in the same packet

The scan's later pages are a **VA rating decision letter dated October 21, 2015**
(source record: `data/sources/va-rating-decision-2015.json`; the letter itself and the VA
file number stay in the private archive). What it contributes to the research:

- **The VA file number** — now entered on the SF-180 (item 9) and kept in
  `private/notes/sf180-hand-copy-values.md`. Larry's VA claims file (C-file) is itself a
  records target: C-files typically contain copies of service and medical records the VA
  gathered to adjudicate the claim.
- **Independent corroboration of in-country Vietnam service:** among the rated conditions is
  ischemic heart disease, an Agent Orange presumptive — a presumption available only to
  veterans with documented service *in* Vietnam, meaning the VA verified his Vietnam service
  when granting it.
- His combined disability rating history runs from 2011 to a 70% combined rating effective
  August 21, 2015.
