import type { CollectionEntry } from 'astro:content';

/**
 * How testimony is attributed on the page.
 *
 * Larry does not use a computer — his son types for him — so a caption must
 * never imply Larry wrote the words, and must never present his son's summary
 * of what Larry said as a quotation of Larry. See the `fidelity` comment in
 * src/content.config.ts.
 */

export type Fidelity = 'verbatim' | 'transcribed' | 'paraphrase';

/** Caption for a block of testimony, given how faithfully it was captured. */
export function attributionFor(fidelity?: Fidelity): string {
  switch (fidelity) {
    case 'paraphrase':
      return "Larry's account, as related by his son";
    case 'verbatim':
      return "Larry's own writing";
    // `transcribed` — his words, typed by his son as he spoke them — and the
    // unknown case both keep the plain caption: these are Larry's words.
    default:
      return "Larry's recollection";
  }
}

const normalize = (text: string) => text.replace(/\s+/g, ' ').trim().toLowerCase();

/** Below this, a containment match is coincidence rather than a copy. */
const MIN_OVERLAP = 40;

/**
 * Recover the fidelity of testimony that was copied onto the record it
 * concerns, by finding the recollection it came from.
 *
 * Copying testimony onto its subject drops the fidelity that qualified it, so
 * a paraphrase can end up rendering as a quotation. This restores the
 * qualification at render time. The durable fix is to render from the
 * recollection itself and stop copying the text at all.
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
