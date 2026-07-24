import { getEnvString } from './env';
import type { MovieType } from './types';

export const API_BASE_URL = 'https://api.themoviedb.org/3';

export const TRENDING_URL = `${API_BASE_URL}/trending`;

type TV = 'tv';
type MOVIE = 'movie';

export function getTrendingEndpoint(type: TV | MOVIE): string {
  return `${TRENDING_URL}/${type}/week?api_key=${getEnvString('TMDB_KEY')}`;
}

/** One of TMDB's curated lists, e.g. `movie/now_playing` or `tv/popular`. */
export function getListEndpoint(type: TV | MOVIE, list: string): string {
  return (
    `${API_BASE_URL}/${type}/${list}?api_key=${getEnvString('TMDB_KEY')}` +
    '&language=en-US'
  );
}

/**
 * Fetches any list endpoint. A rail is decoration, not the point of the page,
 * so a failed request degrades to an empty one instead of a 500.
 */
export async function fetchResults(url: string): Promise<Array<MovieType>> {
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    console.error(
      `TMDB request failed: ${response.status} ${response.statusText}`,
    );

    return [];
  }

  const data = await response.json();

  return data.results ?? [];
}

/**
 * A title's full record. `append_to_response` folds the cast, the crew and the
 * "more like this" rail into the same round trip.
 */
export function getDetailEndpoint(type: TV | MOVIE, id: string | number) {
  return (
    `${API_BASE_URL}/${type}/${id}?api_key=${getEnvString('TMDB_KEY')}` +
    '&language=en-US&append_to_response=credits,similar'
  );
}

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export type ImageSize = 'w342' | 'w500' | 'w780' | 'w1280' | 'original';

/** Tiny inline gradient used as the blur placeholder for every remote image. */
export const BLUR_DATA_URL =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='12'%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%231b1235'/%3E%3Cstop offset='1' stop-color='%2337133a'/%3E%3C/linearGradient%3E%3Crect width='8' height='12' fill='url(%23g)'/%3E%3C/svg%3E";

/**
 * Null rather than a stand-in image when there is no path: the components draw
 * a gradient keyed to the title instead, which beats a generic placeholder.
 */
export function getImageSrc(
  imgPath?: string | null,
  size: ImageSize = 'original',
): string | null {
  if (!imgPath) {
    return null;
  }

  return `${IMAGE_BASE_URL}/${size}${imgPath}`;
}

/**
 * Poster paths saved alongside watchlists and reviews are inconsistent — some
 * are bare TMDB paths, some are absolute URLs at whatever size was current at
 * the time. Normalise both onto one size, and drop anything that is not TMDB:
 * next/image only has permission to optimise that host.
 */
export function getStoredImageSrc(
  imgPath?: string | null,
  size: ImageSize = 'w500',
): string | null {
  if (!imgPath) {
    return null;
  }

  if (!imgPath.startsWith('http')) {
    return getImageSrc(imgPath, size);
  }

  const path = imgPath.match(/\/t\/p\/[^/]+(\/.+)$/)?.[1];

  return path ? getImageSrc(path, size) : null;
}

/**
 * Poster-ish gradients, reused wherever an image is missing so empty tiles
 * still look deliberate. Picked by a stable hash so a given name or id always
 * lands on the same one.
 */
const TILE_GRADIENTS = [
  ['#7E2440', '#C9553F'],
  ['#1E3A5F', '#2E8BA8'],
  ['#3A1436', '#8A3FA0'],
  ['#432B12', '#C08A3E'],
  ['#1B3A2E', '#3F9B72'],
  ['#2A1445', '#6D4BC7'],
  ['#4A1220', '#C4455E'],
  ['#12283F', '#4A7FB5'],
  ['#3D2410', '#A5642B'],
  ['#241844', '#5B3BD6'],
];

export function getTileGradient(seed: string | number): string {
  const key = String(seed);
  const hash = [...key].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const [from, to] = TILE_GRADIENTS[hash % TILE_GRADIENTS.length];

  return `linear-gradient(150deg, ${from}, ${to})`;
}

/**
 * TMDB only sends `genre_ids` on list endpoints (trending, discover), so the
 * names have to be resolved locally. Movie and TV ids share one namespace.
 */
export const GENRE_NAMES: Record<number, string> = {
  12: 'Adventure',
  14: 'Fantasy',
  16: 'Animation',
  18: 'Drama',
  27: 'Horror',
  28: 'Action',
  35: 'Comedy',
  36: 'History',
  37: 'Western',
  53: 'Thriller',
  80: 'Crime',
  99: 'Documentary',
  878: 'Science Fiction',
  9648: 'Mystery',
  10402: 'Music',
  10749: 'Romance',
  10751: 'Family',
  10752: 'War',
  10759: 'Action & Adventure',
  10762: 'Kids',
  10763: 'News',
  10764: 'Reality',
  10765: 'Sci-Fi & Fantasy',
  10766: 'Soap',
  10767: 'Talk',
  10768: 'War & Politics',
  10770: 'TV Movie',
};

export function getGenreNames(
  ids: Array<number> = [],
  limit = 3,
): Array<string> {
  return ids
    .map((id) => GENRE_NAMES[id])
    .filter(Boolean)
    .slice(0, limit);
}

export type Genres =
  | 'Action'
  | 'Adventure'
  | 'Action & Adventure'
  | 'Animation'
  | 'Comedy'
  | 'Crime'
  | 'Documentary'
  | 'Drama'
  | 'Family'
  | 'Fantasy'
  | 'History'
  | 'Horror'
  | 'Kids'
  | 'Music'
  | 'Mystery'
  | 'Romance'
  | 'Sci-Fi & Fantasy'
  | 'Science Fiction'
  | 'TV Movie'
  | 'Thriller'
  | 'War'
  | 'War & Politics'
  | 'Western';
