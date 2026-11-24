import { describe, expect, it } from 'vitest';
import {
  discoverMoods,
  getMood,
  isMoodInSeason,
  KEYWORD,
  moodMediaTypes,
  moodRequest,
  MOODS,
  moodsInSeason,
  toDiscoverParams,
} from './moods';

/**
 * These tests pin the copy of the app's moods. When one fails after an edit,
 * check the change against the app (see the header of `moods.ts`).
 */

const AUTUMN = new Date('2026-10-31T12:00:00Z');
const WINTER = new Date('2026-11-24T12:00:00Z');

function mood(slug: string) {
  const found = getMood(slug);

  if (!found) {
    throw new Error(`No mood ${slug}`);
  }

  return found;
}

describe('MOODS', () => {
  it('holds the 14 moods of the app without Comfort rewatch, each slug once', () => {
    expect(MOODS.map((item) => item.id)).toEqual([
      'spooky',
      'cozy',
      'mindBending',
      'shortSharp',
      'inCinemas',
      'devastating',
      'heist',
      'longHaul',
      'postApocalyptic',
      'saturdayNight',
      'short',
      'trueStory',
      'unseen',
      'unsettling',
    ]);
    expect(new Set(MOODS.map((item) => item.slug)).size).toBe(MOODS.length);
  });

  it('keeps the app labels', () => {
    expect(mood('mind-bending').title).toBe('Mind-bending');
    expect(mood('one-last-job').title).toBe('One last job');
    expect(mood('nobody-has-seen-it').title).toBe('Nobody has seen it');
  });
});

describe('isMoodInSeason', () => {
  it('offers Spooky season from 15 September to 5 November only', () => {
    const spooky = mood('spooky-season');

    expect(isMoodInSeason(spooky, new Date('2026-09-15T00:00:00Z'))).toBe(true);
    expect(isMoodInSeason(spooky, AUTUMN)).toBe(true);
    expect(isMoodInSeason(spooky, new Date('2026-11-05T23:00:00Z'))).toBe(true);
    expect(isMoodInSeason(spooky, new Date('2026-11-06T00:00:00Z'))).toBe(
      false,
    );
    expect(isMoodInSeason(spooky, new Date('2026-09-14T00:00:00Z'))).toBe(
      false,
    );
  });

  it('drops Spooky season from the lists out of season', () => {
    expect(moodsInSeason(WINTER)).toHaveLength(13);
    expect(discoverMoods(WINTER).map((item) => item.id)).toEqual([
      'cozy',
      'mindBending',
      'shortSharp',
      'inCinemas',
    ]);
    expect(discoverMoods(AUTUMN)[0].id).toBe('spooky');
  });
});

describe('moodMediaTypes', () => {
  it('opens Cozy on shows and the others on films', () => {
    expect(moodMediaTypes(mood('cozy'))).toEqual(['tv', 'movie']);
    expect(moodMediaTypes(mood('mind-bending'))).toEqual(['movie', 'tv']);
    expect(moodMediaTypes(mood('short-and-sharp'))).toEqual(['movie']);
    expect(moodMediaTypes(mood('in-cinemas'))).toEqual(['movie']);
  });

  it('answers with the one request a single-medium mood has', () => {
    expect(moodRequest(mood('saturday-night'), 'tv')?.mediaType).toBe('movie');
    expect(moodRequest(mood('in-cinemas'))).toBeUndefined();
  });
});

describe('toDiscoverParams', () => {
  function params(slug: string, mediaType?: 'movie' | 'tv') {
    const request = moodRequest(mood(slug), mediaType);

    if (!request) {
      throw new Error(`No request for ${slug}`);
    }

    return Object.fromEntries(toDiscoverParams(request, WINTER, 2));
  }

  it('builds Mind-bending as any of four genres and any of the keywords', () => {
    const result = params('mind-bending');

    expect(result.with_genres).toBe('878|9648|53|14');
    expect(result.without_genres).toBe('16,35,10751');
    expect(result.with_keywords?.split('|')).toEqual(
      expect.arrayContaining(
        [
          ...KEYWORD.TIME_LOOP,
          ...KEYWORD.TWIST_ENDING,
          ...KEYWORD.NONLINEAR_TIMELINE,
          ...KEYWORD.ALTERNATE_REALITY,
        ].map(String),
      ),
    );
    expect(result['vote_average.gte']).toBe('7');
    expect(result['vote_count.gte']).toBe('400');
    expect(result['primary_release_date.lte']).toBe('2026-11-24');
    expect(result.page).toBe('2');
  });

  it('builds Cozy as sitcoms rated 7.5+ with 150+ votes', () => {
    const result = params('cozy', 'tv');

    expect(result.with_genres).toBe('35');
    expect(result.without_genres).toBe('80,18,10759,10765,9648,16,10767');
    expect(result['vote_average.gte']).toBe('7.5');
    expect(result['vote_count.gte']).toBe('150');
    expect(result['first_air_date.lte']).toBe('2026-11-24');
    expect(result).not.toHaveProperty('primary_release_date.lte');
  });

  it('builds Short & sharp as 70–95 minutes, rated 7+, 800+ votes, by rating', () => {
    expect(params('short-and-sharp')).toMatchObject({
      'with_runtime.gte': '70',
      'with_runtime.lte': '95',
      'vote_average.gte': '7',
      'vote_count.gte': '800',
      sort_by: 'vote_average.desc',
    });
  });

  it('brackets the vote count of Nobody has seen it', () => {
    expect(params('nobody-has-seen-it')).toMatchObject({
      'vote_count.gte': '50',
      'vote_count.lte': '500',
    });
  });

  it('matches war drama as both genres', () => {
    expect(params('something-devastating').with_genres).toBe('18,10752');
  });
});
