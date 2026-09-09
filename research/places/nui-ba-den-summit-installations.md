# What was on the summit of Núi Bà Đen while Larry was there

**Question:** #62 (ledger #16). First pass **2026-09-09**.
**Provenance:** open-source desk search by Claude Opus 5 in session with Larry's son. No new
testimony taken.

Larry, on VN-0009 (2026-08-15), describing the French fort:

> "About 5 Airforce guys were putting in **a radar?** It had a **search antenna that rotated**
> that was built up in the boulders."

His own question mark is on the record and is doing real work — see the service tension below.

---

## The finding that matters most is a trap to avoid

**The famous Núi Bà Đen radio relay postdates Larry, and the archive must not date him against it.**

Wikipedia's Black Virgin Mountain article, citing Kelley, Sinsigalli and the 25th Infantry
Division historical record:

> "In **May 1964** the mountain top was assaulted by the Special Forces **3rd MIKE Force** and
> the peak was held by American forces with the **121st Signal Battalion** establishing a radio
> relay station, callsign **Granite Romeo Tango**, there in **February 1966**."

Larry was medevaced out of Vietnam around late August / early September 1965. **Granite Romeo
Tango was established roughly five months after he left.**

This matters because issue #62's own search plan proposes reading "histories of the later,
well-documented Núi Bà Đen signal site (the 1966+ relay station is heavily documented; its
histories often recap earlier installations)." That is reasonable advice and it is also the
likeliest way to go wrong here: those histories are abundant, they are about a different
installation, and a date lifted from one of them would silently move Larry's mountain period by
half a year in the wrong direction. **Anything sourced from Granite Romeo Tango material dates
the 1966 station, not what Larry watched being built.**

## The corollary, which is the opposite of a disappointment

The summit was seized in **May 1964**. The documented relay arrives in **February 1966**. That
is a gap of about **twenty-one months**, and Larry was on the mountain inside it.

**His account may therefore be among the earliest eyewitness descriptions of equipment being
installed on that summit** — and VN-0009 / VN-0059 photographs of a pre-relay installation.
That raises the evidential value of the frames rather than lowering it, and it means the
absence of documentation is partly expected: the well-kept records begin when the signal
battalion arrives.

## A tension in the service attribution, recorded and not resolved

Larry says **Air Force**. The unit most often named by veterans for the summit is the **372nd
Radio Research Unit**, out of Sobe, Okinawa — "Radio Research Unit" being the standard cover
designation for **Army Security Agency** SIGINT units in Vietnam, not an Air Force organisation.

Three readings, none preferred on present evidence:

1. He saw USAF personnel, and they are simply not in the accessible accounts (a small
   installation team of five would leave little trace).
2. He saw ASA/RRU men and read them as Air Force — plausible at a joint site where a small
   technical team in unfamiliar uniform is doing unfamiliar work.
3. Both were present at different times, and his memory has merged them.

**Do not put any of this to him as a leading question.** The interview probe should ask what the
men wore and what they said they were doing, not "were they Army?"

## Negatives, with their scope

- **No USAF radar site on Núi Bà Đen is documented for 1964–65** in accessible open sources.
  USAF radar-squadron histories and the SAGE/radar-station listings surface Monkey Mountain,
  Pleiku, Đông Hà and similar; none names Núi Bà Đen in this period.
- **No TACAN on Núi Bà Đen is documented for 1964–65.** Searched by mountain name, by "Black
  Virgin", and by Tây Ninh. A rotating search antenna is at least as consistent with a navaid
  or an early relay as with a search radar, so this was worth testing; it returns nothing.
- **Combat Skyspot is ruled out on date.** The USAF MSQ-77 radar bombing programme is the
  obvious "rotating antenna on a mountain" candidate for Tây Ninh, and it began in **March
  1966** — after Larry left, and after Granite Romeo Tango. Not his installation.

## Blocked, and this is the resume point

The two official histories that would settle the 1964–65 summit question could not be retrieved:

- **CMH Pub 90-11**, *Vietnam Studies: Division-Level Communications 1962–1973*
- **Rienzi**, *Vietnam Studies: Communications-Electronics 1962–1970* (CMH Pub 90-8)

`history.army.mil` returns **HTTP 403 to `curl`, including with a browser user-agent** — the
block is not user-agent based. Both volumes are freely readable in a browser, and both index
signal sites by name and date, so **a browser session or a library copy is the next step, and it
is a short one**: search each for "Ba Den" and read the surrounding paragraphs.

