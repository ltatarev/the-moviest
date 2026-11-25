import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  getHeatmap,
  getTitleDetails,
  getTrendingByIds,
  isRecentlyAired,
  mapLimit,
  monthRange,
  pickFlatrate,
  searchTitles,
  SEASONS_PER_REQUEST,
  setFetcherForTests,
} from './tmdb';

type Routes = Record<string, unknown>;

function mockTmdb(routes: Routes) {
  const calls: string[] = [];

  setFetcherForTests(async (input) => {
    const url = new URL(String(input));
    const path = url.pathname.replace('/3', '');
    const append = url.searchParams.get('append_to_response');
    calls.push(append ? `${url.pathname}?append=${append}` : url.pathname);
    const body = routes[path];

    if (body === undefined) {
      return new Response('{}', { status: 404 });
    }

    // Like TMDB: each appended item that exists is added under its own key.
    const appended = Object.fromEntries(
      (append?.split(',') ?? [])
        .filter((item) => routes[`${path}/${item}`] !== undefined)
        .map((item) => [item, routes[`${path}/${item}`]]),
    );

    return new Response(JSON.stringify({ ...(body as object), ...appended }), {
      status: 200,
    });
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

describe('trending by ids', () => {
  it('gets each show and its providers in one request', async () => {
    const calls = mockTmdb({
      '/tv/1': { id: 1, name: 'Severance', first_air_date: '2022-02-18' },
      '/tv/1/watch/providers': {
        results: {
          DE: {
            flatrate: [{ provider_id: 350, provider_name: 'Apple TV' }],
          },
        },
      },
      '/tv/2': { id: 2, name: 'Slow Horses', first_air_date: '2022-04-01' },
    });

    const items = await getTrendingByIds([1, 2], 'DE');

    expect(calls).toEqual([
      '/3/tv/1?append=watch/providers',
      '/3/tv/2?append=watch/providers',
    ]);
    expect(items.map((item) => [item.title, item.provider])).toEqual([
      ['Severance', 'Apple TV'],
      ['Slow Horses', null],
    ]);
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

    expect(calls).toHaveLength(1);
    expect(calls[0]).not.toMatch(/season\/0\b/);
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

  const aired = {
    episodes: [
      {
        episode_number: 1,
        air_date: '2020-01-01',
        vote_average: 7,
        vote_count: 5,
      },
    ],
  };

  it('gets a long show in groups of seasons, not one request each', async () => {
    const count = 45;
    const routes: Routes = {
      '/tv/5': {
        id: 5,
        seasons: Array.from({ length: count }, (_, i) => ({
          season_number: i + 1,
          episode_count: 1,
        })),
      },
    };

    for (let n = 1; n <= count; n++) {
      routes[`/tv/5/season/${n}`] = aired;
    }

    const calls = mockTmdb(routes);
    const data = await getHeatmap(5, '2026-11-02');

    // Seasons 1-19 with the show, then 20-38, then 39-45.
    expect(calls).toHaveLength(3);
    expect(calls.every((call) => call.startsWith('/3/tv/5?append='))).toBe(
      true,
    );
    expect(
      calls.every(
        (call) => call.split('=')[1].split(',').length <= SEASONS_PER_REQUEST,
      ),
    ).toBe(true);
    expect(data.seasons.map((season) => season.number)).toEqual(
      Array.from({ length: count }, (_, i) => i + 1),
    );
  });

  it('gets seasons numbered by year in a second request', async () => {
    const calls = mockTmdb({
      '/tv/6': {
        id: 6,
        seasons: [
          { season_number: 2024, episode_count: 1 },
          { season_number: 2025, episode_count: 1 },
        ],
      },
      '/tv/6/season/2024': aired,
      '/tv/6/season/2025': aired,
    });

    const data = await getHeatmap(6, '2026-11-02');

    expect(calls).toEqual([
      expect.stringContaining('season/19'),
      '/3/tv/6?append=season/2024,season/2025',
    ]);
    expect(data.seasons.map((season) => season.number)).toEqual([2024, 2025]);
  });

  it('leaves out a season that TMDB does not return', async () => {
    mockTmdb({
      '/tv/7': {
        id: 7,
        seasons: [
          { season_number: 1, episode_count: 1 },
          { season_number: 2, episode_count: 1 },
        ],
      },
      '/tv/7/season/1': aired,
    });

    const data = await getHeatmap(7, '2026-11-02');

    expect(data.seasons.map((season) => season.number)).toEqual([1]);
  });
});
