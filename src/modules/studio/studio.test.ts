import { describe, expect, it } from 'vitest';
import { mergeWithDefaults, parsePostFile, toPostFile } from './drafts';
import { pngFileName } from './export';
import {
  bandFor,
  bandRangeLabel,
  bestAndWorst,
  cellColours,
  cellLayout,
  scaleFill,
  splitHeatmap,
} from './heatmap';
import { HEATMAP_PALETTES } from './theme';
import { favourites } from './templates/favourites';
import { trending } from './templates/trending';
import {
  fillPlaceholders,
  fitFontSize,
  monthLabel,
  parseAccent,
  slugify,
} from './text';
import { validateInput } from './validation';
import type { PickedTitle } from './types';

const season = (number: number, votes: Array<[number, number]>) => ({
  number,
  episodes: votes.map(([vote, count], index) => ({
    number: index + 1,
    name: '',
    vote,
    votes: count,
  })),
});

describe('heatmap bands', () => {
  it('maps values onto bands at the thresholds', () => {
    expect(bandFor(9.2).label).toBe('Awesome');
    expect(bandFor(8.5).label).toBe('Awesome');
    expect(bandFor(8.4).label).toBe('Great');
    expect(bandFor(7.0).label).toBe('Good');
    expect(bandFor(6.2).label).toBe('Meh');
    expect(bandFor(6.1).label).toBe('Rough');
    expect(bandFor(0).label).toBe('Rough');
  });

  it('labels the band ranges', () => {
    expect(bandRangeLabel(0)).toBe('8.5+');
    expect(bandRangeLabel(1)).toBe('7.8–8.4');
    expect(bandRangeLabel(4)).toBe('< 6.2');
  });

  it('colours the bands from the chosen palette', () => {
    expect(bandFor(9.2).fill).toBe('#F4536E');
    expect(bandFor(9.2, 'viridis').fill).toBe('#FDE725');
    expect(cellColours(9.2).fill).toBe('#F4536E');
  });

  it('blends the traffic scale and is full red at 7.0 or less', () => {
    expect(cellColours(7.0, 'traffic')).toEqual({
      fill: '#D7301F',
      text: '#FFFFFF',
    });
    expect(cellColours(5.5, 'traffic').fill).toBe('#D7301F');
    expect(cellColours(9.9, 'traffic').fill).toBe('#23893A');
    expect(cellColours(8.0, 'traffic').text).toBe('#2A2A2A');
    expect(cellColours(9.8, 'traffic').text).toBe('#FFFFFF');
    expect(scaleFill(7.2, HEATMAP_PALETTES.traffic.scale)).toBe('#E24D26');
  });
});

describe('best and worst', () => {
  it('ignores low-vote episodes and breaks ties by the earlier episode', () => {
    const seasons = [
      season(2, [
        [9.0, 50],
        [5.0, 50],
      ]),
      season(1, [
        [9.0, 50],
        [9.9, 2],
        [5.0, 50],
      ]),
    ];

    expect(bestAndWorst(seasons, 5)).toEqual({
      best: { season: 1, episode: 1, name: '', vote: 9 },
      worst: { season: 1, episode: 3, name: '', vote: 5 },
    });
  });

  it('is null when no episode has enough votes', () => {
    expect(bestAndWorst([season(1, [[8, 1]])], 5)).toBeNull();
  });
});

describe('splitting', () => {
  it('keeps a normal show on one slide', () => {
    const show = Array.from({ length: 5 }, (_, i) =>
      season(
        i + 1,
        Array.from({ length: 13 }, () => [8, 10] as [number, number]),
      ),
    );

    expect(splitHeatmap(show)).toHaveLength(1);
  });

  it('splits by season range and by episode range', () => {
    const long = Array.from({ length: 20 }, (_, i) =>
      season(
        i + 1,
        Array.from({ length: 24 }, () => [8, 10] as [number, number]),
      ),
    );
    const parts = splitHeatmap(long);

    expect(parts.map((part) => part.seasons.length)).toEqual([12, 8]);

    const anime = [
      season(
        1,
        Array.from({ length: 64 }, () => [8, 10] as [number, number]),
      ),
    ];

    expect(
      splitHeatmap(anime).map((part) => [part.episodeFrom, part.episodeTo]),
    ).toEqual([
      [1, 30],
      [31, 60],
      [61, 64],
    ]);
  });

  it('hides numbers when cells get small', () => {
    expect(cellLayout(5, 10, { width: 886, height: 840 }).showNumbers).toBe(
      true,
    );
    expect(cellLayout(12, 30, { width: 886, height: 840 }).showNumbers).toBe(
      false,
    );
  });
});

