import type { EpisodeSummary, Faq } from './episodes';
import { absoluteUrl } from './seo';
import { APP_PAGE, APP_STORE_URL, SITE_NAME, SITE_URL } from './site';
import { getImageSrc } from './tmdb';
import { getTitle } from './format';
import type { ContentType, MovieType, TitleDetailType } from './types';

/**
 * Schema.org JSON-LD for each page type. Answer engines and search engines
 * read these facts more reliably than the page layout.
 *
 * Do not add `aggregateRating` from the TMDB score: Google does not allow
 * ratings that come from another site.
 */

export type JsonLdObject = Record<string, unknown>;

const CONTEXT = 'https://schema.org';
const CAST_LIMIT = 6;

/** Removes the keys that have no value, so no empty fact is published. */
function compact(object: JsonLdObject): JsonLdObject {
  return Object.fromEntries(
    Object.entries(object).filter(
      ([, value]) =>
        value !== undefined &&
        value !== null &&
        value !== '' &&
        !(Array.isArray(value) && value.length === 0),
    ),
  );
}

/** 167 → "PT2H47M", the ISO 8601 duration that schema.org expects. */
export function toIsoDuration(minutes: number | null): string | undefined {
  if (!minutes || minutes <= 0) {
    return undefined;
  }

  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;

  return `PT${hours ? `${hours}H` : ''}${rest ? `${rest}M` : ''}`;
}

function person(name: string): JsonLdObject {
  return { '@type': 'Person', name };
}

function namesFor(detail: TitleDetailType, role: string): Array<string> {
  return detail.crew
    .filter((credit) => credit.role === role)
    .flatMap((credit) => credit.name.split(', '));
}

export function getTitleJsonLd(detail: TitleDetailType): JsonLdObject {
  const isTv = detail.type === 'tv';
  const url = absoluteUrl(`/${detail.type}/${detail.id}`);
  const image =
    getImageSrc(detail.posterPath, 'w780') ??
    getImageSrc(detail.backdropPath, 'w1280');
  const makers = namesFor(detail, isTv ? 'Created by' : 'Director').map(person);

  return compact({
    '@context': CONTEXT,
    '@type': isTv ? 'TVSeries' : 'Movie',
    '@id': url,
    url,
    name: detail.title,
    description: detail.overview,
    image,
    genre: detail.genres,
    [isTv ? 'startDate' : 'datePublished']: detail.releaseDate,
    // For a series, schema.org has no runtime field. The episode runtime is
    // a timeRequired of one episode.
    [isTv ? 'timeRequired' : 'duration']: toIsoDuration(detail.runtimeMinutes),
    numberOfSeasons: detail.seasons,
    numberOfEpisodes: detail.episodes,
    [isTv ? 'creator' : 'director']: makers,
    actor: detail.cast
      .slice(0, CAST_LIMIT)
      .map((member) => person(member.name)),
    sameAs: `https://www.themoviedb.org/${detail.type}/${detail.id}`,
  });
}

/** A mood page: the titles in the order the page shows them. */
export function getMoodJsonLd(
  mood: { slug: string; title: string; blurb: string },
  titles: Array<MovieType>,
  type: ContentType,
): JsonLdObject {
  return compact({
    '@context': CONTEXT,
    '@type': 'ItemList',
    url: absoluteUrl(`/moods/${mood.slug}`),
    name: `In the mood for ${mood.title}`,
    description: mood.blurb,
    numberOfItems: titles.length,
    itemListElement: titles.map((title, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: absoluteUrl(`/${type}/${title.id}`),
      name: getTitle(title),
    })),
  });
}

type Crumb = { label: string; href?: string };

/** The last crumb is the current page. Google allows it without a URL. */
export function getBreadcrumbJsonLd(items: Array<Crumb>): JsonLdObject {
  return {
    '@context': CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) =>
      compact({
        '@type': 'ListItem',
        position: i + 1,
        name: item.label,
        item: item.href ? absoluteUrl(item.href) : undefined,
      }),
    ),
  };
}

/**
 * The site, its owner and the iOS app as one graph, for the home page.
 * The app facts come from the App Store listing. Do not add a feature that
 * the listing does not name.
 */
export function getSiteJsonLd(): JsonLdObject {
  const site = `${SITE_URL}/#website`;
  // The same @id as the app on its landing page, so search engines join the
  // two descriptions into one app and do not see a second one.
  const app = `${APP_PAGE}#app`;

  return {
    '@context': CONTEXT,
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': site,
        url: absoluteUrl('/home'),
        name: SITE_NAME,
        description:
          'Browse films and TV shows: moods, cast, crew, trailers and where to watch. Film and TV data from TMDB.',
        inLanguage: 'en',
        about: { '@id': app },
      },
      {
        '@type': 'MobileApplication',
        '@id': app,
        name: 'Moviest: Film & TV Tracker',
        alternateName: 'Moviest',
        description: 'One watchlist for films and TV.',
        operatingSystem: 'iOS 17.0 or later, iPadOS 17.0 or later',
        applicationCategory: 'EntertainmentApplication',
        url: APP_PAGE,
        installUrl: APP_STORE_URL,
        sameAs: [APP_STORE_URL, APP_PAGE],
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    ],
  };
}

/**
 * The episode ratings page: the best episodes as an ordered list, and the
 * questions that the page answers. The series links to the detail page by @id.
 */
export function getEpisodesJsonLd(
  summary: EpisodeSummary,
  faq: Array<Faq>,
): JsonLdObject {
  const series = absoluteUrl(`/tv/${summary.showId}`);
  const page = absoluteUrl(`/tv/${summary.showId}/episodes`);
  const graph: Array<JsonLdObject> = [];

  if (summary.top.length > 0) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${page}#best`,
      name: `Best-rated episodes of ${summary.title}`,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      numberOfItems: summary.top.length,
      itemListElement: summary.top.map((episode, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: compact({
          '@type': 'TVEpisode',
          name: episode.name,
          episodeNumber: episode.episode,
          partOfSeason: {
            '@type': 'TVSeason',
            seasonNumber: episode.season,
          },
          partOfSeries: {
            '@type': 'TVSeries',
            '@id': series,
            name: summary.title,
          },
        }),
      })),
    });
  }

  if (faq.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${page}#faq`,
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  }

  return { '@context': CONTEXT, '@graph': graph };
}
