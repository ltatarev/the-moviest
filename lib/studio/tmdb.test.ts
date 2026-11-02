import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  getHeatmap,
  getTitleDetails,
  isRecentlyAired,
  mapLimit,
  monthRange,
  pickFlatrate,
  searchTitles,
  setFetcherForTests,
} from './tmdb';

type Routes = Record<string, unknown>;

function mockTmdb(routes: Routes) {
  const calls: string[] = [];

  setFetcherForTests(async (input) => {
    const url = new URL(String(input));
    calls.push(url.pathname);
    const body = routes[url.pathname.replace('/3', '')];

    return body === undefined
      ? new Response('{}', { status: 404 })
      : new Response(JSON.stringify(body), { status: 200 });
  });

  return calls;
}

beforeEach(() => {
  process.env.TMDB_KEY = 'test-key';
});

afterEach(() => setFetcherForTests(null));

describe('providers', () => {
  const raw = {
    results: {
      DE: {
        flatrate: [
          { provider_id: 2, provider_name: 'Prime Video', display_priority: 5 },
          { provider_id: 8, provider_name: 'Netflix', display_priority: 1 },
        ],
      },
    },
  };

  it('orders flatrate providers by display priority, per region', () => {
    expect(pickFlatrate(raw, 'DE').map((p) => p.name)).toEqual([
      'Netflix',
      'Prime Video',
    ]);
  });

  it('returns nothing when the region or flatrate is missing', () => {
    expect(pickFlatrate(raw, 'US')).toEqual([]);
    expect(pickFlatrate(undefined, 'DE')).toEqual([]);
  });
});

describe('dates', () => {
  it('builds month ranges and rejects junk', () => {
    expect(monthRange('2026-02')).toEqual({
      from: '2026-02-01',
      to: '2026-02-28',
    });
    expect(monthRange('2028-02')?.to).toBe('2028-02-29');
    expect(monthRange('2026-13')).toBeNull();
    expect(monthRange('nope')).toBeNull();
  });

  it('flags shows that first aired in the last 30 days', () => {
    const now = new Date('2026-11-02T12:00:00Z');

    expect(isRecentlyAired('2026-10-20', now)).toBe(true);
    expect(isRecentlyAired('2026-09-01', now)).toBe(false);
    expect(isRecentlyAired('2026-12-01', now)).toBe(false);
    expect(isRecentlyAired(null, now)).toBe(false);
  });
});

describe('mapLimit', () => {
  it('keeps order and caps concurrency', async () => {
    let active = 0;
    let peak = 0;
    const result = await mapLimit([1, 2, 3, 4, 5, 6], 2, async (n) => {
      active++;
      peak = Math.max(peak, active);
      await new Promise((resolve) => setTimeout(resolve, 5));
      active--;

      return n * 10;
    });

    expect(result).toEqual([10, 20, 30, 40, 50, 60]);
    expect(peak).toBe(2);
  });
});

describe('search', () => {
  it('keeps films and shows, drops people', async () => {
    mockTmdb({
      '/search/multi': {
        results: [
          {
            id: 1,
            media_type: 'movie',
            title: 'Lady Bird',
            release_date: '2017-09-01',
            poster_path: '/a.jpg',
          },
          { id: 2, media_type: 'person', name: 'Greta Gerwig' },
          {
            id: 3,
            media_type: 'tv',
            name: 'Fleabag',
            original_name: 'Fleabag',
            first_air_date: '2016-07-21',
          },
        ],
      },
    });

    expect(await searchTitles('lady', 'multi')).toEqual([
      {
        id: 1,
        media: 'movie',
        title: 'Lady Bird',
        originalTitle: null,
        year: '2017',
        posterPath: '/a.jpg',
      },
      {
        id: 3,
        media: 'tv',
        title: 'Fleabag',
        originalTitle: null,
        year: '2016',
        posterPath: null,
      },
    ]);
  });
});

describe('title details', () => {
  it('uses the director for films and omits missing scores', async () => {
    mockTmdb({
      '/movie/7': {
        id: 7,
        title: 'Aftersun',
        release_date: '2022-10-21',
        vote_average: 0,
        vote_count: 0,
        credits: {
          crew: [
            { job: 'Director', name: 'Charlotte Wells' },
            { job: 'Writer', name: 'Charlotte Wells' },
          ],
        },
      },
    });

    const details = await getTitleDetails('movie', 7, 'DE');

    expect(details.maker).toBe('Charlotte Wells');
    expect(details.voteAverage).toBeNull();
    expect(details.providers).toEqual([]);
  });
});

describe('heatmap', () => {
  it('skips specials, unaired episodes and empty seasons', async () => {
    const calls = mockTmdb({
      '/tv/9': {
        id: 9,
        name: 'Show',
        first_air_date: '2020-01-01',
        last_air_date: '2026-10-01',
        in_production: true,
        seasons: [
          { season_number: 0, episode_count: 3 },
          { season_number: 1, episode_count: 2 },
          { season_number: 2, episode_count: 1 },
        ],
      },
      '/tv/9/season/1': {
        episodes: [
          {
            episode_number: 2,
            air_date: '2020-01-08',
            vote_average: 8.04,
            vote_count: 12,
          },
          {
            episode_number: 1,
            air_date: '2020-01-01',
            vote_average: 7.5,
            vote_count: 30,
          },
        ],
      },
      '/tv/9/season/2': {
        episodes: [
          {
            episode_number: 1,
            air_date: '2099-01-01',
            vote_average: 0,
            vote_count: 0,
          },
        ],
      },
    });

    const data = await getHeatmap(9, '2026-11-02');

    expect(calls).not.toContain('/3/tv/9/season/0');
    expect(data.show).toMatchObject({ firstYear: '2020', inProduction: true });
    expect(data.seasons).toEqual([
      {
        number: 1,
        episodes: [
          { number: 1, name: '', vote: 7.5, votes: 30 },
          { number: 2, name: '', vote: 8, votes: 12 },
        ],
      },
    ]);
  });
});
