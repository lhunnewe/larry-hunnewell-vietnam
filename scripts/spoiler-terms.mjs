/**
 * Shared by scripts/validate-archive.mjs (rendered fields of each record) and
 * scripts/check-published.mjs (the built site itself). One list, so a probe
 * added for one check is enforced by both.
 */

/**
 * Terms that must never reach a field rendered on the public site. These are
 * interview probes: they only work if the detail is not supplied to Larry
 * first. See research/interviews/breakfast-questions.md ("don't prime him").
 * Add a term here when a new probe is written.
 */
export const SPOILER_TERMS = [
  // (The Ginza probe is spent too: asked in 2026-08-23 without prompting, Larry
  // described a "hoffbraugh" sign and no beer barrel — see research/places/ginza-heidelberg.md.)
  // (The helicopter/explosion probe is spent: Larry volunteered "sappers"
  // unprompted on 2026-08-23, so those terms are no longer withheld.)
  'two-friends split',
  // The tail-emblem probe: he is shown VN-0012 and asked what his unit painted
  // on its aircraft, so no reading of the emblem may appear on a page he reads
  // (research/magnification/README.md, breakfast question #3)
  'thunderbird',
  'lightning bolt',
  '...control',
  // The Australian captain — a lead to verify, not an established frame
  'aattv',
  'australian army training',
  // The van follow-ups (2026-09-13): he is asked cold who commanded his unit and
  // whether it had a name or number of its own, so neither the printed detachment
  // nor its commander may appear (research/units/18th-aod-stars-and-stripes-1964.md).
  // ' 18th aod' has a leading space so Larry's own "118th AOD" does not trip it.
  ' 18th aod',
  'aviation operating',
  'air operations det',
  'flight operations center',
  'william d. phillips',
  'major phillips',
  'maj. phillips',
  // The interview apparatus itself: he must not learn a numbered question list
  // exists, or that he is being worked through one
  'breakfast question',
];
