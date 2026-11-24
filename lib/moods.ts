import type { ContentType } from './types';

/**
 * The moods of the Moviest app, for the web.
 *
 * Copied from the app on 2026-11-24:
 * - `Moviest/src/modules/search/const.ts` (ids, seasons, tuning numbers)
 * - `Moviest/src/modules/search/utils/moods.ts` (the catalog requests)
 * - `Moviest/src/modules/tmdb/const.ts` (keyword ids)
 * - `Moviest/i18n/en_EN.json` → `search.moods` (labels)
 *
 * A mood name must mean the same titles on the web and in the app. When the
 * app changes a mood, copy the change here and update `moods.test.ts`.
 *
 * "Comfort rewatch" is not here: it reads the library on the device.
 */

/** TMDB genre ids. Movie and TV ids share one namespace. */
const GENRE = {
  ACTION: 28,
  ACTION_ADVENTURE_TV: 10759,
  ADVENTURE: 12,
  ANIMATION: 16,
  COMEDY: 35,
  CRIME: 80,
  DRAMA: 18,
  FAMILY: 10751,
  FANTASY: 14,
  HORROR: 27,
  KIDS_TV: 10762,
  MYSTERY: 9648,
  SCI_FI: 878,
  SCI_FI_FANTASY_TV: 10765,
  TALK_TV: 10767,
  THRILLER: 53,
  WAR: 10752,
  WAR_POLITICS_TV: 10768,
} as const;

/** TMDB keyword ids, as the app pins them. */
export const KEYWORD = {
  ALTERNATE_REALITY: [175629, 33465, 245157],
  BASED_ON_TRUE_STORY: [9672],
  GHOST: [162846],
  HEIST: [10051],
  MIND_BENDING: [362567, 374835],
  MULTIVERSE: [336874, 243230],
  NONLINEAR_TIMELINE: [157171],
  PLOT_TWIST: [275311, 208757],
  POST_APOCALYPTIC: [4458, 359337],
  SIMULATED_REALITY: [3972, 4563],
  SURREAL: [9887, 231173],
  TIME_LOOP: [10854],
  TWIST_ENDING: [326438],
  UNRELIABLE_NARRATOR: [174089],
  VAMPIRE: [3133],
  WITCH: [616],
  ZOMBIE: [12377],
} as const;

/** The tuning numbers of the app. They decide what a mood feels like. */
export const TUNING = {
  SHORT_RUNTIME: 100,
  LONG_RUNTIME: 140,
  MIN_VOTE_COUNT: 400,
  WELL_KNOWN_VOTE_COUNT: 800,
  KEYWORD_VOTE_COUNT: 150,
  SHORT_SHARP_MIN_RUNTIME: 70,
  SHORT_SHARP_MAX_RUNTIME: 95,
  SHORT_SHARP_MIN_RATING: 7,
  MIND_BENDING_MIN_RATING: 7,
  COZY_MIN_RATING: 7.5,
  COZY_MOVIE_MIN_RATING: 6.8,
  COZY_TV_VOTE_COUNT: 150,
  TV_VOTE_COUNT: 300,
  TV_KEYWORD_VOTE_COUNT: 50,
  UNSEEN_MIN_RATING: 7,
  UNSEEN_MIN_VOTE_COUNT: 50,
  UNSEEN_MAX_VOTE_COUNT: 500,
} as const;

type Sort = 'popularity.desc' | 'vote_average.desc';

/** One TMDB discover request. Each field maps to one discover parameter. */
export type MoodRequest = {
  mediaType: ContentType;
  sortBy: Sort;
  /** All of these genres (AND). */
  genreIds?: ReadonlyArray<number>;
  /** Any of these genres (OR). Ignored when `genreIds` is set. */
  anyGenreIds?: ReadonlyArray<number>;
  withoutGenreIds?: ReadonlyArray<number>;
  /** Any of these keywords (OR). */
  keywordIds?: ReadonlyArray<number>;
  minVoteCount?: number;
  maxVoteCount?: number;
  minVoteAverage?: number;
  minRuntimeMinutes?: number;
  maxRuntimeMinutes?: number;
};

