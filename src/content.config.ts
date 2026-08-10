import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Evidence classification used across the archive.
 * Every important historical claim carries one of these levels.
 * See /research for how each level is defined.
 */
export const CONFIDENCE_LEVELS = [
  'confirmed',
  'strongly-supported',
  'plausible',
  'unverified-recollection',
  'contradicted',
] as const;

const confidence = z.enum(CONFIDENCE_LEVELS);

/** A citation pointer into the sources collection, or free text until one exists. */
const sourceRefs = z.array(z.string()).default([]);

const photos = defineCollection({
  loader: glob({ pattern: '*.json', base: './data/photos' }),
  schema: z.object({
    /** Permanent archival ID, e.g. VN-0001. Matches the filename. */
    photoId: z.string().regex(/^VN-\d{4}$/),
    /** Original archival filename, never renamed. */
    originalFilename: z.string().optional(),
    /**
     * Path of the original scan relative to data/photos/originals/,
     * forward slashes. The leading folders are the family's own sorting
     * of the prints and are preserved as catalog information.
     */
    originalPath: z.string().optional(),
    /** Whether this record has been through cataloging (title, date, place, memories). */
    cataloged: z.boolean().default(false),
    title: z.string(),
    approximateDate: z.string().optional(),
    /** Sortable date for timeline placement, set during cataloging. */
    sortDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .optional(),
    datePrecision: z.enum(['exact', 'approximate', 'unknown']).default('unknown'),
    location: reference('places').optional(),
    people: z.array(reference('people')).default([]),
    units: z.array(z.string()).default([]),
    description: z.string().optional(),
    /** Larry's own words about this photograph. Never edited. */
    larrysRecollection: z.string().optional(),
    researchNotes: z.string().optional(),
    confidence: confidence,
    relatedPhotos: z.array(reference('photos')).default([]),
    relatedEvents: z.array(reference('timeline')).default([]),
    sources: sourceRefs,
  }),
});

const people = defineCollection({
  loader: glob({ pattern: '*.json', base: './data/people' }),
  schema: z.object({
    name: z.string(),
    /** Alternate spellings or phonetic renderings, preserved exactly. */
    aliases: z.array(z.string()).default([]),
    role: z.string().optional(),
    status: z.enum(['identified', 'unresolved']),
    summary: z.string(),
    larrysRecollection: z.string().optional(),
    researchNotes: z.string().optional(),
    confidence: confidence,
    relatedPlaces: z.array(reference('places')).default([]),
    sources: sourceRefs,
  }),
});

const places = defineCollection({
  loader: glob({ pattern: '*.json', base: './data/places' }),
  schema: z.object({
    name: z.string(),
    alternateNames: z.array(z.string()).default([]),
    vietnameseName: z.string().optional(),
    /** Only set when the geographic identification itself is settled. */
    coordinates: z.object({ lat: z.number(), lng: z.number() }).optional(),
    summary: z.string(),
    larrysRecollection: z.string().optional(),
    researchNotes: z.string().optional(),
    /** Confidence that Larry was associated with this place as described. */
    confidence: confidence,
    relatedPeople: z.array(reference('people')).default([]),
    sources: sourceRefs,
  }),
});

const timeline = defineCollection({
  loader: glob({ pattern: '*.json', base: './data/timeline' }),
  schema: z.object({
    title: z.string(),
    /** ISO-ish date used only for ordering, e.g. "1964-09-01". */
    sortDate: z.string(),
    /** Human-readable date exactly as it should appear. */
    displayDate: z.string(),
    datePrecision: z.enum(['exact', 'approximate', 'unknown']).default('approximate'),
    /** Span end for events covering a period, same format as sortDate. */
    endDate: z.string().optional(),
    category: z.enum([
      'larry-movement',
      'larry-recollection',
      'photo',
      'unit-event',
      'war-event',
      'research-discovery',
    ]),
    description: z.string(),
    larrysRecollection: z.string().optional(),
    researchNotes: z.string().optional(),
    confidence: confidence,
    relatedPlaces: z.array(reference('places')).default([]),
    relatedPeople: z.array(reference('people')).default([]),
    relatedPhotos: z.array(reference('photos')).default([]),
    sources: sourceRefs,
  }),
});

const recollections = defineCollection({
  loader: glob({ pattern: '*.json', base: './data/recollections' }),
  schema: z.object({
    person: reference('people'),
    /** When the recollection was recorded, not when the event happened. */
    recorded: z.string(),
    /** How the recollection was captured (interview, giscus comment, etc.). */
    provenance: z.string(),
    /** The recollection as given. Never silently altered. */
    text: z.string(),
    /** Whether `text` is verbatim or a family paraphrase awaiting direct capture. */
    fidelity: z.enum(['verbatim', 'paraphrase']),
    researchNotes: z.string().optional(),
    relatedPhotos: z.array(reference('photos')).default([]),
    relatedPlaces: z.array(reference('places')).default([]),
    relatedPeople: z.array(reference('people')).default([]),
  }),
});

const sources = defineCollection({
  loader: glob({ pattern: '*.json', base: './data/sources' }),
  schema: z.object({
    title: z.string(),
    type: z.enum([
      'official-record',
      'archival-document',
      'newspaper',
      'map',
      'photograph',
      'oral-history',
      'unit-history',
      'secondary-history',
      'database',
      'other',
    ]),
    citation: z.string(),
    url: z.string().url().optional(),
    accessed: z.string().optional(),
    notes: z.string().optional(),
  }),
});

export const collections = { photos, people, places, timeline, recollections, sources };
