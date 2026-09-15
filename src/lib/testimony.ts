import type { CollectionEntry } from 'astro:content';

/**
 * How testimony is attributed on the page.
 *
 * Larry does not use a computer — his son types for him — so a caption must
 * never imply Larry wrote the words, and must never present someone else's
 * summary of what Larry said as a quotation of Larry. See the `fidelity`
 * comment in src/content.config.ts.
 */

export type Fidelity = 'verbatim' | 'transcribed' | 'paraphrase';

const HIS_WORDS = "Larry's recollection";
const HIS_OWN_WRITING = "Larry's own writing";
const VIA_SON = "Larry's account, as related by his son";
const VIA_FAMILY = "Larry's account, as related by his family";

/** Caption for a block of testimony, given how faithfully it was captured. */
export function attributionFor(fidelity?: Fidelity): string {
  switch (fidelity) {
    case 'paraphrase':
      return VIA_SON;
    case 'verbatim':
      return HIS_OWN_WRITING;
    // `transcribed` — his words, typed by his son as he spoke them — and the
    // unknown case both keep the plain caption: these are Larry's words.
    default:
      return HIS_WORDS;
  }
}

/**
 * The recollections that may render on a page Larry browses: every record
 * except those under a `hold`, in the order they were recorded (ties broken by
 * id, so a rebuild never reshuffles the page).
 */
export function shownRecollections(
  recollections: CollectionEntry<'recollections'>[]
): CollectionEntry<'recollections'>[] {
  return recollections
    .filter((r) => !r.data.hold)
    .sort((a, b) => a.data.recorded.localeCompare(b.data.recorded) || a.id.localeCompare(b.id));
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/**
 * The one line of provenance shown under a recollection: when it was
 * recorded. The full provenance (accounts, discussion links, how the call was
 * captured) stays on the record for the archive and is not rendered.
 */
export function recordedLine(recorded: string): string {
  const m = recorded.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return `Recorded ${recorded}`;
  return `Recorded ${Number(m[3])} ${MONTHS[Number(m[2]) - 1]} ${m[1]}`;
}

const normalize = (text: string) => text.replace(/\s+/g, ' ').trim().toLowerCase();

/** Below this, a containment match is coincidence rather than a copy. */
const MIN_OVERLAP = 40;

/**
 * Text that refers to Larry in the third person is somebody else's sentence,
 * whatever the source of the facts in it — the voice test from the archive's
 * evidence method. Larry speaking about other people ("he shot at the guy")
 * is not caught: only references to Larry himself are.
 */
const SOMEONE_ELSES_VOICE =
  /\b(larry|my father|his son)\b|\bhe (remembers|recalls|recalled|describes|described|volunteered|personally remembers)\b|\bhis (duties|organization|recollection)\b/i;

/**
 * Recover the fidelity of testimony that was copied onto the record it
 * concerns, by finding the recollection it came from.
 *
 * Conservative on purpose: if any matching record is a paraphrase, the whole
 * block is attributed as one.
 */
export function fidelityOfCopiedText(
  text: string | undefined,
  recollections: CollectionEntry<'recollections'>[]
): Fidelity | undefined {
  if (!text) return undefined;
  const needle = normalize(text);
  if (needle.length === 0) return undefined;

  let found: Fidelity | undefined;
  for (const rec of recollections) {
    const hay = normalize(rec.data.text);
    const matches =
      hay === needle ||
      (hay.length >= MIN_OVERLAP && needle.includes(hay)) ||
      (needle.length >= MIN_OVERLAP && hay.includes(needle));
    if (!matches) continue;

    const fidelity = rec.data.fidelity as Fidelity;
    if (fidelity === 'paraphrase') return 'paraphrase';
    found ??= fidelity;
  }
  return found;
}

/**
 * The caption for testimony copied onto a record, resolved as well as it can
 * be: from the recollection it came from when one exists, and otherwise from
 * the voice of the text itself.
 *
 * The fallback matters because some of this testimony predates the
 * recollections collection and has no record behind it — and several of those
 * fields hold a family summary written in the third person, which must not
 * render as a quotation of Larry.
 */
export function attributionForCopiedText(
  text: string | undefined,
  recollections: CollectionEntry<'recollections'>[]
): string {
  const known = fidelityOfCopiedText(text, recollections);
  if (known) return attributionFor(known);
  // No record behind it. Attribute to the family rather than to Larry when the
  // words are plainly somebody else's; "family" because without a record we
  // cannot say who wrote it.
  if (text && SOMEONE_ELSES_VOICE.test(text)) return VIA_FAMILY;
  return HIS_WORDS;
}
