# The same-name hypothesis for the KIA misreport — tested and negative

**Question:** #9 (and ledger #1). Parent file: `kia-misreport-stars-stripes.md`.
**Date of search:** 2026-09-09.
**Provenance:** desk search of the National Archives DCAS-derived casualty lists, run by
Claude Opus 5 in session with Larry's son. No new testimony was taken; nothing here comes
from Larry.

## Why this search, and why now

Larry's own account contains a hedge that had never been tested. Speaking on 2026-09-02
(`data/recollections/giscus-stories-c18259364.json`), describing seeing his name at Camp Zama:

> "In the first 3-4 days I saw the name in the KIA list and went straight to the chaplin in the
> hospital in Camp Zama. I told him I was KIA and I was still alive. **I doubt if there was
> somebody with the same name.**"

That last sentence is a falsifiable claim, and it guards the most benign explanation the
archive has for the whole episode: that the list was correct about *somebody* and Larry read
his own name into a near-match. If a soldier with a name resembling Hunnewell died in the
right window, the misreport needs no mechanism at all — it is a reading error, and Sgt Lowery
is exonerated by default.

Nobody had checked. The parent file records that the free casualty-database side was
deliberately deferred while paid-archive time was being spent: *"Everything on the
AAD/Coffelt side is free and will still be there in October."* It was still deferred.

## What was searched — the complete national roll

The National Archives publishes `U.S. Military Fatal Casualties of the Vietnam War` as
alphabetical PDFs by home state of record, DCAS-derived, covering 6/8/1956–5/28/2006.
There is no single national file; the union of the state files **is** the national roll.

All available files were downloaded and converted to text:

```sh
for s in al ak az ar ca co ct de dc fl ga hi id il in ia ks ky la me md ma mi mn ms mo mt \
         ne nv nh nj nm ny nc nd oh ok or pa ri sc sd tn tx ut vt va wa wv wi wy \
         pr gu vi as mp; do
  curl -f -o "$s.pdf" \
    "https://www.archives.gov/files/research/military/vietnam-war/casualty-lists/$s-alpha.pdf"
done
for f in *.pdf; do pdftotext -layout "$f" "${f%.pdf}.txt"; done
```

**Corpus check:** 202,942 lines across 55 files, containing **59,577** date-bearing casualty
rows — consistent with the ~58,220 names on the Wall plus header and continuation rows. The
corpus is complete, not a sample.

**One gap, recorded:** `mp-alpha.pdf` (Northern Mariana Islands) returns 404 and does not
exist. The Marianas were a UN Trust Territory under U.S. administration in this period and
its residents were not U.S. citizens subject to the draft; the risk this hides a Hunnewell is
negligible, but the search covers 54 reporting jurisdictions, not 55.

## Result: no Hunnewell, and nothing that could be misread as one

Three passes, progressively broader.

**1. Direct variants** — `HUNNEWELL`, `HUNNEWEL`, `HUNEWELL`, `HUNIWELL`, `HUNNIWELL`,
`HUNNYWELL`, `HUNWELL`, `HONEYWELL`, `HONEWELL`, `HONNEWELL`:

> **Zero matches in the entire corpus.**

**2. The alphabetical neighbourhood.** Every distinct surname in the `HUM`–`HUR` range,
nationally — the span a printed list would place Hunnewell in:

HUMBERT · HUMBERTO · HUMBLE · HUME · HUMES · HUMM · HUMMEL · HUMMINGBIRD · HUMPHERY ·
HUMPHRES · HUMPHREY · HUMPHREYS · HUMPHRIES · HUNDLEY · HUNDT · **HUNEYCUTT** · HUNLEY ·
**HUNNICUTT** · HUNSBARGER · HUNSICKER · HUNSINGER · HUNSLEY · HUNT · HUNTER · HUNTINGTON ·
HUNTLEY · HUNTOON · HUNTZINGER · HUOT · HUPE · HUPP · HURD · HURDLE · HURIANEK · HURKMANS ·
HURLBERT · HURLBUT · HURLE · HURLEBAUS · HURLEY · HURLIHE · HURLOCK · HURNEY · HURRELL ·
HURRY · HURSE · HURST · HURSTON · HURT · HURTA · HURTADO · HURTAULT

