import { fetchResults, getDiscoverEndpoint } from './tmdb';
import type { MovieType } from './types';

/** The birthdays that "This month" looks for, in years. */
export const ANNIVERSARY_YEARS = [10, 20, 25] as const;

/** Votes a film needs, so the card names a film people know. */
const MIN_VOTES = 1000;

export type Anniversary = {
  years: number;
  film: MovieType;
};

/** "2016-11-01" and "2016-11-30": this calendar month, `years` ago, in UTC. */
export function monthYearsAgo(
  today: Date,
  years: number,
): { from: string; to: string } {
  const year = today.getUTCFullYear() - years;
  const month = today.getUTCMonth();
  const last = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const mm = String(month + 1).padStart(2, '0');

  return {
    from: `${year}-${mm}-01`,
    to: `${year}-${mm}-${String(last).padStart(2, '0')}`,
  };
}

/** The TMDB parameters for the most-voted films of one month. */
export function anniversaryParams(today: Date, years: number): URLSearchParams {
  const { from, to } = monthYearsAgo(today, years);

  return new URLSearchParams({
    include_adult: 'false',
    language: 'en-US',
    sort_by: 'vote_count.desc',
    'primary_release_date.gte': from,
    'primary_release_date.lte': to,
    'vote_count.gte': String(MIN_VOTES),
  });
}

/**
 * The best-known film of this month 10, 20 and 25 years ago. A year with no
 * film over the vote floor is left out.
 */
export async function fetchAnniversaries(
  today: Date,
): Promise<Array<Anniversary>> {
  const lists = await Promise.all(
    ANNIVERSARY_YEARS.map((years) =>
      fetchResults(
        getDiscoverEndpoint('movie', anniversaryParams(today, years)),
      ),
    ),
  );

  return ANNIVERSARY_YEARS.flatMap((years, i) => {
    const film = lists[i][0];

    return film ? [{ years, film }] : [];
  });
}
