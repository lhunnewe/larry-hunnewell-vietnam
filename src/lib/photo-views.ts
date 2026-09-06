/**
 * Groupings for the /photos/ gallery (issue #131).
 *
 * Every function here is pure and reads only the catalog record itself:
 * `originalPath`, `location`, `people`, `sortDate`, `datePrecision`,
 * `cataloged`. Nothing from `data/photos/ai-observations/` and nothing from
 * `researchNotes` feeds a grouping — a photograph is placed under a location or
 * a person only because its record says so (CLAUDE.md rule 4). Headings are the
 * place and person records' own `name` fields, so Larry's spellings render as
 * he gave them (rule 6).
 *
 * Within a group, photographs stay in archive-number order. The by-date view is
 * the one exception: dated photographs order by `sortDate`, ties by number.
 */

/** The slice of a photo record these groupings depend on. */
export interface PhotoLike {
  id: string;
  data: {
    photoId: string;
    cataloged: boolean;
    originalPath?: string;
    location?: { id: string };
    people: { id: string }[];
    sortDate?: string;
    datePrecision: 'exact' | 'approximate' | 'unknown';
  };
}

/** A place or person record: only its id and display name matter here. */
export interface NamedRecord {
  id: string;
  data: { name: string };
}

export interface PhotoSection<P extends PhotoLike = PhotoLike> {
  /** Stable key for the section, e.g. a place id or `no-location`. */
  key: string;
  heading: string;
  /** Detail page for the heading, when the section is keyed on a record. */
  href?: string;
  items: P[];
  /** True for the "no value yet" bucket, so it can be styled as one. */
  isBucket?: boolean;
}

export const VIEW_KEYS = ['family', 'location', 'person', 'date', 'catalog'] as const;
export type ViewKey = (typeof VIEW_KEYS)[number];

export const DEFAULT_VIEW: ViewKey = 'family';

export function isViewKey(value: unknown): value is ViewKey {
  return typeof value === 'string' && (VIEW_KEYS as readonly string[]).includes(value);
}

/** Fixed collation, so the built page does not depend on the build machine's locale. */
const collator = new Intl.Collator('en');

const LEADING_PUNCTUATION = /^[^\p{L}\p{N}]+/u;

/**
 * Order records by name, ignoring leading quotation marks so that a name Larry
 * gave in quotes sorts by its letters. The heading itself is never changed.
 */
export function byRecordName(a: NamedRecord, b: NamedRecord): number {
  return collator.compare(
    a.data.name.replace(LEADING_PUNCTUATION, ''),
    b.data.name.replace(LEADING_PUNCTUATION, '')
  );
}

/**
 * A photograph counts as dated only when its record carries a `sortDate` and
 * says how precise it is. A `sortDate` with `datePrecision: "unknown"` is
 * treated as undated: the display must not claim more than the record does.
 * An `approximateDate` text without a `sortDate` (none today) is deliberately
 * undated too: the by-date view orders by `sortDate`, and cataloging sets both
 * together. The page's counts and the by-date grouping share this definition.
 */
export function isDated(photo: PhotoLike): boolean {
  return Boolean(photo.data.sortDate) && photo.data.datePrecision !== 'unknown';
}

/** Archive-number order, the order every group keeps unless stated otherwise. */
export function byPhotoId<P extends PhotoLike>(a: P, b: P): number {
  return a.data.photoId.localeCompare(b.data.photoId);
}

/**
 * The default view: the family's own sorting of the prints, taken from the
 * folder part of `originalPath`. Groups sort by folder name; a photo with no
 * `originalPath` (none today) goes in a bucket after them.
 */
export function groupByFamilySorting<P extends PhotoLike>(photos: P[]): PhotoSection<P>[] {
  const groups = new Map<string, P[]>();
  const ungrouped: P[] = [];
  for (const photo of [...photos].sort(byPhotoId)) {
    if (!photo.data.originalPath) {
      ungrouped.push(photo);
      continue;
    }
    const folder = photo.data.originalPath.split('/').slice(0, -1).join(' / ');
    if (!groups.has(folder)) groups.set(folder, []);
    groups.get(folder)!.push(photo);
  }
  const sections: PhotoSection<P>[] = [...groups.entries()]
    .sort((a, b) => collator.compare(a[0], b[0]))
    .map(([folder, items]) => ({ key: folder, heading: folder, items }));
  if (ungrouped.length > 0) {
    sections.push({ key: 'no-folder', heading: 'No family grouping', items: ungrouped, isBucket: true });
  }
  return sections;
}

