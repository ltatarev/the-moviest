import { API_BASE_URL, fetchResults, getListEndpoint } from './tmdb';
import { getEnvString } from './env';
import type { ContentType, MovieType } from './types';
import { DEFAULT_WATCH_REGION, type WatchRegion } from './watch';

/**
 * The Discover sections that depend on the region: what is in cinemas and
 * what streams on a service. The server renders the default region. The
 * browser asks `/api/discover/regional` for any other one.
 */

/** The services Discover offers as chips, in this order, by TMDB name. */
const SERVICES = [
  { names: ['Netflix'], label: 'Netflix' },
  { names: ['Amazon Prime Video'], label: 'Prime Video' },
  { names: ['Apple TV', 'Apple TV Plus'], label: 'Apple TV' },
  { names: ['Disney Plus'], label: 'Disney+' },
  { names: ['HBO Max', 'Max'], label: 'HBO Max' },
] as const;

export type Service = { id: number; label: string };

export type RegionalData = {
  region: WatchRegion;
  inCinemas: Array<MovieType>;
  services: Array<Service>;
  /** The service on show. Null when the region has none of the services. */
  service: number | null;
  /** Films and shows on that service, with `media_type` set. */
  streaming: Array<MovieType>;
};

const CINEMA_COUNT = 10;
const STREAMING_COUNT = 8;
/** A floor that keeps a service's long tail of unrated titles out. */
const STREAMING_MIN_VOTES = 100;

type RawProvider = { provider_id: number; provider_name: string };

/** The services from `SERVICES` that the region has, in `SERVICES` order. */
export function pickServices(providers: Array<RawProvider>): Array<Service> {
  return SERVICES.flatMap((service) => {
    const match = providers.find((provider) =>
      (service.names as ReadonlyArray<string>).includes(provider.provider_name),
    );

    return match ? [{ id: match.provider_id, label: service.label }] : [];
  });
}

async function fetchServices(region: WatchRegion): Promise<Array<Service>> {
  const response = await fetch(
    `${API_BASE_URL}/watch/providers/tv?api_key=${getEnvString('TMDB_KEY')}&watch_region=${region}`,
  );

  if (!response.ok) {
    console.error(`TMDB providers failed: ${response.status}`);

    return [];
  }

  const data = (await response.json()) as { results?: Array<RawProvider> };

  return pickServices(data.results ?? []);
}

function streamingEndpoint(
  type: ContentType,
  region: WatchRegion,
  service: number,
): string {
  const params = new URLSearchParams({
    api_key: getEnvString('TMDB_KEY'),
    language: 'en-US',
    sort_by: 'popularity.desc',
    include_adult: 'false',
    watch_region: region,
    with_watch_providers: String(service),
    with_watch_monetization_types: 'flatrate',
    'vote_count.gte': String(STREAMING_MIN_VOTES),
  });

  return `${API_BASE_URL}/discover/${type}?${params}`;
}

/** Shows and films, one of each in turn, so neither fills the row. */
export function interleave(
  shows: Array<MovieType>,
  films: Array<MovieType>,
  count: number,
): Array<MovieType> {
  const result: Array<MovieType> = [];

  for (let i = 0; result.length < count; i += 1) {
    if (i >= shows.length && i >= films.length) {
      break;
    }

    if (shows[i]) {
      result.push({ ...shows[i], media_type: 'tv' });
    }

    if (films[i] && result.length < count) {
      result.push({ ...films[i], media_type: 'movie' });
    }
  }

  return result;
}

async function fetchStreaming(
  region: WatchRegion,
  service: number,
): Promise<Array<MovieType>> {
  const [shows, films] = await Promise.all([
    fetchResults(streamingEndpoint('tv', region, service)),
    fetchResults(streamingEndpoint('movie', region, service)),
  ]);

  return interleave(shows, films, STREAMING_COUNT);
}

/**
 * Everything the regional sections show. `service` picks the chip; an id the
 * region does not have falls back to its first service.
 */
export async function fetchRegionalData(
  region: WatchRegion = DEFAULT_WATCH_REGION,
  service?: number,
): Promise<RegionalData> {
  const [inCinemas, services] = await Promise.all([
    fetchResults(`${getListEndpoint('movie', 'now_playing')}&region=${region}`),
    fetchServices(region),
  ]);
  const chosen =
    services.find((item) => item.id === service)?.id ?? services[0]?.id;
  const streaming = chosen ? await fetchStreaming(region, chosen) : [];

  return {
    region,
    inCinemas: inCinemas.slice(0, CINEMA_COUNT),
    services,
    service: chosen ?? null,
    streaming,
  };
}
