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

/** 161 → "2h 41m". */
export function formatRuntime(minutes?: number): string {
  if (!minutes) {
    return '';
  }

  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;

  return [hours && `${hours}h`, rest && `${rest}m`].filter(Boolean).join(' ');
}

/**
 * "2026-07-17" → "17 Jul 2026". Pinned to UTC so the server and the browser
 * never disagree about which day it is and trip up hydration.
 */
export function formatDate(date?: string): string {
  if (!date) {
    return '';
  }

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return '';
  }

  return parsed.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** 250000000 → "$250,000,000". Falsy amounts mean "TMDB does not know". */
export function formatCurrency(amount?: number): string {
  if (!amount) {
    return '';
  }

  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
}

export function formatCount(count?: number): string {
  if (!count) {
    return '';
  }

  return count.toLocaleString('en-US');
}

/** ISO 639-1 code → the language's English name, e.g. "en" → "English". */
export function formatLanguage(code?: string): string {
  if (!code) {
    return '';
  }

  try {
    return new Intl.DisplayNames(['en'], { type: 'language' }).of(code) ?? code;
  } catch {
    return code.toUpperCase();
  }
}

/** Pluralises a count for captions like "12 films" / "1 film". */
export function pluralize(count: number, singular: string, plural?: string) {
  return `${count} ${count === 1 ? singular : (plural ?? `${singular}s`)}`;
}

/** The first letters of a name, for avatars with no image behind them. */
export function getInitials(name?: string): string {
  if (!name) {
    return '?';
  }

  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}
