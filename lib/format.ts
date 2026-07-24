import { MovieType } from './types';

/** TMDB puts the display name under a different key for movies and shows. */
export function getTitle(item: MovieType): string {
  return item.original_title || item.original_name || 'Untitled';
}

export function getYear(item: MovieType): string {
  const date = item.release_date || item.first_air_date;

  return date ? date.slice(0, 4) : '';
}

export function formatRating(vote?: number): string | null {
  if (!vote) {
    return null;
  }

  return vote.toFixed(1);
}

export function truncate(text: string | undefined, max: number): string {
  if (!text) {
    return '';
  }

  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}