The two closest are **HUNNICUTT** (Jason David, USMC PFC, Petaluma CA, d. 19690607) and
**HUNEYCUTT** (Charles, USAF MAJ, Charlotte NC, d. 19670922). Both are years past Larry's
window and neither resolves to *Hunnewell* on a printed page.

**3. Every surname in the corpus ending `-WELL`** — the guard against a name recognised by its
tail rather than its head:

BAKEWELL · BARNWELL · BIRDWELL · BLACKWELL · BOTHWELL · BOUTWELL · BRAMWELL · BRASWELL ·
BROADWELL · BROCKWELL · BURCHWELL · CALDWELL · CANTWELL · CARDWELL · CARSWELL · CHURCHWELL ·
CORNWELL · CRESWELL · CRISWELL · CROMWELL · CROPWELL · CROSWELL · CROTWELL · FARAWELL ·
FAREWELL · FREDWELL · GOODWELL · GREENWELL · HALLOWELL · HARTWELL · HOLLOWELL · HOPEWELL ·
MARKWELL · MCDOWELL · PLAINWELL · ROCKWELL · SHOTWELL · SPEEDWELL · SPREWELL · STILLWELL ·
STILWELL · STOCKWELL · TAZEWELL · TREADWELL · WARDWELL · WHITWELL

Nearest phonetic neighbours: HALLOWELL, HOLLOWELL, GREENWELL, CORNWELL. None is a candidate.

**Line-wrapping ruled out.** The PDF layout wraps long names onto a following line, so a
`HUN-` / `NEWELL` split was a real risk. All 16 corpus occurrences of `NEWELL` were read with
their preceding line: every one is a genuine NEWELL surname, a given name (`LEIGH NEWELL
FERRELL`, `APPLEGATE NEWELL F SR`), or an Iowa/South Dakota/West Virginia town named Newell in
the home-of-record column. None is a wrapped Hunnewell.

## What this establishes, and what it does not

**Establishes — `strongly-supported`:** No U.S. military fatal casualty of the Vietnam War,
across the whole 1956–2006 span and all 54 reporting jurisdictions, bore the surname
Hunnewell or any spelling that could be confused with it. **Larry's hedge was correct, and it
is now evidence rather than intuition.**

**Does not establish** that Larry saw what he remembers seeing. This search cannot reach the
document itself. The lists are of *fatal* casualties as finally adjudicated — a man reported
KIA in error and corrected days later never enters DCAS at all, which is precisely Larry's
case. Absence here is fully consistent with his account and does nothing to weaken it.

**Does not exhaust the near-name space either.** A *Stars and Stripes* casualty list of the
period carried wounded and missing alongside dead. A similarly-named man who was wounded, or
briefly listed missing, would not appear in DCAS. That remains open — but it is a narrower
opening than the one just closed.

## What it does to the surviving hypotheses

The archive has held two explanations for the misreport, never weighed against each other:

| Hypothesis | Status after 2026-09-09 |
|---|---|
| **Same-name confusion** — the list was right about another man | **Weakened hard.** No such man exists in the fatal-casualty roll. Survives only in the narrow wounded/missing form above. |
| **A false report was generated about Larry** — his own inference, hedged twice: *"Somebody up there, probably Sgt Lowery, probably reported me KIA"* | **Now the leading hypothesis by elimination**, not by new positive evidence. See #12, and `data/people/sgt-lowry.json`. |

That shift should be stated carefully. Nothing found today is evidence *for* Lowery. A
hypothesis that wins by elimination is still owed its own proof, and the mechanism remains
Larry's own hedged inference. What changed is that the comfortable alternative no longer has
a candidate behind it.

## Bearing on the paid-archive clock

NewspaperArchive access ends **2026-09-17**. This result sharpens what that time is for: the
remaining paid work should look for **Larry's own name in a casualty list**, not for a
near-name to explain it away. The parent file's paused sweep — nine candidate casualty lists
read by keyword but never visually — is the right resume point, and keyword absence still
proves nothing there because the lists are images.

## Reproduction

The 19 MB PDF corpus is not committed. The recipe above rebuilds it in about two minutes; the
greps are described in this file's three passes. Re-running is cheap and the source is stable.
