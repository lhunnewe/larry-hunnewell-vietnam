# Breakfast questions for Larry

A prioritized interview guide, distilled from the AI survey of all 157 photographs
(`data/photos/ai-observations/`) and from what his own answers have opened since. Each entry
names the photos to show him and says what the answer would unlock. Full per-photo question
lists live in the observation records.

> **Mobile version:** this guide is also a website page at `/interview/`
> (src/pages/interview.astro) with tap-to-open photo links and checkboxes that persist on the
> device — built for the breakfast table. Keep the two in sync when questions change.
>
> **Keep it out of Larry's path:** the page is deliberately unlinked from the site (no nav,
> no Research-page link, `noindex`) so he doesn't stumble onto the questions — several are
> probes that only work if details aren't supplied. Reach it by direct URL / bookmark only,
> and don't re-link it from any public page. Same goes for spoilers in `researchNotes`
> fields that render on photo/footage/place/person pages he browses: keep "don't prime him"
> hypotheses (Ketel's beer barrel, the two-friends split) in `research/` files, not in
> rendered fields.

**How the tiers work now**

The order is by *what the setting allows*, not by when the question was written.

| Tier | What it is | When to use it |
|---|---|---|
| **1** | Live cold probes, no photograph needed | **A phone call.** Ask these first; several decay if primed, and one blocks a search |
| **2** | Needs the picture in front of him | The table, with a tablet |
| **3** | Quick confirmations | Fast yes/no over coffee |
| **4** | Stories and people | No research agenda — let him wander |
| Hold | Heavy material | Only when he's ready |

**How to use this**

- One or two photos per breakfast. Show the actual picture (the website gallery on a tablet
  works well — and he can type or dictate right into the Memories box on the photo page).
- Record his words **exactly as he says them**, even the tangents — especially the tangents.
  ("Verbatim" now has a narrow meaning in this archive: text Larry typed himself. What you
  capture at the table is `transcribed`. See CLAUDE.md, "Who is speaking".)
- Never correct him from the research. If his memory differs from a hypothesis below, his
  memory goes in the record as given, and the difference becomes a research note.
- Check off questions as asked; add the date.
- **He answers on his own schedule.** Some of the best material arrives days later and out of
  nowhere — in the car, at the VA, mid-way through something else — with no reference to the
  question that prompted it. He leaves details out and adds them back at random. Two
  consequences: a question that got a thin answer is not closed, and anything he volunteers
  away from the table is worth typing into the Memories box the same day, with a note of
  where and how it came up. Provenance matters most for exactly these: an answer that
  arrived unprompted is far stronger evidence than one given to a direct question, and only
  the person who was there can say which it was.
- **Ask him to spell names and places, and mark clearly when the spelling is his.** There are
  three different things here and the archive has already confused two of them: whose words,
  whose keystrokes, and whose spelling. You type, so the keystrokes are always yours — but a
  spelling Larry chose letter by letter is evidence, and a spelling you supplied for a sound
  is not. The base name looked like four independent renderings until it turned out only one
  ("Ton Son Nuht", 2026-08-13) was his; the rest were transcription. Note which it is at the
  time, because nobody can recover it later.
- **Retire a probe here the same day it is answered.** This guide has twice gone on asking
  questions Larry had already answered, because the answer went into `data/recollections/`
  and nothing came back up to the guide. When a probe is spent, move it to "Answered — the
  record" below, and say what it produced. See CLAUDE.md, "Known drift".

---

## If you only get ten minutes on the phone

1. **Gagne** — was he French himself, and where did he die? *(blocks a search)*
2. **Đồng Xoài** — mountain, or the Saigon van?
3. **The CBC crew** — described cold, before anyone shows him a film.
4. **Camp Zama** — did he see the Stars and Stripes piece in the ward? *(ledger #1)*
5. **Was Kennedy always the one in charge?** *(don't offer the other name)*

---

## Tier 1 — Ask cold, ask next (no photograph needed)

Every question here works on a telephone call. They are ordered by what the answer unlocks.

- [ ] **1. Gagne — nationality first, then where he died.** *(ledger #18, issue #68)*
  *"You mentioned Gagne, and that he was Foreign Legion. Was he French himself, or was he
  from somewhere else? And where was he when he died?"* Ask softly, and in that order.
  - [~] **PARTIALLY ANSWERED 2026-09-01** — *"He mentioned on the call the guy was french.
    He also mentioned that Legionaires couldn't go home."* (paraphrase;
    `data/recollections/2026-09-01-phone-gagne-french.json`)
  - **This does not close it, and the reason matters: the French Foreign Legion recruits
    foreigners by design.** A Legionnaire could be German, Spanish, Algerian or American and
    still be a Legionnaire, so "french" may be reporting **the unit rather than the
    passport**. The second half — *Legionnaires couldn't go home* — matches a real feature of
    the Legion (service under an assumed identity, men with reasons not to return home) and
    is not a detail invented by accident; treat it as a lead about **who Gagne was**, not a
    fact about him.
  - **Why it is first:** nationality decides which casualty records could ever name him, and
    **until he answers plainly, no search is run.** Looking in the wrong record set and
    finding nothing produces a false negative that can stand for years.

- [ ] **2. Where were you sitting when Đồng Xoài was hit?**
  *"When Dong Xoai was hit and you were on the radio — were you up on the mountain, or down
  at the radio van in Saigon?"* Supply no other detail.
  *His 2026-09-01 answer runs the mountain and the radio together without saying which set he
  was at, and a great deal rests on which it was.*

- [ ] **3. The CBC crew — described before anything is shown.** *(ledger #19, issue #69)*
  *"Tell me about the CBC people. How many were there? What gear did they have? Was there a
  reporter as well as a cameraman? Did they say where in Canada they were from? Where were
  you all when they filmed?"*
  **Ask first and show nothing.** A candidate film has been found and is free to watch
  (`research/events/cbc-documentary-1964-65.md`), which is exactly why the order of
  operations matters: a description given cold can be matched against a film; a description
  given after watching one cannot.

- [ ] **4. The CBC pictures — described, not hunted.**
  *"What do the CBC pictures show — where were you all, and what were they doing?"*
  He says photographs of the crew are among his own. The archive cannot find them, and a
  machine search of all 157 scans for film crews found nothing
  (`research/photos/scan-reconciliation-2026-09-01.md`). A described frame can be matched
  against the survey even when the survey never labelled it as a film crew.

- [ ] **5. Camp Zama — the ward, and the flight out.** *(ledger #1 — the archive's oldest
  question)*
  *"How long were you in the hospital at Camp Zama? Did you see the Stars and Stripes piece
  in the ward? And how did they fly you out of Vietnam?"*
  He arrived in Japan around early September 1965 as a medevac patient and separated
  30 November 1965, so the misreport window is roughly Sept–Nov 1965 and the ward is where he
  would have seen it. **Pacific Stars and Stripes is not on newspapers.com** and the
  hometown-echo search is a confirmed negative, so his own memory of the ward is currently a
  better lead than the paper. *(Photos VN-0093/VN-0095 help but aren't needed.)*

- [ ] **6. Was Kennedy always the one in charge?**
  *"Was there ever another officer up there besides Captain Kennedy? Did whoever was in
  charge change while you were there?"*
  **Do not offer the other name.** He named Captain Kennedy cold on 2026-09-01; period
  records name a different officer as detachment commander in the same window
  (`research/people/nui-ba-den-roster-names.md`). If he produces that name himself it is
  corroboration; if we hand it to him it is worth nothing.

- [ ] **7. The names on the rocks.** *(ledger #4, #12 — reads fine aloud, photo optional)*
  Read them slowly: *"Rewerts. Garvey. Kirby, First Special Forces. Captain Lynch. Dean — it
  says deceased. Willcut. …Was Sergeant Lowry's name painted up there too?"*
  **Stricter since 2026-09-01.** Two of these names have been matched to real Special Forces
  officers serving in Tây Ninh in 1964, in period records. The names came off his own
  photograph, so reading them to him is fine — **saying which two, or who they were, or what
  they did, is not**, until he has answered cold. If he volunteers a rank, a job or a story
  against a name, that is independent corroboration.
  *Show VN-0035 zoomed in, and VN-0133, if you have a screen.*

- [ ] **8. The missing photographs.**
  *"Were there other pictures that didn't go in with the rest — another album, a box, a
  folder somewhere? Did you ever give any away?"*
  He says photographs are missing. The scan reconciliation shows the archive holds every
  frame the lab was given, numbered unbroken from E001 to E157 — so anything missing was
  never scanned. The gap is upstream of the scanner, and only he knows where to look.

- [ ] **9. The mountain, day to day.** *(VN-0044, VN-0059 if you have a screen)*
  *"How did you get up — helicopter? How long were your stints up there?"* And the boy of
  VN-0009: *"the kid that was with you all the time — what was his name? What became of
  him?"* *(ledger #16 — about 12, shot in the leg, married at 10, and still unnamed.)*

---

## Tier 2 — Needs the photograph in front of him

- [ ] **The guitarist — the most valuable unnamed man in the archive.**
  Show **VN-0005** (the Cholon pool) beside **VN-0003/VN-0007/VN-0008** (the guitar
  sessions): *"It'll come to you — who was the guitar player?"*
  The VN-0005 left man is someone Larry "knew really well" but cannot name, and he is the
  guitarist of the other three. **One name resolves four photographs at once.**
  *(The Japan hospital friend of VN-0093 is a separate unnamed man — don't merge them.)*

- [ ] **Which base was home?** — Show **VN-0136** (camp panorama), **VN-0117** (C-123 over
  the hooches), **VN-0017** (T 123 hooch). *"Where was this camp? How long did you live here
  vs. anywhere else?"*
  *Partly answered 2026-08-15: "T 123 my father says has to be their hooch" — his and Ron's.
  **The base's NAME is still the missing anchor for half the collection's geography.***

- [ ] **The pocket patch.** — Show **VN-0028**: *"What did the patch say?"*
  *The helicopter half of this question is spent — see the Answered record. Ask only about
  the patch. Unlocks the unit question (ledger #2): the remembered "118th AOD" against the
  118th Aviation Company "Thunderbirds."*

- [ ] **VN-0028's other people and things.** — *"Who is the young soldier under your arm?
  What was the equipment in the metal cabinet behind you? Whose Thompson is he holding?"*
  **VN-0029** still awaits its own look.

- [ ] **The ops van's neighbours.** — Show **VN-0011**: *"Who are the two flight controllers
  on the steps?"* And with **VN-0014** on the table: *"What did Weaver's pocket patch say?"*
  *Where the van stood is answered — see the Answered record. These two are what remain.*

- [ ] **Was that Bien Hoa burning?** — Show **VN-0074** and **VN-0078**. *"You photographed
  this fire twice from the air. What happened?"*
  *Ask the open half first and let him date it himself before offering the May '65 explosion.
  Unlocks a dateable documented event, and possibly the unit's home field.*

- [ ] **Can we watch your movie film together?** — One chapter at a time on the website
  (**VF-0001**–**VF-0005**, Footage page). Let him narrate; ask only *"Where is this? Who's
  holding the camera?"* The tree-lined boulevard in **VF-0005** may be his Saigon.
  Follow-ups: what camera did he carry, and **do the original 8mm reels still exist?**
  *Unlocks narration for all 22 minutes — places, dates, the aircraft drop in VF-0004 and its
  dark stretch. If the reels survived, a professional re-scan becomes possible.*

- [ ] **The Ginza day.** — Show **VN-0095**: *"Was the Ginza day a pass from the hospital?
  What do you remember about that restaurant — the sign, the entrance, the stairs?"*
  **Don't supply details.** If he spontaneously describes a giant beer-barrel doorway, that
  identifies Ketel's — see `research/places/ginza-heidelberg.md`.

---

## Tier 3 — Quick confirmations (fast yes/no over coffee)

- [ ] **The town** — VN-0055 ("CHERRY" bar sign): "Is this Tây Ninh, under the mountain?"
- [ ] **The monument square** — VN-0130: "Which town is this?"
- [ ] **The crash** — VN-0148: "Whose helicopter went down here? Did everyone get out?"
- [ ] **Saigon trips** — VN-0120 (City Hall), VN-0068 (Tết flowers): "What took you into
  Saigon — duty or passes? Were you there for Tết '65?"
- [ ] **The other pool frames** — VN-0075/VN-0083: "Same pool as the French one in Cholon?"
  *(VN-0004/VN-0005 are answered.)*
- [ ] **The beach medic** — VN-0021/VN-0022: "The medic from Nebraska who went out into the
  water — do you remember his name, or when it happened? Were you there that day? Was he
  Army, or a Navy man? Was it during your first weeks at Nha Trang in '64, or a later trip
  back?" *(ledger #14. A full sweep of the official casualty file — issue #61, 2026-08-16 —
  found NO Nebraska serviceman and NO medic drowned in Vietnam during his tour window. His
  answers decide which anchor to relax before re-searching. **Don't read him any of the
  near-miss names.**)*

---

## Tier 4 — Stories and people (no research agenda — pure memoir gold)

- [ ] **The guitar circle** — VN-0003/0007/0008: "Who could actually play? What did you sing?"
  *(Kahn and Ron Tototz named in VN-0003, 2026-08-13. The guitarist himself is the Tier 2
  question above.)*
- [ ] **The rocket launcher day** — VN-0006, which he took himself atop the mountain,
  ~June 1965: "What happened when it fired? Did it hit the crossroad? Who was the Australian
  captain? Tell me about Major Schwartzkoff — what was he like?" *(Just listen on the major —
  no name suggestions; see `research/people/major-schwartzkoff.md`.)*
- [ ] **The patrol and the prisoner** — VN-0023, when he's in the mood: "Tell me about that
  patrol — how was the prisoner captured? How did you all know he was Pathet Lao? Did you go
  on many patrols with Captain Kennedy?" *(ledger #17)*
- [ ] **Mike Patrick** — VN-0010: "How did you know Mike Patrick? What was he like? And who's
  the other American sitting on the rocks at the edge of the picture?" *(Ask open — he
  already said ranger / MACV special operations / "ghost.")*
- [ ] **Parr** — VN-0025: "Parr, from the Nha Trang days — do you remember his first name?
  Where was he from? Did you stay in touch?"
- [ ] **Rosie and the club** — "Which club was that — where was it? And how do you know Rosie
  made it to America — did you hear from her?" *(Could be a whole story.)*
- [ ] **Sgt. La Franceaous** — "You mentioned a Sergeant La Franceaous — where did you know
  him from? What did he do?"
- [ ] **The other officer at the Huey** — VN-0020: "The officer on the left next to Captain
  Guegler — it may come back to you. And what was Guegler's first name?" *(ledger #5)*
- [ ] **Rosethorn 007 crew** — VN-0016: "Besides Major Lewis and Captain Guegler, do you
  remember other pilots or crew on Rosethorn 007?" *(Open question only — see
  `research/people/major-lewis.md`.)*
- [ ] **PFC Zekeowski** — VN-0027: "How do you spell Zekeowski, best guess? What was his
  first name? What did he do?" *(Also asked in the page comments; no answer yet.)*
- [ ] **The battalion and the flight line neighbours** — with VN-0012 and VN-0020 on the
  table: "Do you remember which battalion your company belonged to? What other helicopter
  outfits flew out of Tan Son Nhut — how were their aircraft marked?" *(Open questions only —
  do **NOT** name any unit or describe any emblem to him; candidate readings live in
  `research/units/flight-following-1964-65.md` and `research/magnification/README.md`.)*
- [ ] **The python** — VN-0153: "Who caught it, and where were you?" *(He has already said
  they ate it and it was delicious. VN-0153 is uncataloged with no date, so anything he says
  about the day is the only thing that will ever date it.)*
- [ ] **Basic training** — "Where was basic training?" (Kennedy was shot a month in — "where
  were you when you heard?" is the way in.) And reconcile Chapman: "Did you know Sgt. Chapman
  from training AND Vietnam, or just over there?" *(ledger #8 — Chapman is in VN-0024 with
  Larry, in Vietnam, an E7.)*
- [ ] **The motorcycle days** — "Tell me about your motorcycle days in Inglewood — did you
  ever crash?" *(Newspapers show two: South Gate Press Sep 1, 1957 — his motorcycle hit a car
  at Firestone Blvd. at ~16 — and Daily Breeze Jul 10, 1959 — thrown to the pavement at
  Crenshaw and 120th at 18, Daniel Freeman Hospital, feared fractures, listed "good." **Let
  him tell it before showing the clippings**; the 1959 item prints "Larry B." so his telling
  also confirms it's him. See `research/people/hunnewell-family-newspapers.md`.)*
- [ ] **The mother and baby at the battery bank** — VN-0145, VN-0156: "Who were they? Did you
  ever learn what became of them?"
- [ ] **The T 122 family portrait** — VN-0155: "The ladies next door — laundry? cooking?
  names?"
- [ ] **The mascots** — VN-0017 and VN-0152: "Was there one Jones or two — the PFC working on
  the Huey (VN-0012, VN-0020) and the helicopter-pilot Jones with the monkey? And the black
  gibbon — whose was he?" *(The monkey is answered: Sarge, whom Ron hated.)*
- [ ] **The club nights** — VN-0030–0034: "How often did shows come through? Anyone you can
  name in the crowd?"
- [ ] **The Thompson** — VN-0082, VN-0084: "Was that your gun on your bunk? Ever have to use
  it?"
- [ ] **The woman in the red áo dài** — VN-0154: "Who is she? This one looks like it
  mattered."
- [ ] **The girl holding the camera** — VN-0151: "Did she take any of these pictures?"

---

## Hold for the right moment (not breakfast material)

- **VN-0157** — the wounded man aboard the helicopter. When he's ready, and only then:
  "Do you remember this man and this day?" His answer also decides whether the photo is ever
  shown publicly. Related: VN-0148 (the crash site).
- **The bathroom shooting** — **the full account arrived 2026-08-15**
  (`data/recollections/giscus-stories-c18035411.json`; timeline entry
  `data/timeline/1965-02-bathroom-shooting.json`): victim shot in the chest in the shower,
  the drunk gunman aimed at Larry, Sgt. Weaver (E5) responded, Air Force police took his
  statement, and he heard the shooter got 20 years hard labor in Okinawa. Remaining gentle
  follow-ups: "Did the man in the shower live? Do you remember the shooter's name, or the
  victim's? About what time of night was it?" *(The earlier family memory was of a knife —
  don't correct him either way. `data/recollections/2026-brief-bathroom-knife.json`. Court
  martial search: ledger #11.)*

---

## Answered — the record

Kept for provenance. Nothing here needs asking again; **open follow-ups have been promoted
into the tiers above**, and are noted here so the trail is readable.

### The four cold probes — telephone, 2026-09-01

All four were asked **cold**, with nothing from that day's document research supplied first.
Raw capture and analysis: `2026-09-01-phone-answers.md`. Fidelity assigned `transcribed` for
all four; the CBC answer is `paraphrase` (third-person voice).

- [X] **What was the camp for?** — *"The best place to have readios because it was high…
  could transmit 25 miles but with being on the mouttain and on the curvature of the Earth
  allow the signal to connect."* He named the mission and explained the physics himself. The
  RADIX Press order of battle, read hours earlier and never shown to him, prints the site's
  official mission as **"MISSION: RADIO RELAY"**. **This is the strongest corroboration of
  Larry's account the archive has produced.**
  `data/recollections/2026-09-01-phone-why-the-mountain.json`
- [X] **Did a camp ever call you while it was being attacked?** — **the probe was spent by
  him volunteering the answer to a different question.** Unasked, he gave the Đồng Xoài
  attack: ~16 defenders, "about 4000 enemy all at once at 4am," the man on the other radio
  "dying from shot in the stomach," and **"Gagne was with me and died, he was a french
  foreign Legionair."** Gagne appears nowhere else in the archive.
  *Tensions held open, not reconciled: a UTT/68th memoir has that camp's radio officer
  rescued alive; the published battle opened the night of 9 June 1965 and he says 4 a.m.*
  → **follow-up promoted to Tier 1 #2 (where was he sitting) and Tier 1 #1 (Gagne).**
- [X] **Who ran the camp?** — *"Special Forces ran the camp. Captain Kennedy was in Charge of
  the camp most of the time. But I really worked for 1st Cavalry"*. Upgrades Captain Kennedy
  from tentatively-identified to, in Larry's words, the man in charge. Period records name a
  different officer as detachment commander in the same window; **the difference stands, it
  is not reconciled.** "I really worked for 1st Cavalry" goes to ledger #2 / issue #10 and
  still sits against the division's arrival in country around September 1965.
  `data/recollections/2026-09-01-phone-who-ran-the-camp.json`
  → **follow-up promoted to Tier 1 #6.**
- [X] **What was the camp called?** — *"They called the camp The Mountain. The guys in my Unit
  in Saigon called it the mountain."* Also confirms in passing that the Saigon end of the net
  was his own unit. `data/recollections/2026-09-01-phone-the-mountain-name.json`
- [X] **The other boxing call signs** — *"Body Jab 42, Right Cross, Upper Cut, Might have been
  a Body Jab 41, 43, Major Schartkoff was in charge of them."* On 2026-08-23 this archive
  predicted the siblings — **Uppercut was on that written list** — and he produced it cold,
  with Right Cross and a 41/42/43 series supporting the hypothesis that the digits mark the
  station within a net. Format difference recorded and **not** corrected: a period memoir
  gives the Đồng Xoài camp radio as "55 Body Jab", number first, against his "Body Jab 42".
  `data/recollections/2026-09-01-phone-boxing-call-signs.json`
  *Residual, low priority: does he know which camps were 41 and 43?*
- [X] **The CBC documentary** — *"They were doing a documentary and they asked me some
  questions… They were there about two weeks filming… I believe it was done in '64 maybe
  around Christmas time."* (paraphrase)
  `data/recollections/2026-09-01-phone-cbc-crew.json`
  → **follow-ups promoted to Tier 1 #3 and #4.**
- [X] **The python** — VN-0153, "Did they eat it?" — *"My father said they did and it tasted
  delicious."* (paraphrase; `data/recollections/2026-09-01-phone-the-python.json`)
  → **follow-up in Tier 4.**

### Earlier sessions

- [X] **"Is this you?"** — **2026-08-17:** Larry confirmed **VN-0028** (name tape HUNNEWELL,
  arm around a Vietnamese soldier on the mountain) is him. With his earlier
  self-identifications in VN-0015 and VN-0022 (2026-08-15), the identity thread through the
  whole collection is anchored by his own word, not a machine reading of a name tape.
  → **follow-ups promoted to Tier 2.**
- [X] **"Who is your friend?"** — **2026-08-15:** the beach-table man of VN-0022 is **Ron
  Tototz** — *"Ron Tototz and I. This is at Beachhut #3 or 4 at Nha Trang"* — from Des
  Moines, Iowa; passed away about ten years ago; hated Sarge the monkey. The "WE…" name tape
  in VN-0014 resolved separately as **Sgt. Weaver**. *(ledger #9, #15)*
  → **the remaining unnamed man is Tier 2's guitarist.**
- [~] **The helicopter markings** — **ASKED 2026-08-23, NEGATIVE:** *"Doesn't recall what was
  on the helicopter."* He offered instead an Army-issue watch and **two M-60s on the
  helicopter door — actual machine guns.** The tail-emblem probe has been run once and
  returned nothing; the emblem readings stay withheld, but **don't expect a second asking to
  produce more.** *The pocket patch half was never answered — Tier 2.*
- [X] **Where the ops van stood** — **2026-08-23:** *"It was over in the property of **18th
  aviation**. They were huge. They had probably about 300 helicopters including sky cranes.
  **It was before the first cav aviation.**"* A unit that appears nowhere else in the archive,
  and a sequencing claim that would explain the remembered 1st Cavalry association without his
  having served in it. Also 2026-08-15: VN-0015 is Larry — *"This is me inside the radio van
  starting the night 12-hour shift alone"* — Weaver is an ex-Marine, and VN-0011 is the van's
  exterior: *"these two guys are flight controllers. I was a flight controller also."*
  → **follow-ups promoted to Tier 2.**
- [X] **Which hospital in Japan?** — **2026-08-13, unprompted:** *"I was at Camp Zama in Japan
  in Sugami Uro"* [Sagami-Ōno]. He was told only that research had a high-confidence name,
  not which one, and produced it himself. Unlocks the NPRC clinical-records request, filed by
  hospital. *(ledger #7)* → **follow-ups promoted to Tier 1 #5 and Tier 2.**
- [X] **The mountain radio room** — **2026-08-15** (VN-0059): *"This is my radio area with 3
  radios, single side band, fox mike x2… I was the only annex of it [Saigon center]."*
  → **follow-ups promoted to Tier 1 #9.**
- [X] **The beach** — **2026-08-15:** Nha Trang, beach hut #3 or #4 (VN-0021, VN-0022).
  → **the drowned-medic follow-up is in Tier 3.**
- [X] **The pool** — **2026-08-15** (VN-0004/VN-0005): *"French Swimming pool in cholon,
  Chinese district of Saigon."* → **the other pool frames are in Tier 3.**
- [X] **The monkey** — **2026-08-15:** Sarge, whom Ron hated, and "may have belong to Jones,
  the helicopter pilot." → **the gibbon and the two-Joneses question are in Tier 4.**
- [X] **"Su-ners"** — **ANSWERED 2026-08-23, and he said the word himself, unprompted:
  "They were called Sappers."** He added that there were sappers as young as ten. The probe
  is spent and the term is no longer withheld. *(The 2026-08-12 call had rendered it
  "su-ners"; if a specific attack can be matched, ledger work continues there.)*

### Housekeeping — all closed

- [X] **Service number** — answered by the DD-214 (photo from Mom, Aug 2026); recorded in the
  private archive and used on the SF-180. It contains **no 42** — so the family memory that
  "42 mattered to him" was about something else. **CONFIRMED 2026-08-13:** as the Body Jab 42
  comment was being written, Larry told his son directly that the camp call sign is why he
  uses that number. *The 42 mystery is closed; the number itself stays off the repo.*
- [X] **VA file number** — **answered Aug 2026**, recorded in `private/notes/`. *Note: the
  number as he recalls it differs by one digit from the number on the Oct 2015 VA letter —
  both are in the private notes, and **the letter's number goes on forms.*** The DD-214 has
  also turned up (transcription in `research/records-request/dd214-findings.md`); it does
  **not** name the Vietnam unit, only the last assignment in Japan. A Montana county recorder
  holds a certified copy if a cleaner one is ever needed. *Identifiers stay off the repo.*
- [X] **More slide boxes or prints?** — **Aug 2026 (family):** *"I don't think so. I scanned
  everything my father gave to me. The 8mm footage can be redone though"* — a
  higher-quality re-scan of the film is an open possibility. *(This is about what was
  **scanned**; whether photographs exist that were never handed over is Tier 1 #8.)*
- [X] **Who labeled the slides — you or the lab? Did any get flipped?** — **Aug 2026
  (family):** a friend who worked at Longs Drugs did the developing for free. *(Two scans are
  confirmed mirror-flipped: VN-0072, VN-0075.)*
