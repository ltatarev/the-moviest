import { formatRating, getTitle, getYear } from '@lib/format';
import { getGenreNames, getImageSrc } from '@lib/tmdb';
import { ContentType, MovieType } from '@lib/types';
import Link from 'next/link';
import { Star } from './Icons';
import { PosterImage } from './PosterImage';

type PosterCardProps = {
  movie: MovieType;
  type: ContentType;
  /** Renders a numbered badge, e.g. 3 → "03". */
  rank?: number;
};

export function PosterCard({ movie, type, rank }: PosterCardProps) {
  const title = getTitle(movie);
  const rating = formatRating(movie.vote_average);
  const year = getYear(movie);
  const genres = getGenreNames(movie.genre_ids, 2);

  return (
    <Link
      href={`/${type}/${movie.id}`}
      className="group block transition-transform duration-300 ease-silk hover:-translate-y-1.5"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-card border border-white/10 transition-all duration-300 ease-silk group-hover:border-accent/45 group-hover:shadow-lift">
        <PosterImage
          src={getImageSrc(movie.poster_path, 'w500')}
          title={title}
          sizes="(max-width: 680px) 50vw, (max-width: 1100px) 33vw, 20vw"
          label={false}
          imageClassName="transition-transform duration-500 ease-silk group-hover:scale-[1.06]"
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
