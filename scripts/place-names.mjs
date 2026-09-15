/**
 * Standard public spellings of place names, shared by scripts/validate-archive.mjs
 * (rendered name and title fields of each record) and scripts/check-published.mjs
 * (the built site). Rule, decided by his son 2026-09-15 (CLAUDE.md, "Place names"):
 * a public page names a place in its common English spelling, without Vietnamese
 * accents. The Vietnamese spelling renders only as the small `vietnameseName` line
 * (marked lang="vi"), and every other spelling — Larry's, his son's, the accented
 * form — is recorded in the place record's researchNotes, not on the page.
 *
 * Exempt, because they are someone's own words: recollection text, a drawing's
 * labels, and words inside quotation marks.
 *
 * Each `standard` is the family's choice. Every entry below was confirmed by his son on
 * 2026-09-15 (Tay Ninh, Pleiku and Kontum last, the rest with the rule itself). A place not listed here gets its public
 * name by asking his son, with a recommendation, before it is used anywhere public;
 * then add it here. Only known variants are listed: add one when a new spelling turns
 * up in a record, so it cannot drift onto a page.
 */
export const PLACE_NAMES = [
  {
    standard: 'Tan Son Nhut',
    variants: [
      'Tân Sơn Nhứt', 'Tân Sơn Nhất', 'Tan Son Nhat', 'Ton Son Nuht', 'Ton Son Nhut', 'Thom Son Nuht',
      'Thon Sohn Nuht', 'Ton Suhn Nhut', 'Tah Suhn Nhut', 'Thon Suhn Nut', 'Ton Suhn Knut', 'Tah San hut',
    ],
  },
  { standard: 'Nui Ba Den', variants: ['Núi Bà Đen', 'Nui Ba Din', 'Bui Ba Den'] },
  { standard: 'My Canh', variants: ['Mỹ Cảnh', 'Mỹ-Cảnh', 'MyChan', 'My Cahn'] },
  { standard: 'Qui Nhon', variants: ['Qui Nhơn', 'Quy Nhơn', 'Quy Nhon'] },
  { standard: 'Saigon', variants: ['Sài Gòn', 'Sai Gon'] },
  { standard: 'Cholon', variants: ['Chợ Lớn', 'Cho Lon'] },
  { standard: 'Tu Do Street', variants: ['Tudo Street', 'Tự Do'] },
  { standard: 'Tay Ninh', variants: ['Tây Ninh', 'Tay Nihn'] },
  { standard: 'Pleiku', variants: ['Pleikeu', 'Plây Ku'] },
  { standard: 'Kontum', variants: ['Kontom', 'Kon Tum'] },
];

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/[\s-]+/g, '[\\s-]+');

const PATTERNS = PLACE_NAMES.flatMap(({ standard, variants }) =>
  variants.map((variant) => ({
    standard,
    variant,
    re: new RegExp(`(?<!\\p{L})${escape(variant.normalize('NFC'))}(?!\\p{L})`, 'iu'),
  }))
);

/** Text with quoted passages removed: a quotation keeps its speaker's spelling. */
export const withoutQuotations = (text) =>
  text.replace(/“[^”]*”/g, ' ').replace(/"[^"]*"/g, ' ');

/** Every non-standard place spelling in `text` (quotations exempt), as {variant, standard}. */
export function nonStandardPlaceNames(text) {
  const t = withoutQuotations(String(text).normalize('NFC'));
  const found = [];
  for (const { standard, variant, re } of PATTERNS) {
    const m = t.match(re);
    if (m) found.push({ found: m[0], standard, variant });
  }
  return found;
}
