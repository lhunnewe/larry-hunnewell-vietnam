/** Prefix an absolute site path with the configured base (GitHub Pages subpath). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const trimmed = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${trimmed}${path}`;
}
