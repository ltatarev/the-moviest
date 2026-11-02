/**
 * The image proxy only ever fetches `https://image.tmdb.org/t/p` + one of
 * these paths, so it can't be turned into an open proxy.
 */
const TMDB_IMAGE_PATH = /^\/(w\d{2,4}|original)\/[A-Za-z0-9_-]+\.(jpg|png)$/;

export function isTmdbImagePath(path: unknown): path is string {
  return typeof path === 'string' && TMDB_IMAGE_PATH.test(path);
}

/** Client-side URL for a TMDB image routed through the studio proxy. */
export function studioImageUrl(
  filePath: string | null | undefined,
  size: 'w185' | 'w342' | 'w500' | 'w780' | 'w1280' = 'w780',
): string | null {
  if (!filePath) {
    return null;
  }

  return `/api/studio/image?p=${encodeURIComponent(`/${size}${filePath}`)}`;
}
