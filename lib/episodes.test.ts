import { describe, expect, it } from 'vitest';
import {
  getEpisodeAnswer,
  getEpisodeFaq,
  MIN_VOTES,
  summarizeEpisodes,
} from './episodes';
import type { HeatmapData } from './studio/types';

function show(seasons: HeatmapData['seasons']): HeatmapData {
  return {
    show: {
      id: 1396,
      title: 'Breaking Bad',
      posterPath: null,
      firstYear: '2008',
      lastYear: '2013',
      inProduction: false,
    },
    seasons,
  };
}

const ep = (
  number: number,
  vote: number,
  votes = 100,
  name = `E${number}`,
) => ({
  number,
  name,
  vote,
  votes,
});

describe('summarizeEpisodes', () => {
  it('ranks episodes, ignores thin votes and breaks ties by position', () => {
    const summary = summarizeEpisodes(
      show([
        {
          number: 1,
          episodes: [ep(1, 8.0), ep(2, 9.0), ep(3, 9.9, MIN_VOTES - 1)],
        },
        { number: 2, episodes: [ep(1, 9.0), ep(2, 6.5)] },
      ]),
    );

    expect(summary.episodes).toBe(5);
    expect(summary.rated).toBe(4);
    expect(summary.top.map((e) => [e.season, e.episode])).toEqual([
      [1, 2],
      [2, 1],
      [1, 1],
      [2, 2],
    ]);
    expect(summary.seasons.map((s) => s.average)).toEqual([8.5, 7.8]);
    expect(summary.bestSeason?.number).toBe(1);
    expect(summary.worstSeason?.number).toBe(2);
  });

  it('gives no worst list or season ranking when the data is thin', () => {
    const summary = summarizeEpisodes(
      show([{ number: 1, episodes: [ep(1, 8.0), ep(2, 7.0)] }]),
    );

    expect(summary.bottom).toEqual([]);
    expect(summary.bestSeason).toBeNull();
  });
});

describe('getEpisodeAnswer', () => {
  it('names the best episode, its position and its score', () => {
    const summary = summarizeEpisodes(
      show([{ number: 5, episodes: [ep(14, 9.9, 812, 'Ozymandias')] }]),
    );

    expect(getEpisodeAnswer(summary)).toBe(
      'The best-rated episode of Breaking Bad is “Ozymandias” (season 5, episode 14), with 9.9/10 from 812 TMDB users.',
    );
  });

  it('says so when no episode has enough votes', () => {
    const summary = summarizeEpisodes(
      show([{ number: 1, episodes: [ep(1, 8, 1)] }]),
    );

    expect(getEpisodeAnswer(summary)).toMatch(/does not have enough/);
    expect(getEpisodeFaq(summary)).toEqual([]);
  });
});
