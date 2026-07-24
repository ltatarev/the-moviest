import { formatRating, getTitle, getYear } from '@lib/format';
import { BLUR_DATA_URL, getGenreNames, getImageSrc } from '@lib/tmdb';
import { ContentType, MovieType } from '@lib/types';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent, useState } from 'react';
import { Check, Plus, Star } from './Icons';

type PosterCardProps = {
  movie: MovieType;
  type: ContentType;
  /** Renders a numbered badge, e.g. 3 → "03". */
  rank?: number;
};

export function PosterCard({ movie, type, rank }: PosterCardProps) {
  const [saved, setSaved] = useState(false);

  const title = getTitle(movie);
  const rating = formatRating(movie.vote_average);
  const year = getYear(movie);
  const genres = getGenreNames(movie.genre_ids, 2);

  function toggleSaved(event: MouseEvent<HTMLButtonElement>) {
    // The whole card is a link — keep the bookmark from navigating.
    event.preventDefault();
    setSaved((current) => !current);
  }

  return (
    <Link
      href={`/${type}/${movie.id}`}
      className="group block transition-transform duration-300 ease-silk hover:-translate-y-1.5"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-card border border-white/10 transition-all duration-300 ease-silk group-hover:border-accent/45 group-hover:shadow-lift">
        <Image
          src={getImageSrc(movie.poster_path, 'w500')}
          alt=""
          fill
          sizes="(max-width: 680px) 50vw, (max-width: 1100px) 33vw, 20vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover transition-transform duration-500 ease-silk group-hover:scale-[1.06]"
        />

        {/* Light sweep across the poster on hover. */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 ease-silk group-hover:left-[150%]"
        />

        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080410]/85 via-[#080410]/10 to-transparent"
        />

        {rank !== undefined && (
          <span className="absolute left-3.5 top-3.5 rounded-lg border border-white/[.14] bg-[#080410]/55 px-2 py-1 font-display text-[13px] font-bold backdrop-blur-md">
            {String(rank).padStart(2, '0')}
          </span>
        )}

        <button
          type="button"
          onClick={toggleSaved}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${title}` : `Save ${title}`}
          className={cn(
            'absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-white/[.14] bg-[#080410]/50 backdrop-blur-md transition-all duration-300 ease-silk',
            'hover:scale-110 hover:bg-accent hover:text-white active:scale-95',
            'focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100',
            saved && 'border-accent/60 text-accent-soft md:opacity-100',
          )}
        >
          <Plus
            width={16}
            height={16}
            className={cn(
              'absolute transition-all duration-300 ease-silk',
              saved && 'rotate-90 scale-0 opacity-0',
            )}
          />
          <Check
            width={16}
            height={16}
            className={cn(
              'absolute transition-all duration-300 ease-silk',
              saved ? 'opacity-100' : '-rotate-90 scale-0 opacity-0',
            )}
          />
        </button>

        <b className="absolute bottom-4 left-4 right-4 font-display text-lg font-bold leading-tight tracking-[-.02em] drop-shadow-text">
          {title}
        </b>
      </div>

      <div className="mt-3.5 flex items-baseline justify-between gap-2.5">
        <h3 className="truncate text-[15px] font-semibold tracking-[-.01em] transition-colors duration-200 group-hover:text-accent-soft">
          {title}
        </h3>
        {rating && (
          <span className="flex flex-none items-center gap-1 text-[13px] text-dimmer">
            <Star width={12} height={12} className="text-accent-soft" />
            {rating}
          </span>
        )}
      </div>

      <p className="mt-1 truncate text-[13px] text-dim">
        {[year, ...genres].filter(Boolean).join(' · ')}
      </p>
    </Link>
  );
}
