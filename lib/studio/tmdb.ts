import { getEnvString } from '@lib/env';
import { API_BASE_URL } from '@lib/tmdb';
import type {
  HeatmapData,
  HeatmapSeason,
  MediaType,
  Provider,
  Region,
  SearchResult,
  TitleDetails,
  TrendingItem,
  TrendingSource,
} from './types';

/**
 * Server-only TMDB access for the studio. Builds on the site's `lib/tmdb.ts`
 * (same base URL, same `TMDB_KEY`) without changing it. Never import this from
 * a client component: it reads the key.
 */

const CACHE_TTL_MS = 3 * 60 * 60 * 1000;
const MAX_CACHE_ENTRIES = 500;
const cache = new Map<string, { at: number; value: unknown }>();

export class TmdbError extends Error {
  constructor(public status: number) {
    super(`TMDB request failed with ${status}`);
  }
}

type Fetcher = typeof fetch;
let fetcher: Fetcher = (...args) => fetch(...args);

/** Tests swap the network out. */
export function setFetcherForTests(next: Fetcher | null) {
  fetcher = next ?? ((...args) => fetch(...args));
  cache.clear();
}

async function tmdbGet<T>(
  path: string,
  params: Record<string, string | number | undefined> = {},
): Promise<T> {
  const url = new URL(`${API_BASE_URL}${path}`);
  url.searchParams.set('api_key', getEnvString('TMDB_KEY'));
  url.searchParams.set('language', 'en-US');

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== '') {
      url.searchParams.set(key, String(value));
    }
  }

  const key = url.toString();
  const hit = cache.get(key);

  if (hit && Date.now() - hit.at < CACHE_TTL_MS) {
    return hit.value as T;
  }

  const response = await fetcher(key, {
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new TmdbError(response.status);
  }

  const value = (await response.json()) as T;

  if (cache.size >= MAX_CACHE_ENTRIES) {
    cache.delete(cache.keys().next().value as string);
  }

  cache.set(key, { at: Date.now(), value });

  return value;
}

/** Runs `task` over `items` with at most `limit` in flight, keeping order. */
export async function mapLimit<T, R>(
  items: T[],
  limit: number,
  task: (item: T) => Promise<R>,
): Promise<R[]> {
  const results = new Array<R>(items.length);
  let next = 0;

  async function worker() {
    while (next < items.length) {
      const index = next++;
      results[index] = await task(items[index]);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, worker),
  );

  return results;
}

const yearOf = (date?: string | null) =>
  date && date.length >= 4 ? date.slice(0, 4) : null;

/* ---------- search ---------- */

type RawListItem = {
  id: number;
  media_type?: string;
  title?: string;
  name?: string;
  original_title?: string;
  original_name?: string;
  release_date?: string;
  first_air_date?: string;
  poster_path?: string | null;
};

export async function searchTitles(
  query: string,
  media: MediaType | 'multi',
): Promise<SearchResult[]> {
  const data = await tmdbGet<{ results?: RawListItem[] }>(`/search/${media}`, {
    query,
    include_adult: 'false',
  });

  return (data.results ?? [])
    .map((item): SearchResult | null => {
      const itemMedia = media === 'multi' ? item.media_type : media;

      if (itemMedia !== 'movie' && itemMedia !== 'tv') {
        return null;
      }

      const title = item.title ?? item.name ?? '';
      const originalTitle = item.original_title ?? item.original_name ?? null;

      return {
        id: item.id,
        media: itemMedia,
        title,
        originalTitle:
          originalTitle && originalTitle !== title ? originalTitle : null,
        year: yearOf(item.release_date ?? item.first_air_date),
        posterPath: item.poster_path ?? null,
      };
    })
    .filter((item): item is SearchResult => item !== null && item.title !== '')
    .slice(0, 8);
}

/* ---------- providers ---------- */

type RawProviders = {
  results?: Record<
    string,
    {
      flatrate?: Array<{
        provider_id: number;
        provider_name: string;
        display_priority?: number;
      }>;
    }
  >;
};

/** Flatrate only, by TMDB display priority; empty when nothing is known. */
export function pickFlatrate(
  raw: RawProviders | undefined,
  region: Region,
): Provider[] {
  const flatrate = raw?.results?.[region]?.flatrate ?? [];

  return [...flatrate]
    .sort(
      (a, b) =>
        (a.display_priority ?? Number.MAX_SAFE_INTEGER) -
        (b.display_priority ?? Number.MAX_SAFE_INTEGER),
    )
    .map((provider) => ({
      id: provider.provider_id,
      name: provider.provider_name,
    }));
}

/* ---------- title details ---------- */

type RawDetails = {
  id: number;
  title?: string;
  name?: string;
  overview?: string;
  release_date?: string;
  first_air_date?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  vote_average?: number;
  vote_count?: number;
  genres?: Array<{ name: string }>;
  created_by?: Array<{ name: string }>;
  credits?: { crew?: Array<{ job?: string; name: string }> };
  'watch/providers'?: RawProviders;
};

export async function getTitleDetails(
  media: MediaType,
  id: number,
  region: Region,
): Promise<TitleDetails> {
  const raw = await tmdbGet<RawDetails>(`/${media}/${id}`, {
    append_to_response: 'credits,watch/providers',
  });

  const makers =
    media === 'movie'
      ? (raw.credits?.crew ?? [])
          .filter((person) => person.job === 'Director')
          .map((person) => person.name)
      : (raw.created_by ?? []).map((person) => person.name);

  const uniqueMakers = [...new Set(makers)].slice(0, 2);

  return {
    id: raw.id,
    media,
    title: raw.title ?? raw.name ?? '',
    year: yearOf(raw.release_date ?? raw.first_air_date),
    overview: raw.overview ?? '',
    posterPath: raw.poster_path ?? null,
    backdropPath: raw.backdrop_path ?? null,
    voteAverage:
      raw.vote_count && raw.vote_average
        ? Math.round(raw.vote_average * 10) / 10
        : null,
    voteCount: raw.vote_count ?? 0,
    maker: uniqueMakers.length ? uniqueMakers.join(' & ') : null,
    genres: (raw.genres ?? []).map((genre) => genre.name),
    providers: pickFlatrate(raw['watch/providers'], region),
  };
}

