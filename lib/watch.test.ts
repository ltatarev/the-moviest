import { describe, expect, it } from 'vitest';
import { getWatchSentence, toWatchRegions } from './watch';

const provider = (id: number, name: string, display_priority = id) => ({
  provider_id: id,
  provider_name: name,
  logo_path: `/${id}.png`,
  display_priority,
});

describe('toWatchRegions', () => {
  it('keeps site regions with offers, sorts by priority and drops repeats', () => {
    const regions = toWatchRegions({
      results: {
        US: {
          link: 'https://www.themoviedb.org/tv/1396/watch?locale=US',
          flatrate: [provider(8, 'Netflix', 2), provider(9, 'Prime Video', 1)],
          buy: [provider(2, 'Apple TV'), provider(2, 'Apple TV')],
        },
        DE: { link: 'x' },
        BR: { flatrate: [provider(8, 'Netflix')] },
      },
    });

    expect(Object.keys(regions)).toEqual(['US']);
    expect(regions.US?.stream.map((p) => p.name)).toEqual([
      'Prime Video',
      'Netflix',
    ]);
    expect(regions.US?.buy).toHaveLength(1);
    expect(regions.US?.rent).toEqual([]);
    expect(regions.US?.link).toContain('themoviedb.org');
  });

  it('gives no regions when TMDB has no data', () => {
    expect(toWatchRegions(undefined)).toEqual({});
  });
});

describe('getWatchSentence', () => {
  it('names each way to watch in one sentence', () => {
    const { GB } = toWatchRegions({
      results: {
        GB: {
          flatrate: [provider(8, 'Netflix')],
          rent: [provider(2, 'Apple TV'), provider(3, 'Google Play')],
        },
      },
    });

    expect(getWatchSentence(GB, 'GB')).toBe(
      'In the United Kingdom, you can stream it on Netflix. You can also rent it on Apple TV and Google Play.',
    );
    expect(getWatchSentence(undefined, 'GB')).toBeNull();
  });
});

describe('provider variants and shared stores', () => {
  it('drops service variants and merges identical rent and buy lists', () => {
    const { US } = toWatchRegions({
      results: {
        US: {
          flatrate: [
            provider(1, 'HBO Max Amazon Channel'),
            provider(2, 'Netflix'),
            provider(3, 'HBO Max'),
            provider(4, 'Netflix Standard with Ads'),
          ],
          rent: [provider(5, 'Apple TV Store')],
          buy: [provider(5, 'Apple TV Store')],
        },
      },
    });

    expect(US?.stream.map((p) => p.name)).toEqual(['Netflix', 'HBO Max']);
    expect(getWatchSentence(US, 'US')).toBe(
      'In the United States, you can stream it on Netflix and HBO Max. You can also rent or buy it on Apple TV Store.',
    );
  });
});
