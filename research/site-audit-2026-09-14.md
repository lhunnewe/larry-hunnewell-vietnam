# Live-site audit, 2026-09-14

**Research note, 2026-09-14.** An audit of every page on the live site (213 pages, built from
commit `f6ee78e`, confirmed identical to the deployed site apart from recollection ordering),
read against the records, the ledger, the interview guide and the commits since 2026-09-01.
Four parallel read-throughs (summary pages; people and places; photographs VN-0001–0079 and
VN-0080–0157), with about a dozen of the high-severity quotes re-checked by hand against the
built text. Some of the others were not individually re-verified; treat each as a lead to
check, not a settled finding.

**Outcome.** On his son's decision the public site was cut the same day to Home, Photographs,
Footage, Drawings and Tell a Story, until Larry's service file comes back (see CLAUDE.md, "The
minimal site"). Nine sections were parked rather than fixed. **This file is the fix list for
bringing each one back.** Private details the audit found are described here by field, not
repeated.

Rule-6 scope checked and clean at audit time on every page: the 24 Oct 1964 Stars and Stripes
caption (names, roles, detachment), the 14 Aug 1964 Nui Ba Den helicopter loss, the Market
research negatives. The leaks were elsewhere, below.

## Fixed on 2026-09-14 (on the pages that stayed)

- Photo, footage and drawing pages render only the picture, title, labels (drawings) and his
  recollections. That removed, from rendered pages: every description, research note, badge,
  date, place, people line, citation and provenance line. Among them VN-0017's two shooting
  dates set against each other, VN-0012's "R&R" and file path, VN-0074/VN-0078's Bien Hoa
  16 May 1965 answer, VN-0023's "Pathet Lao" in description and notes, VN-0028's identity guess
  and equipment hypothesis, the emblem and patch descriptions on VN-0012/0014/0020, VN-0157's
  public-display decision, VN-0151's queued question, VN-0153's "probe answers" provenance,
  VN-0148's stale "search has not been run", VN-0010's machine-placed mountaintop, VN-0152's
  machine "gibbon", VD-0004's partial inscription readings, and all ledger/issue numbers and
  file paths on those pages.
- Six recollections put under `hold`: the five 2026-09-05/09-12 drawing paraphrases that answer
  open (validate) questions (fort, generators, shower layout, shower shooting, Rosethorn 007
  placement) and the 2026-08-15 VN-0023 paraphrase that labels the prisoner.
- Seven photo titles hedged to his words: VN-0010, 0012, 0028, 0085, 0151, 0152, 0157.
- Home page: service box ("118TH AOD — AVN OPS DET", "1ST CAVALRY"), the brief's unit
  paragraph, and "helicopters, the mountain" (a machine reading of uncataloged film) removed.
  Masthead no longer says "Sep 1964 – Sep 1965". Footer GitHub link removed.
- Uncataloged pages no longer say "story haven't been recorded" above his words, and no longer
  carry an "Unverified recollection" badge with nothing behind it.

## Still in the records (do not render now; fix before they do)

