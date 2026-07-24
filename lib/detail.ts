import {
  formatCurrency,
  formatDate,
  formatLanguage,
  formatRuntime,
  getTitle,
  getYear,
  pluralize,
} from './format';
import {
  ContentType,
  CrewCreditType,
  FactType,
  TitleDetailType,
  TitleResponseType,
} from './types';

const CAST_LIMIT = 12;
const SIMILAR_LIMIT = 5;

/** Drops the rows TMDB has no answer for, so the panel never shows a blank. */
function toFacts(
  entries: Array<[string, string | undefined]>,
): Array<FactType> {
  return entries
    .filter(([, value]) => Boolean(value))
    .map(([label, value]) => ({ label, value: value as string }));
}

function getCrew(
  title: TitleResponseType,
  type: ContentType,
): Array<CrewCreditType> {
  const crew = title.credits?.crew ?? [];
  const byJob = (...jobs: Array<string>) =>
    crew.find((member) => member.job && jobs.includes(member.job))?.name;

  const credits: Array<CrewCreditType> = [];

  if (type === 'tv') {
    const creators = (title.created_by ?? []).map((person) => person.name);

    if (creators.length > 0) {
      credits.push({
        role: 'Created by',
        name: creators.slice(0, 2).join(', '),
      });
    }
  } else {
    const director = byJob('Director');

    if (director) {
      credits.push({ role: 'Director', name: director });
    }
  }

  const writer = byJob('Screenplay', 'Writer', 'Story');

  if (writer) {
    credits.push({ role: 'Screenplay', name: writer });
  }

  const composer = byJob('Original Music Composer', 'Music');

  if (composer) {
    credits.push({ role: 'Music', name: composer });
  }

  return credits;
}

function getFacts(
  title: TitleResponseType,
  type: ContentType,
): Array<FactType> {
  const shared: Array<[string, string | undefined]> = [
    ['Status', title.status],
    ['Original language', formatLanguage(title.original_language)],
  ];

  if (type === 'tv') {
    return toFacts([
      ['First aired', formatDate(title.first_air_date)],
      ...shared,
      [
        'Episodes',
        title.number_of_episodes
          ? pluralize(title.number_of_episodes, 'episode')
          : '',
      ],
      ['Episode runtime', formatRuntime(title.episode_run_time?.[0])],
      ['Network', title.networks?.[0]?.name],
    ]);
  }

  return toFacts([
    ['Release date', formatDate(title.release_date)],
    ...shared,
    ['Budget', formatCurrency(title.budget)],
    ['Revenue', formatCurrency(title.revenue)],
    ['Production', title.production_companies?.[0]?.name],
  ]);
}

/**
 * Flattens a TMDB title into exactly what the detail page draws. Anything the
 * API leaves out ends up empty here and is skipped rather than faked further
 * down — different titles legitimately carry very different amounts of data.
 */
export function toTitleDetail(
  title: TitleResponseType,
  type: ContentType,
): TitleDetailType {
  const length =
    type === 'tv'
      ? title.number_of_seasons
        ? pluralize(title.number_of_seasons, 'season')
        : ''
      : formatRuntime(title.runtime);

  return {
    id: String(title.id),
    type,
    title: getTitle(title),
    tagline: title.tagline ?? '',
    overview: title.overview ?? '',
    posterPath: title.poster_path ?? null,
    backdropPath: title.backdrop_path ?? null,
    year: getYear(title),
    length,
    genres: (title.genres ?? []).map((genre) => genre.name),
    score: title.vote_average ? Math.round(title.vote_average * 10) : null,
    votes: title.vote_count ?? 0,
    cast: (title.credits?.cast ?? []).slice(0, CAST_LIMIT).map((person) => ({
      id: person.id,
      name: person.name,
      character: person.character ?? '',
      profile_path: person.profile_path ?? null,
    })),
    crew: getCrew(title, type),
    facts: getFacts(title, type),
    similar: (title.similar?.results ?? []).slice(0, SIMILAR_LIMIT),
  };
}
