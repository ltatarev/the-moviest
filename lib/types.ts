import type { RawWatchProviders, WatchRegions } from './watch';
import { Genres } from './tmdb';

export type EnvParam = string;

export type MovieType = {
  id: string;
  backdrop_path: string;
  poster_path: string;
  /** The English title of a film. */
  title?: string;
  /** The English name of a show. */
  name?: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  tagline: string;
  // Only present on the single-title endpoints.
  genres?: Array<{ id: number; name: Genres }>;
  // Only present on list endpoints (trending, discover).
  genre_ids?: Array<number>;
  vote_average?: number;
  /** Only on mixed lists, such as `trending/all`. */
  media_type?: ContentType | 'person';
  release_date?: string;
  first_air_date?: string;
};

export type ContentType = 'movie' | 'tv';

export type PersonType = {
  id: number;
  name: string;
  character?: string;
  job?: string;
  profile_path?: string | null;
};

/**
 * A single title as TMDB returns it, with `credits` and `similar` appended.
 * Movie-only and show-only keys both live here — only one set is ever filled.
 */
export type TitleResponseType = MovieType & {
  runtime?: number;
  episode_run_time?: Array<number>;
  number_of_seasons?: number;
  number_of_episodes?: number;
  networks?: Array<{ id: number; name: string }>;
  production_companies?: Array<{ id: number; name: string }>;
  created_by?: Array<{ id: number; name: string }>;
  budget?: number;
  revenue?: number;
  status?: string;
  original_language?: string;
  vote_count?: number;
  credits?: { cast?: Array<PersonType>; crew?: Array<PersonType> };
  similar?: { results?: Array<MovieType> };
  'watch/providers'?: RawWatchProviders;
};

export type CrewCreditType = { role: string; name: string };

export type FactType = { label: string; value: string };

/** Everything the detail page renders, already resolved and formatted. */
export type TitleDetailType = {
  id: string;
  type: ContentType;
  title: string;
  tagline: string;
  overview: string;
  posterPath: string | null;
  backdropPath: string | null;
  year: string;
  length: string;
  /** ISO date of the release or the first air date. Empty when TMDB has none. */
  releaseDate: string;
  /** Film runtime or episode runtime, in minutes. */
  runtimeMinutes: number | null;
  /** TV only. */
  seasons: number | null;
  /** TV only. */
  episodes: number | null;
  genres: Array<string>;
  /** Percentage, 0–100. Null when nobody has voted yet. */
  score: number | null;
  votes: number;
  cast: Array<PersonType>;
  crew: Array<CrewCreditType>;
  facts: Array<FactType>;
  similar: Array<MovieType>;
  /** Offers by region code. Only regions in WATCH_REGIONS that have offers. */
  watch: WatchRegions;
};