export type MoodSource =
  | { kind: 'catalog'; request: MoodRequest; alternate?: MoodRequest }
  | { kind: 'cinemas' };

export type Mood = {
  /** The id in the app, for example `mindBending`. */
  id: string;
  /** The URL segment, for example `mind-bending`. */
  slug: string;
  title: string;
  /** One sentence for the page description and the index card. */
  blurb: string;
  /** A Tailwind background class for the dot before the name. */
  dot: string;
  source: MoodSource;
  /** Inclusive days of the year, as month (1–12) and day. */
  season?: {
    from: { month: number; day: number };
    to: { month: number; day: number };
  };
};

const NOT_FOR_KIDS = [GENRE.ANIMATION, GENRE.KIDS_TV, GENRE.FAMILY];

const MIND_BENDING_KEYWORDS = [
  ...KEYWORD.MIND_BENDING,
  ...KEYWORD.TIME_LOOP,
  ...KEYWORD.TWIST_ENDING,
  ...KEYWORD.PLOT_TWIST,
  ...KEYWORD.NONLINEAR_TIMELINE,
  ...KEYWORD.ALTERNATE_REALITY,
  ...KEYWORD.MULTIVERSE,
  ...KEYWORD.SIMULATED_REALITY,
  ...KEYWORD.UNRELIABLE_NARRATOR,
  ...KEYWORD.SURREAL,
];

/**
 * All moods, in the order of the index page. The first five are the Discover
 * pills of the app, without Comfort rewatch.
 */