/* ---------- trending ---------- */

const NEW_WINDOW_DAYS = 30;

export function isRecentlyAired(
  firstAirDate: string | null | undefined,
  now: Date = new Date(),
): boolean {
  if (!firstAirDate) {
    return false;
  }

  const aired = new Date(`${firstAirDate}T00:00:00Z`).getTime();

  if (Number.isNaN(aired)) {
    return false;
  }

  const age = now.getTime() - aired;

  return age >= 0 && age <= NEW_WINDOW_DAYS * 24 * 60 * 60 * 1000;
}

/** `2026-10` → first and last day of that month, or null if malformed. */
export function monthRange(month: string): { from: string; to: string } | null {
  const match = /^(\d{4})-(0[1-9]|1[0-2])$/.exec(month);

  if (!match) {
    return null;
  }

  const year = Number(match[1]);
  const monthIndex = Number(match[2]);
  const lastDay = new Date(Date.UTC(year, monthIndex, 0)).getUTCDate();

  return {
    from: `${match[1]}-${match[2]}-01`,
    to: `${match[1]}-${match[2]}-${String(lastDay).padStart(2, '0')}`,
  };
}

async function toTrendingItem(
  item: {
    id: number;
    name?: string;
    first_air_date?: string;
    poster_path?: string | null;
  },
  region: Region,
): Promise<TrendingItem> {
  const providers = await tmdbGet<RawProviders>(
    `/tv/${item.id}/watch/providers`,
  );

  return {
    id: item.id,
    title: item.name ?? '',
    year: yearOf(item.first_air_date),
    posterPath: item.poster_path ?? null,
    firstAirDate: item.first_air_date || null,
    provider: pickFlatrate(providers, region)[0]?.name ?? null,
    isNew: isRecentlyAired(item.first_air_date),
  };
}

export async function getTrending(
  source: TrendingSource,
  region: Region,
  month?: string,
): Promise<TrendingItem[]> {
  let list: RawListItem[];

  if (source === 'week') {
    list =
      (await tmdbGet<{ results?: RawListItem[] }>('/trending/tv/week'))
        .results ?? [];
  } else if (source === 'popular') {
    list =
      (await tmdbGet<{ results?: RawListItem[] }>('/tv/popular')).results ?? [];
  } else {
    const range = month ? monthRange(month) : null;

    if (!range) {
      throw new TmdbError(400);
    }

    list =
      (
        await tmdbGet<{ results?: RawListItem[] }>('/discover/tv', {
          'first_air_date.gte': range.from,
          'first_air_date.lte': range.to,
          sort_by: 'popularity.desc',
          'vote_count.gte': 20,
          include_adult: 'false',
        })
      ).results ?? [];
  }

  return mapLimit(list.slice(0, 10), 4, (item) => toTrendingItem(item, region));
}

/** A hand-picked top 10 (ids in order) instead of a fetched one. */
export async function getTrendingByIds(
  ids: number[],
  region: Region,
): Promise<TrendingItem[]> {
  return mapLimit(ids.slice(0, 10), 4, async (id) => {
    const raw = await tmdbGet<RawDetails>(`/tv/${id}`);

    return toTrendingItem(
      {
        id: raw.id,
        name: raw.name,
        first_air_date: raw.first_air_date,
        poster_path: raw.poster_path,
      },
      region,
    );
  });
}

/* ---------- heatmap ---------- */

type RawShow = {
  id: number;
  name?: string;
  poster_path?: string | null;
  first_air_date?: string;
  last_air_date?: string;
  in_production?: boolean;
  seasons?: Array<{ season_number: number; episode_count?: number }>;
};

type RawSeason = {
  episodes?: Array<{
    episode_number: number;
    name?: string;
    air_date?: string | null;
    vote_average?: number;
    vote_count?: number;
  }>;
};

export async function getHeatmap(
  id: number,
  today: string = new Date().toISOString().slice(0, 10),
): Promise<HeatmapData> {
  const show = await tmdbGet<RawShow>(`/tv/${id}`);
  const seasonNumbers = (show.seasons ?? [])
    .filter(
      (season) => season.season_number > 0 && (season.episode_count ?? 0) > 0,
    )
    .map((season) => season.season_number)
    .sort((a, b) => a - b);

  const seasons = await mapLimit(seasonNumbers, 4, async (number) => {
    const raw = await tmdbGet<RawSeason>(`/tv/${id}/season/${number}`);
    const episodes = (raw.episodes ?? [])
      .filter((episode) => episode.air_date && episode.air_date <= today)
      .map((episode) => ({
        number: episode.episode_number,
        name: episode.name ?? '',
        vote: Math.round((episode.vote_average ?? 0) * 10) / 10,
        votes: episode.vote_count ?? 0,
      }))
      .sort((a, b) => a.number - b.number);

    return { number, episodes } satisfies HeatmapSeason;
  });

  return {
    show: {
      id: show.id,
      title: show.name ?? '',
      posterPath: show.poster_path ?? null,
      firstYear: yearOf(show.first_air_date),
      lastYear: yearOf(show.last_air_date),
      inProduction: Boolean(show.in_production),
    },
    seasons: seasons.filter((season) => season.episodes.length > 0),
  };
}
