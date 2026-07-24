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

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export function getImageSrc(imgPath: string): string {
  return `${IMAGE_BASE_URL}${imgPath}`;
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
