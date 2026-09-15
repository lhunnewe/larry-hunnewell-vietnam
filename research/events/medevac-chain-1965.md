# The medical evacuation, late August – September 1965: the chain and its dates

**Research note, 2026-09-14.** Collected from the research notes of
`data/timeline/1965-09-departure.json`, `data/timeline/1965-fall-japan-medical-command.json`,
`data/timeline/1965-08-450-civilians-accusation.json` and `data/timeline/1965-08-japan-kia-report.json`
during the timeline cleanup after the site audit (`research/site-audit-2026-09-14.md`). No new
search was run for this note. Ledger #1, #7, #10.

**Handling.** The interview guide asks about the Russian at Subic Bay ("how many days were you in
that room?") and says the campfire answer must not be fished for with a number. So **no day counts
for Subic Bay or the campfires go into a field that renders**, and nothing here is put to him.

## Two timeline entries, two events

Until 2026-09-14 the timeline carried one evacuation under two entries with different confidence
("Unverified" on the departure, "Strongly supported" on Japan), and both told the same story. They
are now distinct:

| Entry | The event | Confidence | Evidence |
|---|---|---|---|
| `1965-09-departure` | Leaving Vietnam as a medical evacuee: the mountain, the base, Cholon, Subic Bay | strongly-supported that he left as a patient; dates and stops are his memory | DD-214 (last duty "MHD", the medical holding detachment in Japan; box 27 NONE), his accounts |
| `1965-fall-japan-medical-command` | His time as a patient at Camp Zama, to separation | strongly-supported | DD-214 (MHD, APO 96343), AMEDD histories (Camp Zama the receiving hospital before Dec 1965), his unprompted naming of Camp Zama |

Both are `strongly-supported` for the same reason: the DD-214 documents that he finished his
service on a medical holding detachment in Japan, which only a patient is on, and his account
supplies the rest. Neither is `confirmed`: no clinical record has been seen (NPRC, filed by
hospital name).

## His accounts of the chain

- **2026-08-12 phone call** (`2026-call-japan-medevac.json`, paraphrase): sick, medically evacuated,
  arriving in Japan in early September.
- **2026-08-13** (`giscus-stories-c18006833.json`, transcribed): the accusation "at the end of my
  service", back at "Ton Son Nuht" a medic said he had yellow jaundice, "I was medivac out a couple
  days later", "I was at Camp Zama in Japan in Sugami Uro".
- **2026-08-22** (`giscus-stories-c18118868.json`, transcribed): "Flew first to the Philippines and
  spent 4 days at a navy base or navy hospital. Then flown to camp Zama in Japan." Hospital stay
  "close to 4 months".
- **2026-09-02** (`giscus-stories-c18259364.json`, transcribed): Captain Geutler flew him off the
  mountain and dropped Sgt Weaver in his place; the medic trailer and "yellow jaundice"; "the next
  day they place me in Cholon near where the French swimming pool was at for maybe 3 days"; Subic
  Bay "4-5 days"; Camp Zama; "I was in and out of consciousness."
- **2026-09-03 phone call** (`2026-09-03-phone-camp-zama-date.json`, paraphrase): "Camp Zama may have
  been 9/3/1965"; "kind of in and out of it"; conscious at Subic Bay Naval Hospital.
- **2026-09-05** (`giscus-stories-c18306894.json`, paraphrase): flown out "after 2-3 days of seeing
  the hundreds of camp fires".

## The derivation (the archive's, not his)

Working back from about 3 September at Camp Zama: Subic Bay 4–5 days, Cholon about 3, the jaundice
diagnosed the day before Cholon, so off the mountain about 25–27 August and out of Vietnam about
the end of August. The campfire nights, 2–3 days before he was flown off, fall about 23–26 August
1965. Every link but the DD-214 is his memory, and he hedges the anchor ("may have been", "in and
out of it").

This is why the timeline now reads:

- the accusation: "About late August 1965";
- the departure: "Late August or early September 1965" (sort key 1965-08-29);
- Camp Zama: "About September – November 1965" (sort key 1965-09-03, his date);
- the KIA sighting: "About September 1965", in his first days at Camp Zama (sort key 1965-09-06).
  The founding brief's "Around August 1965" (a paraphrase, `2026-brief-kia-report.json`) had sorted
  that sighting before he left Vietnam; his own later telling puts it after he reached Japan.

## Tensions, kept and not reconciled

- **Route.** The AMEDD urology history (`data/sources/amedd-urology-vietnam.json`) describes the 1965
  evacuation route via **Clark AB**, Philippines. Larry names **Subic Bay** and a navy hospital, twice
  and in his own words. His account stands; the AMEDD route is a general description, not his
  record. `amedd-urology-vietnam` is cited on the Camp Zama entry for the hospital, not on the
  departure for the route.
- **Duration.** "Close to 4 months" from about 3 September runs past his 30 November 1965
  separation (DD-214). A soft estimate.
- **Season.** "Cold, going into winter" against an early-September arrival: covered if the cold is
  the later part of a stay running toward late November.
- The Ia Drang anchor for the campfire week (ledger #10) is recorded there and not repeated here.

## Removed from rendered fields, 2026-09-14

- The symptom description he gave on 2026-08-12 (the colour of stool and urine) was removed from the
  Camp Zama entry's `description` as a health detail (site audit). It is still in his account,
  `2026-call-japan-medevac.json`, and in ledger #7; nothing was moved to `private/`.
- The restaurant details of the Ginza day (name, basement) were removed from the same description,
  because the tier-2 Ginza question still asks about the sign, the entrance and the stairs.
