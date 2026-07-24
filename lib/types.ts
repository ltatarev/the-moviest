import mongoose, { SortOrder } from 'mongoose';
import { Genres } from './tmdb';

export type EnvParam = string;

export type Sort = {
  [key: string]: SortOrder;
};

export type WatchlistQuery = {
  author_id?: string;
  id?: string;
  title?: object;
};

export type QueryParams = {
  authorId?: string;
  id?: string;
  title?: string;
  page?: string;
  sort?: 1 | -1;
};

type Author = {
  _id: mongoose.Types.ObjectId;
  username: string;
};

/**
 * A title as it was pinned to a watchlist or a review. `movieId` is the TMDB
 * id and is what links back to a detail page; `_id` is the subdocument's own
 * key. Older documents were written without either, hence the optionals.
 */
export type ListedMovieType = {
  _id?: string;
  movieId?: number;
  movieTitle?: string;
  moviePosterPath?: string;
};

export type WatchlistType = {
  _id: mongoose.Types.ObjectId;
  description: string;
  likes: number;
  title: string;
  author_id: Author;
  movies: Array<ListedMovieType>;
  // Serialised to an ISO string by the time a page sees it.
  createdAt: string;
  updatedAt: string;
};

export type ReviewType = {
  _id: mongoose.Types.ObjectId;
  reviewText: string;
  likes: number;
  title: string;
  author_id: Author;
  movie: ListedMovieType;
  rating: number;
  createdAt: string;
  updatedAt: string;
};

export type MovieType = {
  id: string;
  backdrop_path: string;
  poster_path: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  tagline: string;
  // Only present on the single-title endpoints.
  genres?: Array<{ id: number; name: Genres }>;
  // Only present on list endpoints (trending, discover).
  genre_ids?: Array<number>;
  vote_average?: number;
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
  genres: Array<string>;
  /** Percentage, 0–100. Null when nobody has voted yet. */
  score: number | null;
  votes: number;
  cast: Array<PersonType>;
  crew: Array<CrewCreditType>;
  facts: Array<FactType>;
  similar: Array<MovieType>;
};