export const MOODS: ReadonlyArray<Mood> = [
  {
    id: 'spooky',
    slug: 'spooky-season',
    title: 'Spooky season',
    blurb: 'Popular horror for the weeks around Halloween.',
    dot: 'bg-magenta',
    season: { from: { month: 9, day: 15 }, to: { month: 11, day: 5 } },
    source: {
      kind: 'catalog',
      request: {
        mediaType: 'movie',
        genreIds: [GENRE.HORROR],
        minVoteCount: TUNING.MIN_VOTE_COUNT,
        sortBy: 'popularity.desc',
      },
      alternate: {
        mediaType: 'tv',
        keywordIds: [
          ...KEYWORD.GHOST,
          ...KEYWORD.VAMPIRE,
          ...KEYWORD.WITCH,
          ...KEYWORD.ZOMBIE,
        ],
        minVoteCount: TUNING.TV_VOTE_COUNT,
        sortBy: 'popularity.desc',
        withoutGenreIds: [...NOT_FOR_KIDS, GENRE.COMEDY],
      },
    },
  },
  {
    id: 'cozy',
    slug: 'cozy',
    title: 'Cozy',
    blurb: 'Sitcoms people love, with no crime, no fright and no cliffhanger.',
    dot: 'bg-amber-300',
    source: {
      kind: 'catalog',
      request: {
        mediaType: 'tv',
        genreIds: [GENRE.COMEDY],
        minVoteAverage: TUNING.COZY_MIN_RATING,
        minVoteCount: TUNING.COZY_TV_VOTE_COUNT,
        sortBy: 'popularity.desc',
        withoutGenreIds: [
          GENRE.CRIME,
          GENRE.DRAMA,
          GENRE.ACTION_ADVENTURE_TV,
          GENRE.SCI_FI_FANTASY_TV,
          GENRE.MYSTERY,
          GENRE.ANIMATION,
          GENRE.TALK_TV,
        ],
      },
      alternate: {
        mediaType: 'movie',
        genreIds: [GENRE.COMEDY, GENRE.FAMILY],
        minVoteAverage: TUNING.COZY_MOVIE_MIN_RATING,
        minVoteCount: TUNING.MIN_VOTE_COUNT,
        sortBy: 'popularity.desc',
        withoutGenreIds: [
          GENRE.CRIME,
          GENRE.ACTION,
          GENRE.HORROR,
          GENRE.THRILLER,
          GENRE.WAR,
          GENRE.ANIMATION,
          GENRE.SCI_FI,
        ],
      },
    },
  },
  {
    id: 'mindBending',
    slug: 'mind-bending',
    title: 'Mind-bending',
    blurb: 'Time loops, twist endings and realities that do not hold still.',
    dot: 'bg-sky-400',
    source: {
      kind: 'catalog',
      request: {
        mediaType: 'movie',
        anyGenreIds: [
          GENRE.SCI_FI,
          GENRE.MYSTERY,
          GENRE.THRILLER,
          GENRE.FANTASY,
        ],
        keywordIds: MIND_BENDING_KEYWORDS,
        minVoteAverage: TUNING.MIND_BENDING_MIN_RATING,
        minVoteCount: TUNING.MIN_VOTE_COUNT,
        sortBy: 'popularity.desc',
        withoutGenreIds: [GENRE.ANIMATION, GENRE.COMEDY, GENRE.FAMILY],
      },
      alternate: {
        mediaType: 'tv',
        anyGenreIds: [GENRE.SCI_FI_FANTASY_TV, GENRE.MYSTERY],
        keywordIds: MIND_BENDING_KEYWORDS,
        minVoteAverage: TUNING.MIND_BENDING_MIN_RATING,
        minVoteCount: TUNING.TV_KEYWORD_VOTE_COUNT,
        sortBy: 'popularity.desc',
        withoutGenreIds: [...NOT_FOR_KIDS, GENRE.COMEDY],
      },
    },
  },
  {
    id: 'shortSharp',
    slug: 'short-and-sharp',
    title: 'Short & sharp',
    blurb: 'Well-rated films between 70 and 95 minutes.',
    dot: 'bg-emerald-400',
    source: {
      kind: 'catalog',
      request: {
        mediaType: 'movie',
        maxRuntimeMinutes: TUNING.SHORT_SHARP_MAX_RUNTIME,
        minRuntimeMinutes: TUNING.SHORT_SHARP_MIN_RUNTIME,
        minVoteAverage: TUNING.SHORT_SHARP_MIN_RATING,
        minVoteCount: TUNING.WELL_KNOWN_VOTE_COUNT,
        sortBy: 'vote_average.desc',
      },
    },
  },
  {
    id: 'inCinemas',
    slug: 'in-cinemas',
    title: 'In cinemas',
    blurb: 'Films playing in cinemas now.',
    dot: 'bg-cyan-300',
    source: { kind: 'cinemas' },
  },
  {
    id: 'devastating',
    slug: 'something-devastating',
    title: 'Something devastating',
    blurb: 'War dramas that people rate the highest.',
    dot: 'bg-accent-soft',
    source: {
      kind: 'catalog',
      request: {
        mediaType: 'movie',
        genreIds: [GENRE.DRAMA, GENRE.WAR],
        minVoteCount: TUNING.WELL_KNOWN_VOTE_COUNT,
        sortBy: 'vote_average.desc',
      },
      alternate: {
        mediaType: 'tv',
        genreIds: [GENRE.DRAMA, GENRE.WAR_POLITICS_TV],
        minVoteCount: TUNING.TV_VOTE_COUNT,
        sortBy: 'vote_average.desc',
        withoutGenreIds: [GENRE.ANIMATION, GENRE.COMEDY],
      },
    },
  },
  {
    id: 'heist',
    slug: 'one-last-job',
    title: 'One last job',
    blurb: 'Heists, crews and plans that go almost right.',
    dot: 'bg-yellow-400',
    source: {
      kind: 'catalog',
      request: {
        mediaType: 'movie',
        keywordIds: KEYWORD.HEIST,
        minVoteCount: TUNING.KEYWORD_VOTE_COUNT,
        sortBy: 'popularity.desc',
      },
      alternate: {
        mediaType: 'tv',
        keywordIds: KEYWORD.HEIST,
        minVoteCount: TUNING.TV_KEYWORD_VOTE_COUNT,
        sortBy: 'popularity.desc',
        withoutGenreIds: NOT_FOR_KIDS,
      },
    },
  },
  {
    id: 'longHaul',
    slug: 'clear-your-evening',
    title: 'Clear your evening',
    blurb: 'Films over 140 minutes that earn the time.',
    dot: 'bg-iris',
    source: {
      kind: 'catalog',
      request: {
        mediaType: 'movie',
        minRuntimeMinutes: TUNING.LONG_RUNTIME,
        minVoteCount: TUNING.WELL_KNOWN_VOTE_COUNT,
        sortBy: 'vote_average.desc',
      },
    },
  },
  {
    id: 'postApocalyptic',
    slug: 'after-the-end',
    title: 'After the end',
    blurb: 'What is left after the world stops.',
    dot: 'bg-orange-400',
    source: {
      kind: 'catalog',
      request: {
        mediaType: 'movie',
        keywordIds: KEYWORD.POST_APOCALYPTIC,
        minVoteCount: TUNING.KEYWORD_VOTE_COUNT,
        sortBy: 'popularity.desc',
      },
      alternate: {
        mediaType: 'tv',
        keywordIds: KEYWORD.POST_APOCALYPTIC,
        minVoteCount: TUNING.KEYWORD_VOTE_COUNT,
        sortBy: 'popularity.desc',
        withoutGenreIds: NOT_FOR_KIDS,
      },
    },
  },
  {
    id: 'saturdayNight',
    slug: 'saturday-night',
    title: 'Saturday night',
    blurb: 'Big, popular action and adventure films.',
    dot: 'bg-accent',
    source: {
      kind: 'catalog',
      request: {
        mediaType: 'movie',
        genreIds: [GENRE.ACTION, GENRE.ADVENTURE],
        minVoteCount: TUNING.WELL_KNOWN_VOTE_COUNT,
        sortBy: 'popularity.desc',
      },
    },
  },
  {
    id: 'short',
    slug: 'under-100-minutes',
    title: 'Under 100 minutes',
    blurb: 'Popular films that finish before the evening does.',
    dot: 'bg-lime-300',
    source: {
      kind: 'catalog',
      request: {
        mediaType: 'movie',
        maxRuntimeMinutes: TUNING.SHORT_RUNTIME,
        minVoteCount: TUNING.MIN_VOTE_COUNT,
        sortBy: 'popularity.desc',
      },
    },
  },
  {
    id: 'trueStory',
    slug: 'it-really-happened',
    title: 'It really happened',
    blurb: 'Films and shows based on a true story.',
    dot: 'bg-stone-300',
    source: {
      kind: 'catalog',
      request: {
        mediaType: 'movie',
        keywordIds: KEYWORD.BASED_ON_TRUE_STORY,
        minVoteCount: TUNING.MIN_VOTE_COUNT,
        sortBy: 'popularity.desc',
      },
      alternate: {
        mediaType: 'tv',
        keywordIds: KEYWORD.BASED_ON_TRUE_STORY,
        minVoteCount: TUNING.TV_VOTE_COUNT,
        sortBy: 'popularity.desc',
      },
    },
  },
  {
    id: 'unseen',
    slug: 'nobody-has-seen-it',
    title: 'Nobody has seen it',
    blurb: 'Well-rated films that few people have rated.',
    dot: 'bg-teal-300',
    source: {
      kind: 'catalog',
      request: {
        mediaType: 'movie',
        maxVoteCount: TUNING.UNSEEN_MAX_VOTE_COUNT,
        minVoteAverage: TUNING.UNSEEN_MIN_RATING,
        minVoteCount: TUNING.UNSEEN_MIN_VOTE_COUNT,
        sortBy: 'vote_average.desc',
      },
    },
  },
  {
    id: 'unsettling',
    slug: 'quietly-unsettling',
    title: 'Quietly unsettling',
    blurb: 'Horror that is also a mystery: the quiet half of the genre.',
    dot: 'bg-violet-400',
    source: {
      kind: 'catalog',
      request: {
        mediaType: 'movie',
        genreIds: [GENRE.HORROR, GENRE.MYSTERY],
        minVoteCount: TUNING.MIN_VOTE_COUNT,
        sortBy: 'vote_average.desc',
      },
    },
  },
];