/**
 * One section per place record that at least one photo's `location` field
 * names, ordered by the place's name, then a bucket for photos with no
 * location. A place with no photographs is simply absent.
 */
export function groupByLocation<P extends PhotoLike>(
  photos: P[],
  places: NamedRecord[],
  hrefFor: (placeId: string) => string
): PhotoSection<P>[] {
  const sorted = [...photos].sort(byPhotoId);
  const sections: PhotoSection<P>[] = [];
  for (const place of [...places].sort(byRecordName)) {
    const items = sorted.filter((p) => p.data.location?.id === place.id);
    if (items.length === 0) continue;
    sections.push({ key: place.id, heading: place.data.name, href: hrefFor(place.id), items });
  }
  const unplaced = sorted.filter((p) => !p.data.location);
  if (unplaced.length > 0) {
    sections.push({ key: 'no-location', heading: 'No location yet', items: unplaced, isBucket: true });
  }
  return sections;
}

/**
 * One section per person record named in at least one photo's `people` field,
 * ordered by the person's name, then a bucket for photos that name nobody. A
 * photo naming two people appears under both.
 */
export function groupByPerson<P extends PhotoLike>(
  photos: P[],
  people: NamedRecord[],
  hrefFor: (personId: string) => string
): PhotoSection<P>[] {
  const sorted = [...photos].sort(byPhotoId);
  const sections: PhotoSection<P>[] = [];
  for (const person of [...people].sort(byRecordName)) {
    const items = sorted.filter((p) => p.data.people.some((r) => r.id === person.id));
    if (items.length === 0) continue;
    sections.push({ key: person.id, heading: person.data.name, href: hrefFor(person.id), items });
  }
  const unnamed = sorted.filter((p) => p.data.people.length === 0);
  if (unnamed.length > 0) {
    sections.push({ key: 'no-person', heading: 'No one named yet', items: unnamed, isBucket: true });
  }
  return sections;
}

/**
 * Dated photographs first (exact, then approximate), each set in `sortDate`
 * order with archive number breaking ties, then everything `isDated` rejects
 * in archive-number order.
 */
export function groupByDate<P extends PhotoLike>(photos: P[]): PhotoSection<P>[] {
  const bySortDate = (a: P, b: P) =>
    (a.data.sortDate ?? '').localeCompare(b.data.sortDate ?? '') || byPhotoId(a, b);
  const dated = photos.filter(isDated);
  const exact = dated.filter((p) => p.data.datePrecision === 'exact').sort(bySortDate);
  const approximate = dated.filter((p) => p.data.datePrecision === 'approximate').sort(bySortDate);
  const unknown = photos.filter((p) => !isDated(p)).sort(byPhotoId);

  const sections: PhotoSection<P>[] = [];
  if (exact.length > 0) sections.push({ key: 'exact', heading: 'Dated', items: exact });
  if (approximate.length > 0) {
    sections.push({ key: 'approximate', heading: 'Approximately dated', items: approximate });
  }
  if (unknown.length > 0) {
    sections.push({ key: 'no-date', heading: 'Date unknown', items: unknown, isBucket: true });
  }
  return sections;
}

/** The working list: photographs not yet cataloged, then those that are. */
export function groupByCatalogState<P extends PhotoLike>(photos: P[]): PhotoSection<P>[] {
  const sorted = [...photos].sort(byPhotoId);
  const pending = sorted.filter((p) => !p.data.cataloged);
  const done = sorted.filter((p) => p.data.cataloged);
  const sections: PhotoSection<P>[] = [];
  if (pending.length > 0) sections.push({ key: 'pending', heading: 'Not yet cataloged', items: pending });
  if (done.length > 0) sections.push({ key: 'cataloged', heading: 'Cataloged', items: done });
  return sections;
}
