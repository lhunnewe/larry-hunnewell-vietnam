# My Father in Vietnam

**The Vietnam service of Larry Dennis Hunnewell, 1964–1965.**

A family memoir and historical research archive: Larry's memories preserved exactly as given,
alongside photographs, military records, and archival research that test and contextualize them.
Published at <https://lhunnewe.github.io/larry-hunnewell-vietnam>.

## Structure

- `src/` — Astro site (layouts, components, pages)
- `data/` — structured historical records rendered by the site: photographs, people, places,
  timeline events, recollections, sources. Schemas in `src/content.config.ts`.
- `data/photos/originals/` — the archival photo scans (157), in the family's own sorting, never
  renamed or altered by hand
- `public/images/photos/` — generated web copies (gitignored; rebuilt by `npm run photos:build`,
  which also runs automatically before `dev` and `build`)
- `public/videos/` — cleaned web copies of the 8mm film footage (committed, unlike the photo
  derivatives: the raw 2009 captures live only on the NAS, which the GitHub Actions build can't
  reach; rebuilt by `node scripts/build-video-clips.mjs` with the NAS mounted)
- `research/` — working research notes and the open-questions ledger
- `docs/` — project documentation

## Principles

1. Larry's recollections are primary-source evidence. They are never silently altered or
   rewritten to match research findings.
2. Every important claim carries an evidence classification: confirmed, strongly supported,
   plausible, unverified recollection, or contradicted.
3. Unknown information is represented as unknown, never guessed.
4. Photograph IDs (`VN-0001`, …), film clip IDs (`VF-0001`, …), and public filenames are
   permanent once assigned.

## Development

```sh
npm install
npm run dev     # local dev server
npm run build   # static build to dist/
```

Deployment is automatic: pushes to `main` build and publish via GitHub Actions
(`.github/workflows/deploy.yml`). GitHub Pages must be set to "GitHub Actions" as its source in
the repository settings.