/** The moods that Discover shows as pills, in the app's order. */
export const DISCOVER_MOOD_IDS = [
  'spooky',
  'cozy',
  'mindBending',
  'shortSharp',
  'inCinemas',
] as const;

/** Month and day as one comparable number, the same in every year. */
function toDayOfYear(month: number, day: number): number {
  return month * 100 + day;
}

/** True when a mood is offered on `now`. A season can wrap the year. */
export function isMoodInSeason(mood: Mood, now: Date): boolean {
  if (!mood.season) {
    return true;
  }

  const day = toDayOfYear(now.getUTCMonth() + 1, now.getUTCDate());
  const from = toDayOfYear(mood.season.from.month, mood.season.from.day);
  const to = toDayOfYear(mood.season.to.month, mood.season.to.day);

  return from <= to ? day >= from && day <= to : day >= from || day <= to;
}

export function getMood(slug: string): Mood | undefined {
  return MOODS.find((mood) => mood.slug === slug);
}

export function moodsInSeason(now: Date): Array<Mood> {
  return MOODS.filter((mood) => isMoodInSeason(mood, now));
}

export function discoverMoods(now: Date): Array<Mood> {
  return DISCOVER_MOOD_IDS.map((id) =>
    MOODS.find((mood) => mood.id === id),
  ).filter((mood): mood is Mood => Boolean(mood && isMoodInSeason(mood, now)));
}

