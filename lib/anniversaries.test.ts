import { describe, expect, it } from 'vitest';
import { anniversaryParams, monthYearsAgo } from './anniversaries';

describe('monthYearsAgo', () => {
  it('gives the whole calendar month, years ago', () => {
    expect(monthYearsAgo(new Date('2026-11-25T12:00:00Z'), 10)).toEqual({
      from: '2016-11-01',
      to: '2016-11-30',
    });
  });

  it('knows a leap February', () => {
    expect(monthYearsAgo(new Date('2030-02-03T00:00:00Z'), 10).to).toBe(
      '2020-02-29',
    );
  });
});

describe('anniversaryParams', () => {
  it('asks for the most-voted films of that month', () => {
    const params = Object.fromEntries(
      anniversaryParams(new Date('2026-11-25T12:00:00Z'), 25),
    );

    expect(params).toMatchObject({
      sort_by: 'vote_count.desc',
      'primary_release_date.gte': '2001-11-01',
      'primary_release_date.lte': '2001-11-30',
    });
  });
});