Also untried and worth more than the web: **AFHRA unit histories** for III Corps radar and
tactical control detachments, 1964–65, as issue #62 originally proposed. Nothing in this pass
touches them.

## What this does to the dating hope

Issue #62 opened on the premise that a USAF installation would **date Larry's mountain period**,
because "USAF histories date such work to the month." That premise is intact but unproven — and
this pass has established that the *easily reachable* documentation is about the wrong
installation. Until a 1964–65 source is found, **the mountain period cannot be dated from the
radar, and no date should be inferred from Granite Romeo Tango.**


---

## Second pass, same day: both official Army signal histories read in full — NEGATIVE

**2026-09-09, browser session.** The block recorded above was resolved and the resume point
is now closed rather than merely named.

### Correcting the block, because the earlier note was half wrong

The first pass reported `history.army.mil` as 403-blocking `curl`. Partly true, partly a wrong
URL:

- `history.army.mil/html/books/090/90-8/CMH_Pub_90-8.pdf` is a **404** — that path does not
  exist, and CMH has restructured the site. So has `books/Vietnam/Comm-Elect/index.htm`.
- The **correct** catalog path is `.../Publications/catalog/90-9-1.pdf` (Communications-
  Electronics) and `.../catalog/90-11.pdf` (Division-Level Communications) — and **those do
  return 403 to `curl`, with or without a browser user-agent.** The block is real; the first
  URL tried was also wrong. Both facts belong on the record.
- **The way through is neither**: a complete HTML mirror of both volumes exists at
  `webdoc.sub.gwdg.de/ebook/p/2005/CMH_2/www.army.mil/cmh-pg/books/vietnam/{comm-el,divlevcom}/`
  and serves 200 to plain `curl`. Chapters are `ch1.htm`–`ch13.htm` and `ch01.htm`–`ch13.htm`
  respectively. **Use the mirror; it is greppable and needs no browser at all.**

### What the two volumes say about Núi Bà Đen

Both volumes were downloaded complete and stripped to text — **562,699 characters** — and
searched. Every occurrence, in full:

| Volume / ch. | Date it describes | Content |
|---|---|---|
| Div-Level ch03 | **June 1966** | Photo caption: *"NUI BA DEN, JUNE 1966. Home of Granite Romeo Tango."* |
| Div-Level ch03 | 1966 | Granite Romeo Tango is **Company C, 121st Signal Battalion, 1st Infantry Division** — **eight men**, providing VHF relay for the 121st and FM retransmission for the division; also relayed for the 25th Inf Div, 173rd Abn Bde and Special Forces |
| Div-Level ch03 | by **end of March 1966** | 125th Signal Bn (25th Inf Div) relayed through Núi Bà Đen via the 121st — "the first of many informal equipment-sharing arrangements" |
| Div-Level ch04 | 1966+ | Automatic FM retransmission station on the summit; position fortified, "the enemy held all but the summit… but he seemed satisfied to leave the position alone, and even shared a waterhole on the mountain with station personnel" |
| Div-Level ch05 | 1969–70 | Ground relays on Núi Bà Đen and Núi Bà Rá (11th ACR / 595th Sig Co) |
| Comm-Elect ch09 | **13–14 May 1968** | The attack: 25th Inf Div signal site plus ~15 men of 1st Signal Brigade; 23 US killed, 3 wounded, 1 missing |
| Comm-Elect ch12 | early 1970 | 11th ACR voice retransmission through the summit site during Cambodia |
| Comm-Elect ch13 | 13 May 1968 | PFC Thomas M. Torma, 86th Signal Bn, Silver Star in that attack |

**Every single mention in both official volumes is 1966 or later. There is not one reference to
Núi Bà Đen in 1964 or 1965 in either book.**

### What that settles

The resume point named in the first pass is **closed, and it is a negative**: the two
authoritative Army signal histories contain nothing about anything on that summit during
Larry's time. His installation is not in the Army signal record.

That is consistent with all three readings of the service tension above and eliminates none of
them — but it does remove the possibility that the answer was sitting unread in the obvious
book. **What survives as untried is the same as before: AFHRA unit histories for III Corps
radar and tactical control detachments, 1964–65.**

A small refinement to the date, worth noting: Wikipedia gives **February 1966** for the
establishment of Granite Romeo Tango; the official history's own photo caption reads **June
1966**. Both are comfortably after Larry, so nothing here turns on it, but the archive should
not quote "February 1966" as though the official history said it.
