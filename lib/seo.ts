/** Canonical base URL for the site. Use https and single host (www or non-www). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.trigital.in";

export function canonicalUrl(pathname: string): string {
  const path = pathname === "/" ? "" : pathname;
  return path ? `${SITE_URL}${path}` : `${SITE_URL}/`;
}
