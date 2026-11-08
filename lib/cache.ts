import type { ServerResponse } from 'node:http';

/**
 * Cache header for public server-rendered pages.
 * The Vercel CDN keeps a page for 5 minutes and serves a stale copy for up to
 * 1 day while it renders a new copy. Repeated requests do not run the function.
 */
export const PUBLIC_PAGE_CACHE =
  'public, max-age=0, s-maxage=300, stale-while-revalidate=86400';

export function setPublicPageCache(res: ServerResponse): void {
  res.setHeader('Cache-Control', PUBLIC_PAGE_CACHE);
}
