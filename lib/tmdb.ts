import { getEnvString } from './env';

export const API_BASE_URL = 'https://api.themoviedb.org/3';

export const DISCOVER_URL = `${API_BASE_URL}/discover`;
export const TRENDING_URL = `${API_BASE_URL}/trending`;

type TV = 'tv';
type MOVIE = 'movie';

export function getDiscoverEndpoint(type: TV | MOVIE): string {
  return `${DISCOVER_URL}/${type}?api_key=${getEnvString('TMDB_KEY')}`;
}

export function getTrendingEndpoint(type: TV | MOVIE): string {
  return `${TRENDING_URL}/${type}/week?api_key=${getEnvString('TMDB_KEY')}`;
}

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export type ImageSize = 'w342' | 'w500' | 'w780' | 'w1280' | 'original';

export const IMAGE_FALLBACK = '/assets/placeholder.png';

/** Tiny inline gradient used as the blur placeholder for every remote image. */
export const BLUR_DATA_URL =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='12'%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%231b1235'/%3E%3Cstop offset='1' stop-color='%2337133a'/%3E%3C/linearGradient%3E%3Crect width='8' height='12' fill='url(%23g)'/%3E%3C/svg%3E";

export function getImageSrc(
  imgPath?: string | null,
  size: ImageSize = 'original',
): string {
  if (!imgPath) {
    return IMAGE_FALLBACK;
  }

  return `${IMAGE_BASE_URL}/${size}${imgPath}`;
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

export const GENRE_EMOJIS = {
  Action: '🚗',
  Adventure: '🗺️',
  'Action & Adventure': '🗺️',
  Animation: '🤖',
  Comedy: '😂',
  Crime: '🦹',
  Documentary: '👨‍💼',
  Drama: '🎭',
  Family: '👪',
  Fantasy: '🧝',
  History: '🏛️',
  Horror: '🧟',
  Kids: '🕹️',
  Music: '🎶',
  Mystery: '🕵️',
  Romance: '💞',
  'Sci-Fi & Fantasy': '🧝',
  'Science Fiction': '🦸',
  'TV Movie': '🎥',
  Thriller: '🔪',
  War: '⚔️',
  'War & Politics': '⚔️',
  Western: '🤠',
};

const emojis = [
  '️🧡',
  '💛',
  '💚',
  '💙',
  '💜',
  '🖤',
  '🎵',
  '🎶',
  '📝',
  '🔍',
  '📼',
  '📷',
  '📸',
  '📹',
  '🎥',
  '📽',
  '🎞',
  '💎',
  '🔮',
  '🎨',
  '🎬',
  '🎤',
  '🎧',
  '🎼',
  '💫',
  '⭐️',
  '🌟',
  '✨',
  '🌺',
  '🌸',
  '🌙',
  '🥰',
];

export function randomEmoji() {
  const len = emojis.length;
  const index = Math.floor(Math.random() * len);

  return emojis[index];
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