Photos, for when descriptions render again:
- VN-0011 notes: "the '118th AOD' he has given as his own" — stale since 2026-09-13.
- VN-0017 description/notes: the Feb–Mar vs July shooting dates (guide: put neither date to him).
- VN-0012: the R&R sentence and its file path. VN-0074 / VN-0078: the Bien Hoa date.
- VN-0023: "Pathet Lao" in description and notes; "firmly places Kennedy" rests on a paraphrase.
- VN-0028: resemblance to VN-0009 and "(radio/relay hypothesis)".
- VN-0012 / VN-0014 / VN-0020: emblem and patch shape and colour.
- VN-0016 description repeats Lewis and the Guard (guide: don't mention them back).
- VN-0010: `location` nui-ba-den and "mountaintop" come only from the vision pass (rule 4).
- VN-0148: "That search has not been run", "during Larry's tour"; his 2026-09-03 words ("It was
  already there when I got to Vietnam") are on a record not linked to vn-0148.
- VN-0157: the #22 sensitivity text in notes; `location` is where it happened, not the frame.
- VN-0151 / VN-0155: the housekeeper privacy discussion in rendered notes.
- VN-0152: "gibbon", "gorilla" from the survey, ranked above his "monkey".
- VN-0080 / 0081 / 0157: quotation marks around his words with the grammar silently changed.
- VN-0021: notes lead with the Nebraska sweep; the Kansas-or-Nebraska answer and the
  2026-09-13 "I don't think we even had a medic" tension belong in the ledger, not the page.
- VN-0025 / VN-0002: "could recover Ron's real surname" — identified 2026-08-16.
- VN-0062: "the driver he called VC Charlie" — he did not tie VN-0062/0064/0067 to him.
- VN-0071: his "that is what PFC Jones was looking at in the picture" probably means VN-0012.
- `giscus-vn-0071-c18307905.json` relatedPeople includes major-lewis (withdrawn).
- The VD-0004 correction record links vn-0016 and vn-0071; it is about the drawing.
- Templates, when restored: Location/People printed raw slugs, not names.

## Parked sections: what must change before each comes back

**/units/** — the whole page is the founding brief ("118th AOD", 110 men, pathfinders,
clearances), traced 2026-09-13 to his son's mishearing, and names "Aviation Operations
Detachment" while the unit-name question is open. "What would settle it: DD-214" — the DD-214 is
in hand and does not name the unit. Rebuild from his own words only, after the cold follow-ups.

**/story/** — the founding brief's paraphrase (same 118th wording); "Japan, August 1965" for the
KIA report; "Sun Mountain" (he said "The Mountain"); "Guegler" (his own spelling is Geutler).
Recommended: rebuild from transcribed words, or reduce to a short introduction.

**/timeline/**
- `1965-08-japan-kia-report.json`: "About August 1965" sorts before he leaves Vietnam; his
  account is Camp Zama, about 3 Sept 1965 (`2026-09-03-phone-camp-zama-date.json`).
- `1964-signal-school.json`: "17-week", badged Confirmed; the clear DD-214 scan says 15 weeks.
- `1964-1965-helicopter-travel.json`: "what he remembers as the 118th AOD".
- `1965-09-departure.json` (Unverified) and `1965-fall-japan-medical-command.json` (Strongly
  supported) disagree in badge for one evacuation.
- `1965-02-bathroom-shooting.json`: headed Feb–Mar 1965 while rendering his "July of 1965"
  words — the conflict the guide says not to put to him.
- `1965-06-25-my-canh-bombing.json` notes state VN-0120 belongs to the Embassy bombing; open.
- `1965-08-450-civilians-accusation.json` cites the CIA Arc Light records as if in support;
  they rule a B-52 strike out.
- Medical specifics (stool, urine) and "It added PTSD" repeated; family decision.
- Rendered recollection blocks duplicated inside single events (VN-0157 detonator, the van,
  VN-0017 "other Unit", camp fires). Nondeterministic ordering of same-date recollections
  (now sorted in `shownRecollections`).
- Missing, rule-6-safe: the Subic Bay stop; Fort Gordon as the signal school; DD-214 promotions.

**/people/** (24) and **/places/** (8)
- `larry-dennis-hunnewell.json` summary: "remembers his organization as the 118th AOD (Aviation
  Operations Detachment)"; the brief record renders there too. "Service dates… remembered
  rather than documented" — the DD-214 documents them. His 2026-09-13 outfit words and the
  Lieutenant Colonel answer are not linked to him.
- `thom-son-nuht.json` notes name candidate units (118th Avn Co at Bien Hoa, 145th Avn Bn,
  UTT/68th) against the battalion question's "do NOT name any unit"; place rated Plausible
  while person pages state Tân Sơn Nhứt as fact.
- `ron-tototz.json` (privacy): a 1962 street address, a likely-living widow's name and resting
  place, his mother's name and birthplace, and a family-contact line. Keep name, dates,
  hometown; move the rest to `private/` or research.
- `captain-kennedy.json`, `nui-ba-den.json`, `sgt-weaver.json`, `thom-son-nuht.json`: render the
  now-held drawing paraphrases (they will stay off once the templates use `shownRecollections`).
- `lt-hanna.json`: "the full casualty file (DCAS)… is the sweep that would settle it" — run
  2026-09-12, no fit.
- `sgt-chapman.json`: basic-training link in summary (resolved as a mis-link 08-23); "Ask Larry
  to reconcile"; missing his 09-13 role in the van and the mountain postings.
- `japan.json`: Guegler linked to Japan (he flew him off the mountain); "coordinates wait on
  Larry confirming the hospital" (he named Camp Zama 08-13); Clark AB suggested (he said Subic
  Bay); two conflicting timeline entries shown.
- `rosie.json`: "no photographs" and "worked the door" against VN-0154/0155.
- `gagne.json`: role "armory at the mountain" against 09-12 "all the weapons at Ton Son Nhut".
- `pfc-zekeowski.json` / `captain-guegler.json`: display names against his later spellings
  (Zukowski 09-03; Geutler) — change `name`, never the slug.
- `sgt-weaver.json`: the vision survey's "WE…" tape presented as corroboration; his 09-03 drop-off
  words missing.
- `cholon.json`: his medevac stop near the French pool and Zukowski there are missing.
- `nha-trang.json`: "a medic from Nebraska" (he later said Kansas or Nebraska).
- `sgt-la-franceaous.json`: "Ask Larry for context" — answered 09-13; "section" is inference.
- `pfc-stanton.json`: "soldier in Larry's unit", "friend kept after the war" — beyond his words.
- `vc-charlie.json`, `major-lewis.json`: thin; hide from the index. `estes.json`: the Guard
  analysis belongs in research (guide: don't mention the Guard back).
- Workflow text on nearly every person and place page ("ask Larry", "ledger #", file paths,
  "what to ask him, when the moment comes").
- Place pages list far fewer people than point at them; derive both directions.

**/research/** and **/research/resources/**
- Unit paragraph: "Larry remembers the 118th AOD — Aviation Operations Detachment. 'AOD' turns
  out to be genuine period vocabulary", beside "18th Aviation" — close to spelling out the
  held finding.
- KIA question: "what remains is casualty lists that have to be read by eye" — all Pacific
  Sept–Dec 1965 lists read, none names him.
- Lowry: "finding any sibling term may locate the detachment" (A-324 known); "searching spelling
  variants of Sgt. Lowry" against the ledger's "do not search memorials for him again".
- Guegler "and, he thinks, the pilot at the controls in VN-0016" — he said "possibly".
- Resources: Stars and Stripes search advice already carried out; "OMPF and DD-214 must be
  requested" (DD-214 in hand, SF-180 mailed 2026-08-17); the 118th association links.

**/sources/**
- `vhpa-kia-index.json` notes name a candidate Hanna first name (the first-name question is open).
- `dsm-register-2004-totosz-obituary.json` notes (privacy): the survivors list and cause of
  death; and "22 years earlier than… about ten years ago" is wrong arithmetic (about 12).
- `va-rating-decision-2015.json`: rated conditions; family decision.
- DD-214 source notes: the county recorder stamp reveals the family's state.
- File paths and "gitignored" throughout.

**/glossary/**
- 118th AOD and Pathfinder entries (brief wording); "17-week" signal school; SF-180 "the
  family's next step" (mailed); a "WE…" tape "may name a second man" (Weaver, 08-15); the C-123
  over the hooches in VN-0117 (uncataloged; machine reading); the VA and Agent Orange entries;
  a footer pointing at `data/photos/ai-observations/`.

## Negative findings

- No SSN, service number, date of birth or current family address was reported by the four
  read-throughs; the minimal site passes `check-published.mjs`'s privacy patterns. The parked
  pages were not machine-scanned for them — run the check on each before restoring it.
- No 18th AOD caption material, 14 Aug 1964 crash detail, or Market research on any page.
- Near-duplicate scans: none worth hiding (VN-0001/0002, 0003/0007/0008, 0004/0005,
  0030–0034, 0035/0045/0069, 0074/0078, 0105/0109, 0112/0121, 0145/0156 are distinct frames
  with their own threads).
