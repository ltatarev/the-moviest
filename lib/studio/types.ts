/** Shapes shared by the studio API routes and the studio client. */

export type MediaType = 'movie' | 'tv';

export type SearchResult = {
  id: number;
  media: MediaType;
  title: string;
  originalTitle: string | null;
  year: string | null;
  posterPath: string | null;
};

export type Provider = {
  id: number;
  name: string;
};

export type TitleDetails = {
  id: number;
  media: MediaType;
  title: string;
  year: string | null;
  overview: string;
  posterPath: string | null;
  backdropPath: string | null;
  voteAverage: number | null;
  voteCount: number;
  /** Director for films; creators for TV (at most two, joined with " & "). */
  maker: string | null;
  genres: string[];
  /** Flatrate providers in the requested region, by TMDB display priority. */
  providers: Provider[];
};

export type TrendingSource = 'week' | 'popular' | 'new';

export type TrendingItem = {
  id: number;
  title: string;
  year: string | null;
  posterPath: string | null;
  firstAirDate: string | null;
  provider: string | null;
  isNew: boolean;
};

export type HeatmapEpisode = {
  number: number;
  name: string;
  vote: number;
  votes: number;
};

export type HeatmapSeason = {
  number: number;
  episodes: HeatmapEpisode[];
};

export type HeatmapData = {
  show: {
    id: number;
    title: string;
    posterPath: string | null;
    firstYear: string | null;
    lastYear: string | null;
    inProduction: boolean;
  };
  seasons: HeatmapSeason[];
};

export const REGIONS = ['DE', 'AT', 'CH', 'US', 'GB'] as const;
export type Region = (typeof REGIONS)[number];

export function isRegion(value: unknown): value is Region {
  return REGIONS.includes(value as Region);
}
