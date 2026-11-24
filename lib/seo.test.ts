import { describe, expect, it } from 'vitest';
import { absoluteUrl, getTitleDescription, truncate } from './seo';
import type { TitleDetailType } from './types';

const film: TitleDetailType = {
  id: '693134',
  type: 'movie',
  title: 'Dune: Part Two',
  tagline: '',
  overview:
    'Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.',
  posterPath: null,
  backdropPath: null,
  year: '2024',
  length: '2h 47m',
  releaseDate: '2024-02-27',
  runtimeMinutes: 167,
  seasons: null,
  episodes: null,
  genres: ['Science Fiction', 'Adventure'],
  score: 81,
  votes: 5000,
  cast: [
    { id: 1, name: 'Timothée Chalamet', character: 'Paul', profile_path: null },
    { id: 2, name: 'Zendaya', character: 'Chani', profile_path: null },
    {
      id: 3,
      name: 'Rebecca Ferguson',
      character: 'Jessica',
      profile_path: null,
    },
    { id: 4, name: 'Javier Bardem', character: 'Stilgar', profile_path: null },
  ],
  crew: [{ role: 'Director', name: 'Denis Villeneuve' }],
  facts: [],
  similar: [],
  watch: {},
};

describe('getTitleDescription', () => {
  it('starts with what the title is, who made it and who is in it', () => {
    const description = getTitleDescription(film);

    expect(description).toMatch(
      /^Dune: Part Two \(2024\) is a science fiction and adventure film, 2h 47m\. Directed by Denis Villeneuve\. With Timothée Chalamet, Zendaya and Rebecca Ferguson\./,
    );
    expect(description.length).toBeLessThanOrEqual(160);
  });

  it('skips the parts that TMDB does not supply', () => {
    expect(
      getTitleDescription({
        ...film,
        type: 'tv',
        year: '',
        length: '',
        genres: [],
        cast: [],
        crew: [],
        overview: '',
      }),
    ).toBe('Dune: Part Two is a TV series.');
  });
});

describe('truncate', () => {
  it('cuts at a word boundary and adds an ellipsis', () => {
    expect(truncate('one two three four', 12)).toBe('one two…');
    expect(truncate('  short   text ')).toBe('short text');
  });
});

describe('absoluteUrl', () => {
  it('adds the site origin to a path and keeps an absolute URL', () => {
    expect(absoluteUrl('/movie/1')).toBe(
      'https://the-moviest.vercel.app/movie/1',
    );
    expect(absoluteUrl('https://image.tmdb.org/t/p/w780/a.jpg')).toBe(
      'https://image.tmdb.org/t/p/w780/a.jpg',
    );
  });
});
