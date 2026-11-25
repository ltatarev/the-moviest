import type { ContentType, MovieType } from '@lib/types';
import { PosterCard, Reveal } from '@modules/ui';
import cn from 'classnames';
import { useState } from 'react';

type PopularSectionProps = {
  movies: Array<MovieType>;
  shows: Array<MovieType>;
};

const OPTIONS: Array<{ type: ContentType; label: string }> = [
  { type: 'movie', label: 'Movies' },
  { type: 'tv', label: 'TV' },
];

/**
 * Popular films or shows, with a switch between the two. The server sends
 * both lists, so the switch needs no request.
 */
export function PopularSection({ movies, shows }: PopularSectionProps) {
  const [type, setType] = useState<ContentType>('movie');
  const items = type === 'movie' ? movies : shows;

  return (
    <section aria-labelledby="popular-heading">
      <Reveal className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-3">
        <h2
          id="popular-heading"
          className="font-display text-[26px] font-semibold tracking-[-.025em] sm:text-[32px]"
        >
          Popular
        </h2>
        <div
          role="group"
          aria-label="Films or TV"
          className="flex gap-0.5 rounded-full border border-white/10 bg-white/[.05] p-1"
        >
          {OPTIONS.map((option) => (
            <button
              key={option.type}
              type="button"
              aria-pressed={option.type === type}
              onClick={() => setType(option.type)}
              className={cn(
                'rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors duration-200 ease-silk',
                option.type === type
                  ? 'bg-accent/20 font-semibold text-accent-soft'
                  : 'text-dim hover:bg-white/[.06] hover:text-chalk',
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3">
        {items.map((item) => (
          <PosterCard key={`${type}-${item.id}`} movie={item} type={type} />
        ))}
      </div>
    </section>
  );
}