/** The media a mood can show. The first one is where the page opens. */
export function moodMediaTypes(mood: Mood): Array<ContentType> {
  if (mood.source.kind === 'cinemas') {
    return ['movie'];
  }

  const { request, alternate } = mood.source;

  return alternate
    ? [request.mediaType, alternate.mediaType]
    : [request.mediaType];
}

/** The request for one medium. A mood in one medium answers with that one. */
export function moodRequest(
  mood: Mood,
  mediaType?: ContentType,
): MoodRequest | undefined {
  if (mood.source.kind !== 'catalog') {
    return undefined;
  }

  const { request, alternate } = mood.source;

  return alternate && alternate.mediaType === mediaType ? alternate : request;
}

function join(ids: ReadonlyArray<number> | undefined, separator: string) {
  return ids && ids.length > 0 ? ids.join(separator) : undefined;
}

/** "2026-11-24", the day TMDB compares release dates with. */
function toTmdbDay(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/**
 * The TMDB discover parameters of a request. A mood offers only what is
 * already out, so the release date is capped at `today`.
 */
export function toDiscoverParams(
  request: MoodRequest,
  today: Date,
  page = 1,
): URLSearchParams {
  const isTv = request.mediaType === 'tv';
  const entries: Array<[string, string | number | undefined]> = [
    ['include_adult', 'false'],
    ['language', 'en-US'],
    ['page', page],
    ['sort_by', request.sortBy],
    [
      isTv ? 'first_air_date.lte' : 'primary_release_date.lte',
      toTmdbDay(today),
    ],
    ['vote_average.gte', request.minVoteAverage],
    ['vote_count.gte', request.minVoteCount],
    ['vote_count.lte', request.maxVoteCount],
    // A comma is AND and a pipe is OR. TMDB reads one `with_genres` only.
    [
      'with_genres',
      join(request.genreIds, ',') ?? join(request.anyGenreIds, '|'),
    ],
    ['with_keywords', join(request.keywordIds, '|')],
    ['with_runtime.gte', request.minRuntimeMinutes],
    ['with_runtime.lte', request.maxRuntimeMinutes],
    ['without_genres', join(request.withoutGenreIds, ',')],
  ];
  const params = new URLSearchParams();

  for (const [key, value] of entries) {
    if (value !== undefined) {
      params.set(key, String(value));
    }
  }

  return params;
}
