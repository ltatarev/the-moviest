import { describe, expect, it } from 'vitest';
import { serializeJsonLd } from '../src/modules/ui/JsonLd';
import { getEpisodeFaq, summarizeEpisodes } from './episodes';
import {
  getBreadcrumbJsonLd,
  getEpisodesJsonLd,
  getReviewJsonLd,
  getSiteJsonLd,
  getTitleJsonLd,
  getWatchlistJsonLd,
  toIsoDuration,
} from './jsonLd';
import type { ReviewType, TitleDetailType, WatchlistType } from './types';

const film: TitleDetailType = {
  id: '693134',
  type: 'movie',
  title: 'Dune: Part Two',
  tagline: '',
  overview: 'Paul Atreides unites with the Fremen.',
  posterPath: '/poster.jpg',
  backdropPath: null,
  year: '2024',
  length: '2h 47m',
  releaseDate: '2024-02-27',
  runtimeMinutes: 167,
  seasons: null,
  episodes: null,
  genres: ['Science Fiction'],
  score: 81,
  votes: 5000,
  cast: [{ id: 1, name: 'Zendaya', character: 'Chani', profile_path: null }],
  crew: [{ role: 'Director', name: 'Denis Villeneuve' }],
  facts: [],
  similar: [],
  watch: {},
};

describe('toIsoDuration', () => {
  it('writes minutes as an ISO 8601 duration', () => {
    expect(toIsoDuration(167)).toBe('PT2H47M');
    expect(toIsoDuration(120)).toBe('PT2H');
    expect(toIsoDuration(45)).toBe('PT45M');
    expect(toIsoDuration(null)).toBeUndefined();
  });
});

describe('getTitleJsonLd', () => {
  it('describes a film with its facts and no third-party rating', () => {
    const data = getTitleJsonLd(film);

    expect(data).toMatchObject({
      '@type': 'Movie',
      url: 'https://the-moviest.vercel.app/movie/693134',
      name: 'Dune: Part Two',
      datePublished: '2024-02-27',
      duration: 'PT2H47M',
      image: 'https://image.tmdb.org/t/p/w780/poster.jpg',
      director: [{ '@type': 'Person', name: 'Denis Villeneuve' }],
      actor: [{ '@type': 'Person', name: 'Zendaya' }],
    });
    expect(data).not.toHaveProperty('aggregateRating');
    expect(data).not.toHaveProperty('numberOfSeasons');
  });

  it('describes a series with its creators and seasons', () => {
    const data = getTitleJsonLd({
      ...film,
      type: 'tv',
      seasons: 5,
      episodes: 62,
      runtimeMinutes: 47,
      crew: [{ role: 'Created by', name: 'Vince Gilligan, Peter Gould' }],
    });

    expect(data).toMatchObject({
      '@type': 'TVSeries',
      startDate: '2024-02-27',
      timeRequired: 'PT47M',
      numberOfSeasons: 5,
      numberOfEpisodes: 62,
      creator: [
        { '@type': 'Person', name: 'Vince Gilligan' },
        { '@type': 'Person', name: 'Peter Gould' },
      ],
    });
    expect(data).not.toHaveProperty('director');
  });
});

describe('getReviewJsonLd', () => {
  it('links the review to the film and gives the rating out of 10', () => {
    const review = {
      _id: 'abc',
      title: 'Sand everywhere',
      reviewText: 'Loved it.',
      rating: 9,
      likes: 0,
      author_id: { username: 'ana' },
      movie: { movieId: 693134, movieTitle: 'Dune: Part Two' },
      createdAt: '2024-03-01T00:00:00.000Z',
      updatedAt: '2024-03-01T00:00:00.000Z',
    } as unknown as ReviewType;

    expect(getReviewJsonLd(review)).toMatchObject({
      '@type': 'Review',
      author: { '@type': 'Person', name: 'ana' },
      itemReviewed: {
        '@type': 'Movie',
        url: 'https://the-moviest.vercel.app/movie/693134',
      },
      reviewRating: { ratingValue: 9, bestRating: 10, worstRating: 1 },
    });
  });
});

