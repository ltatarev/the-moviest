/**
 * How this web app relates to the Moviest iOS app. Search engines and AI
 * assistants read these strings, so they state the split plainly: the web app
 * is for browsing, and the tracker is the iPhone and iPad app.
 */

/** The Moviest app on the App Store. Same id as the landing page uses. */
export const APP_STORE_ID = '6797281738';

/** The app's page on the App Store. */
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;

/**
 * The link that opens a title in the app: `moviest://media/movie%3A603`.
 * The same shape as `toMediaLink` in the app (`src/common/links`).
 */
export function toAppMediaLink(type: 'movie' | 'tv', id: string | number) {
  return `moviest://media/${encodeURIComponent(`${type}:${id}`)}`;
}

/** The landing page of the iOS app. */
export const APP_PAGE = 'https://ltatarev.github.io/moviest/';

export const SITE_DESCRIPTION =
  'Browse films and TV shows: search, cast, trailers and where to watch. The web companion of Moviest, the free film and TV tracker for iPhone and iPad.';

export const SITE_NAME = 'The Moviest';

/**
 * The production origin, with no trailing slash. Canonical, Open Graph and
 * sitemap URLs must be absolute. Set NEXT_PUBLIC_SITE_URL to change it.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://the-moviest.vercel.app'
).replace(/\/+$/, '');

/** Shared fallback image for link previews. */
export const DEFAULT_OG_IMAGE = '/assets/logo.png';
