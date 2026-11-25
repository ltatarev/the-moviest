import { describe, expect, it } from 'vitest';
import { interleave, pickServices } from './regional';
import type { MovieType } from './types';

function titles(prefix: string, count: number): Array<MovieType> {
  return Array.from(
    { length: count },
    (_, i) => ({ id: `${prefix}${i}` }) as MovieType,
  );
}

describe('pickServices', () => {
  it('keeps the known services in a fixed order, under short labels', () => {
    expect(
      pickServices([
        { provider_id: 337, provider_name: 'Disney Plus' },
        { provider_id: 15, provider_name: 'Hulu' },
        { provider_id: 119, provider_name: 'Amazon Prime Video' },
        { provider_id: 8, provider_name: 'Netflix' },
      ]),
    ).toEqual([
      { id: 8, label: 'Netflix' },
      { id: 119, label: 'Prime Video' },
      { id: 337, label: 'Disney+' },
    ]);
  });
});

describe('interleave', () => {
  it('alternates shows and films and marks each one', () => {
    const result = interleave(titles('s', 3), titles('f', 3), 4);

    expect(result.map((item) => `${item.media_type}:${item.id}`)).toEqual([
      'tv:s0',
      'movie:f0',
      'tv:s1',
      'movie:f1',
    ]);
  });

  it('fills from the other list when one runs out', () => {
    const result = interleave(titles('s', 1), titles('f', 4), 4);

    expect(result.map((item) => item.id)).toEqual(['s0', 'f0', 'f1', 'f2']);
  });
});