describe('getWatchlistJsonLd', () => {
  it('lists the titles in order and gives a URL only to titles with an id', () => {
    const watchlist = {
      _id: 'w1',
      title: 'Autumn',
      description: 'Cosy films',
      likes: 0,
      author_id: { username: 'ana' },
      movies: [
        { movieId: 1, movieTitle: 'One' },
        { movieTitle: 'No id' },
        {},
        { movieId: 2, movieTitle: 'Two' },
      ],
      createdAt: '2024-03-01T00:00:00.000Z',
    } as unknown as WatchlistType;

    const data = getWatchlistJsonLd(watchlist);

    expect(data.numberOfItems).toBe(3);
    expect(data.itemListElement).toEqual([
      {
        '@type': 'ListItem',
        position: 1,
        name: 'One',
        url: 'https://the-moviest.vercel.app/movie/1',
      },
      { '@type': 'ListItem', position: 2, name: 'No id' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Two',
        url: 'https://the-moviest.vercel.app/movie/2',
      },
    ]);
  });
});

describe('getBreadcrumbJsonLd', () => {
  it('gives each linked crumb an absolute URL and leaves the last one bare', () => {
    expect(
      getBreadcrumbJsonLd([
        { label: 'Reviews', href: '/reviews' },
        { label: 'Sand everywhere' },
      ]).itemListElement,
    ).toEqual([
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Reviews',
        item: 'https://the-moviest.vercel.app/reviews',
      },
      { '@type': 'ListItem', position: 2, name: 'Sand everywhere' },
    ]);
  });
});

describe('serializeJsonLd', () => {
  it('escapes user text that could close the script element', () => {
    const json = serializeJsonLd({ reviewBody: '</script><script>alert(1)' });

    expect(json).not.toContain('</script>');
    expect(JSON.parse(json)).toEqual({
      reviewBody: '</script><script>alert(1)',
    });
  });
});

describe('getEpisodesJsonLd', () => {
  it('links the best episodes to the series and adds the questions', () => {
    const summary = summarizeEpisodes({
      show: {
        id: 1396,
        title: 'Breaking Bad',
        posterPath: null,
        firstYear: '2008',
        lastYear: '2013',
        inProduction: false,
      },
      seasons: [
        {
          number: 5,
          episodes: [{ number: 14, name: 'Ozymandias', vote: 9.9, votes: 812 }],
        },
      ],
    });
    const data = getEpisodesJsonLd(summary, getEpisodeFaq(summary));
    const [list, faq] = data['@graph'] as Array<Record<string, unknown>>;

    expect(list).toMatchObject({
      '@type': 'ItemList',
      itemListElement: [
        {
          position: 1,
          item: {
            '@type': 'TVEpisode',
            name: 'Ozymandias',
            episodeNumber: 14,
            partOfSeason: { seasonNumber: 5 },
            partOfSeries: { '@id': 'https://the-moviest.vercel.app/tv/1396' },
          },
        },
      ],
    });
    expect(faq).toMatchObject({
      '@type': 'FAQPage',
      mainEntity: expect.arrayContaining([
        expect.objectContaining({
          name: 'What is the best episode of Breaking Bad?',
        }),
      ]),
    });
  });
});

describe('getSiteJsonLd', () => {
  it('uses the landing page id for the app, so both sites name one app', () => {
    const graph = getSiteJsonLd()['@graph'] as Array<Record<string, unknown>>;
    const app = graph.find((node) => node['@type'] === 'MobileApplication');

    expect(app?.['@id']).toBe('https://ltatarev.github.io/moviest/#app');
    expect(graph[0].about).toEqual({ '@id': app?.['@id'] });
  });
});
