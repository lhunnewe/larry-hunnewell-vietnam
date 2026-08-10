# Design: giscus comments so Larry can add memories on photo pages

**Date:** 2026-08-09
**Issue:** [#4 — Integrate giscus comments so Larry can add memories directly on pages](https://github.com/lhunnewe/larry-hunnewell-vietnam/issues/4)
**Status:** Approved by owner in brainstorming session

## Purpose

Give Larry (age 86, basic computer skills) a way to open a photo page, type what he
remembers, and see it appear immediately — no Git, Markdown, or PR knowledge. Comments
are GitHub Discussions under the hood, which the planned export job (#5) will later
convert into `data/recollections/` records.

## Decisions already made

- **giscus over alternatives.** The founding brief chose GitHub Discussions + giscus.
  A no-login custom form (serverless endpoint + spam handling) is explicitly plan B,
  only if the account approach fails with Larry in practice.
- **Larry will have a GitHub account**, created and maintained by family, kept signed
  in on his own device. One-time setup: sign in, check "remember this device," complete
  the one-time giscus OAuth authorization, bookmark the site. Fallback: family posts on
  his behalf (dictation); the export pipeline treats both identically.
- **Discussion mapping: `specific` term = archive ID** (e.g. `VN-0042`), not pathname.
  Rationale: discussions survive URL changes (custom domain, restructured paths), and
  the export job can key comments straight back to `data/photos/VN-####.json`.
  Pathname mapping was rejected (orphans threads on any URL move); og:title mapping was
  rejected (titles change as cataloging fills them in).
- **Photo detail pages first.** Places/people/timeline pages come later per the issue,
  reusing the same component with their own stable terms (place/person slug). Out of
  scope for this build.

## GitHub-side setup

| Step | Who | How |
|------|-----|-----|
| Enable Discussions on the repo | Claude | **Done** (`has_discussions=true`, verified live) |
| Install the giscus app on the repo | Owner (browser-only) | github.com/apps/giscus → Install → select `larry-hunnewell-vietnam` |
| Create discussion category **"Memories"**, format **Announcement** | Owner (browser-only) | Repo → Discussions → categories → New category |
| Fetch `repoId` + `categoryId`, bake into site config | Claude | GraphQL query after the above |

Announcement format matters: only maintainers and the giscus app can open threads, so
the discussion list stays one-thread-per-photo with no drive-by topics. Anyone (i.e.
Larry) can still comment and reply within a thread.

Known values: repo `lhunnewe/larry-hunnewell-vietnam`, `repoId: R_kgDOTzvwHQ`.
`categoryId` is obtainable only after the category is created.

## Site-side components

### `src/lib/giscus.ts` (new)

Exports one config object: `repo`, `repoId`, `category`, `categoryId`. Single place to
touch on repo rename or category change; lets later page types adopt the embed as a
one-liner. `categoryId` starts as a placeholder; the build is not blocked by it, but
the embed will not function until it is filled (giscus fails silently to an error box —
acceptable for the hours between site deploy and category creation).

### `src/components/MemoryBox.astro` (new)

Props: `term: string` (the archive ID or, later, another stable slug).

Renders, in order:

1. A large-type explainer block headed **"Share what you remember"**, written in plain
   language for Larry: type in the box below, press the button that says
   **Comment** — and the line "If it asks you to sign in, stop and call the family;
   don't try to make an account." Explainer body text at least 1.15× the site body
   size; heading per the existing `h2` scale.
2. The giscus `<script>` embed with:
   - `data-repo`, `data-repo-id`, `data-category`, `data-category-id` from `giscus.ts`
   - `data-mapping="specific"`, `data-term={term}`
   - `data-input-position="top"` (comment box above old comments — Larry never scrolls
     past history to find where to type)
   - `data-reactions-enabled="1"`, `data-theme="light"` (matches paper aesthetic),
     `data-lang="en"`, `data-strict="1"` (exact term matching), no lazy loading
   - The script tag carries Astro's `is:inline` directive so it is emitted verbatim,
     not bundled.
   - Known limitation: the giscus iframe renders its own type at ~14px and cannot be
     restyled without a custom theme. Accepted mitigation: browser zoom on Larry's
     device. Revisit a custom giscus CSS theme if zoom proves insufficient for him —
     legibility, not aesthetics, is the trigger.
3. A `<noscript>` fallback: "Comments need JavaScript. Ask the family for help turning
   it on."

### `src/pages/photos/[id].astro` (edit)

Add `<MemoryBox term={d.photoId} />` at the bottom of every photo page, after the
photo record — cataloged or not (uncataloged pages are where memories are most needed).

## Error handling

- **giscus script fails to load / category missing:** giscus renders its own error box;
  our explainer text still tells Larry what the section is for. No custom retry logic.
- **JS disabled:** `<noscript>` message.
- **Session dropped:** covered by the explainer's "call the family" line (human
  fallback, not code).

## Testing

1. `npm run build` passes with the component on all 157 photo pages.
2. After owner completes browser steps and IDs are baked in: post a test comment on one
   photo page, verify a discussion titled `VN-####` appears in the Memories category,
   verify the comment renders on the page, then delete the test comment **and the
   test discussion** (so issue #5's exporter never sees an empty artifact thread).
3. Visual check of the explainer type sizes against the existing layout.

## Out of scope (tracked elsewhere)

- Export of comments into `data/recollections/` — issue #5.
- Embeds on places/people/timeline pages — later phase of issue #4.
- Custom giscus CSS theme — revisit if the built-in light theme clashes or its type
  size proves illegible for Larry even with browser zoom.