describe('text', () => {
  it('parses accent words', () => {
    expect(parseAccent('When did it *fall off?*')).toEqual([
      { text: 'When did it ', accent: false },
      { text: 'fall off?', accent: true },
    ]);
    expect(parseAccent('no accent * here')).toEqual([
      { text: 'no accent * here', accent: false },
    ]);
  });

  it('fills placeholders and leaves unknown ones visible', () => {
    expect(fillPlaceholders('{person}’s list', { person: 'Olivia' })).toBe(
      'Olivia’s list',
    );
    expect(fillPlaceholders('{person}’s list', { person: '' })).toBe(
      '{person}’s list',
    );
  });

  it('steps title sizes down', () => {
    expect(fitFontSize('Aftersun', 80, 20)).toBe(80);
    expect(fitFontSize('Everything Everywhere All at Once', 80, 20)).toBe(56);
  });

  it('slugs and labels', () => {
    expect(slugify('Olivia Rodrigo’s Picks!')).toBe('olivia-rodrigo-s-picks');
    expect(slugify('***')).toBe('post');
    expect(monthLabel('2026-10')).toBe('October 2026');
    expect(pngFileName('favourites', 'olivia', 0)).toBe(
      'favourites-olivia-01.png',
    );
  });
});

const title = (id: number): PickedTitle => ({
  id,
  media: 'movie',
  title: `Film ${id}`,
  year: '2020',
  posterPath: null,
});

describe('validation', () => {
  it('blocks export until required inputs are filled', () => {
    const errors = validateInput(favourites, favourites.defaults);

    expect(errors).toContain('Person is empty');
    expect(errors).toContain('Source is empty');
    expect(errors).toContain('Titles: pick at least 3');
  });

  it('passes a complete favourites post', () => {
    expect(
      validateInput(favourites, {
        ...favourites.defaults,
        person: 'Olivia Rodrigo',
        source: 'Interview, 2024',
        titles: [title(1), title(2), title(3)],
      }),
    ).toEqual([]);
  });

  it('wants a hand-picked trending list of exactly 10 or none', () => {
    expect(validateInput(trending, trending.defaults)).toEqual([]);
    expect(
      validateInput(trending, { ...trending.defaults, titles: [title(1)] }),
    ).toContain('Hand-picked list needs exactly 10 shows (or none)');
  });

  it('skips hidden fields', () => {
    expect(
      validateInput(trending, { ...trending.defaults, month: 'x' }),
    ).toEqual([]);
    expect(
      validateInput(trending, {
        ...trending.defaults,
        source: 'new' as const,
        month: 'x',
      }),
    ).toContain('Month: pick a month');
  });
});

describe('drafts', () => {
  it('keeps known keys of the right shape only', () => {
    expect(
      mergeWithDefaults(
        { name: 'a', titles: [] as number[], show: null as null | object },
        { name: 'b', titles: 'oops', show: { id: 1 }, extra: true },
      ),
    ).toEqual({ name: 'b', titles: [], show: { id: 1 } });
  });

  it('round-trips a post file and refuses other templates', () => {
    const input = { ...favourites.defaults, person: 'Olivia' };
    const file = JSON.stringify(toPostFile('favourites', input));

    expect(parsePostFile(file, favourites)).toEqual(input);
    expect(() => parsePostFile(file, trending)).toThrow('favourites');
    expect(() => parsePostFile('{}', favourites)).toThrow();
  });
});
