# National Archives Catalog — first free pass, 2026-09-01

Step 1 of the gate on `nara-rg472-request.md`: search catalog.archives.gov before sending
anything, because it is free and part of RG 472 is digitised. Run in the browser at
<https://catalog.archives.gov>.

**Headline: the pass paid for itself by catching an error in our own draft.**

## 1. There is no 1965 "Operational Report — Lessons Learned," and we were about to ask for one

The series exists and is precisely identified:

> **Department of the Army, Office of the Adjutant General, Operations Report-Lessons
> Learned, 1966–1968** — NAID **5719297**, HMS/MLR **A1 900**, Record Group 472.
> "This series consists of operations reports-lessons learned relating to Vietnam published
> by the Department of the Army, Office of the Adjutant General. These reports were collected
> and maintained by the U.S. Army Vietnam Command Historian."

Its file units run **01/1966–09/1966** (NAID 39054199), **01/1967–06/1967** (39054468) and
**01/1968–03/1968** (39054726). **The series starts in 1966.**

Our draft's item 1 asked for "5th Special Forces Group Operational Reports / Lessons Learned,
all reporting periods in calendar year 1965" — which is the single thing we said to protect
if we could have only one. **It does not exist in that series.** Sent as written, the letter's
most important item would have come back "we have no such record," and a reasonable reader
would have taken that as an answer about the 5th Special Forces Group rather than about a
series that had not started yet.

This is exactly what the free step was for. The letter has been corrected: for 1965 we now ask
for the 5th SFG's **monthly operational summaries and command reports**, and — more usefully —
we ask NARA to tell us **which series holds 5th Special Forces Group records for 1964–65**,
which is a reference question they are well placed to answer and we are not.

The 1967 report we read at Texas Tech is consistent with all of this: ORLLs began later, and
what we saw was the mature form of the series.

## 2. Núi Bà Đen is in the catalog 199 times, and 175 of those are available online

A plain search for `"Nui Ba Den"` returns **199 records, 175 available to access online** —
131 textual, 55 data files, **9 moving images**, 2 photographs, 1 sound recording.

### The film of the mountain

Nine moving-image items, four of them online. The three clearest:

| Title | NAID | Local ID | Record Group / series |
|---|---|---|---|
| CopterLifted Post Exchange (PX) Brightens Life for U.S. Army Troops on South Vietnam Mountain Top, Nui Ba Den Mountain, Vietnam | 102044075 | 111-DD-125-69 | RG 111, Filmed News Releases |
| Footage from Tay Ninh Province, Nui Ba Den Mountain (Black Lady Mountain) | 560662229 | 127-R-5528 | RG 127, Films of Marine Corps Activities |
| Gis Sit Atop Viet Cong on Black Lady Mountain, South Vietnam | 102044806 | 111-DD-15-68 | RG 111, Filmed News Releases |

The Marine Corps footage carries photographer credits — **F. C. Beeney** and **L. C. Della
Puca** — which is the kind of detail that makes a film traceable.

**Caution on dates.** The RG 111 local IDs end `-69` and `-68`, which on that numbering
scheme points to **1968 and 1969** — after Larry. These are almost certainly the later
American mountain, not his. They are recorded because moving film of the summit is worth
having regardless, and because one of them may show the same ground he photographed.

**This does not cost anything to look at**, and it has not been looked at yet.

## 3. What still needs narrowing

- `"5th Special Forces Group" 1965` filtered to online returns 264 records, but relevance is
  loose — Marine Corps intelligence summaries and personnel files crowd the top. This needs
  the RG 472 filter working, or a series-level approach, not a keyword search.
- The `partOfRecordGroups=472` URL parameter did **not** apply when set by hand; results came
  back from RG 319, 342 and 127. Use the on-page facet rather than a hand-built URL.
- A series worth remembering for the Đồng Xoài and Bu Dop items: **Vietnam After-Action
  Reports, 1965–1968**, NAID 25778382 (RG 127, Marine Corps) — the wrong service for our
  camps, but proof that AAR series of exactly this period are catalogued at series level.

## 4. Continued the same day — the detachment searches, and what they establish

- **`"Detachment A-324"` → zero results.** Not a disappointment: the catalog describes RG 472
  at **series and file-unit level**, not at detachment level. A search for a specific A-team
  cannot succeed there however the records are held. **This is the finding that most
  strengthens the letter**: our detachment questions are not answerable by catalog search,
  which is precisely why they are worth putting to an archivist. It also means a nil return
  here says nothing about whether the records exist.
- **Boolean OR breaks the catalog.** A query of the form `"A-324" OR "Detachment B-32"`
  returns an application error page ("Unexpected token '<'"), not zero results. Search one
  phrase at a time. Recorded so the next session does not read an error as an absence.
- **The dates are all wrong for us, in the films at least** — see
  `../photos/nara-film-of-the-mountain.md`, where the four Núi Bà Đen films and their links
  now live. The earliest is December 1967.
- **One 1965 item found in the right province:** *Seabees in Vietnam, **Ben Soi, Tay Ninh
  Province**, Vietnam*, NAID **102046499**, local ID **111-DD-109-65**. Bến Sỏi is Detachment
  A-321, under the same B-32 that ran Núi Bà Đen, and the `-65` suffix dates it to Larry's
  year. Not yet watched.

## Next in this pass

- [ ] Watch the four Núi Bà Đen films and the 1965 Bến Sỏi film; note what each shows.
- [ ] Redo the 5th SFG search using the on-page Record Group facet for 472 (the URL
      parameter does not work).
- [ ] Search `Ben Soi`, `Trang Sup`, `Suoi Da` for more 1965-dated film of B-32's camps.
- [ ] Only then send the letter, with whatever the catalog has already answered removed
      from it.
