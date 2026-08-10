# DD-214 findings (non-identifying transcription)

**Research note, 2026-08-10.** Larry's wife photographed the family's copy of his DD-214 and
sent the picture; transcribed the same day from a contrast-enhanced copy of that photo. The
photo itself, the enhanced copy, and the identifying fields (service number, SSAN, date of
birth, street address) live in the family's **private archive** (`private/` — gitignored),
never in this repo. Source record: `data/sources/dd214-1965.json`.

Provenance of the paper copy: it carries a **State of Montana** recorder's stamp, so a
certified copy was filed with a Montana county recorder after the family moved — a second
place to get a clean copy if the original photo stays blurry.

## What the form establishes (previously unknown or unconfirmed)

| Fact | Detail | Form item |
|---|---|---|
| Inducted (drafted) | **October 28, 1963**, Los Angeles Selective Service local board; entered as PVT E-1 at Los Angeles | 18, 19, 21, 22 |
| Promotions | PFC (E-3) **June 29, 1964**; SP4 (E-4) **May 13, 1965** (grade at separation) | 5, 32 |
| Specialty | **Radio teletype operator** (MOS read as 054.20, digits partly blurred); Signal school, **17 weeks, 1964** ("SIG … 17 WKS 64 … RAD TT OPR") | 23a, 25 |
| Foreign service | **1 year, 1 month, 18 days** | 24 |
| Last duty assignment | "…**USA MED COMD, APO SF 96343, USARJ**" — an Army medical command under U.S. Army Japan; APO 96343 served Camp Zama | 11 |
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
   and it extends the newspaper search window to roughly August–November 1965. Open question:
   reassignment, or medical treatment? (Box 27 says no combat wounds, which doesn't rule out
   illness or injury.)
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

## Reading notes / still blurry

- The last-duty unit line's prefix (before "USA MED COMD") is illegible in the photo.
- MOS digits read as 054.20 but are soft; the era's radio teletype operator MOS was 054.x,
  so the reading is consistent but not certain.
- Statement-of-service "days" column is soft (2 yr 1 mo **2** days is the best reading, and
  matches the "retained 1 month 2 days" remark exactly).
- A straight-on, well-lit rescan of the paper copy (or the Montana recorder's certified copy)
  would clear all of these.
