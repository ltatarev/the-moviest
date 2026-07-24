import { formatDate, truncate } from '@lib/format';
import { getStoredImageSrc } from '@lib/tmdb';
import { ReviewType } from '@lib/types';
import Link from 'next/link';
import { Avatar } from './Avatar';
import { Star } from './Icons';
import { PosterImage } from './PosterImage';

export function ReviewCard({ review }: { review: ReviewType }) {
  const { _id, title, reviewText, rating, movie, author_id, createdAt } =
    review;
  const id = _id.toString();
  const posted = formatDate(createdAt);

  return (
    <Link
      href={`/reviews/${id}`}
      className="group flex gap-5 rounded-card border border-white/10 bg-white/[.05] p-5 transition-all duration-300 ease-silk hover:-translate-y-1.5 hover:border-white/20"
    >
      <div className="relative aspect-[2/3] w-[86px] flex-none overflow-hidden rounded-xl border border-white/10">
        <PosterImage
          src={getStoredImageSrc(movie?.moviePosterPath, 'w342')}
          title={movie?.movieTitle ?? title}
          sizes="86px"
          label={false}
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug tracking-[-.02em] transition-colors duration-200 group-hover:text-accent-soft">
            {title}
          </h3>

          {Boolean(rating) && (
            <span className="flex flex-none items-center gap-1 rounded-lg bg-accent px-2.5 py-1 text-xs font-bold text-[#180810]">
              <Star width={11} height={11} />
              {rating}
            </span>
          )}
        </div>

        {movie?.movieTitle && (
          <p className="mt-1 truncate text-[13px] text-dim">
            on {movie.movieTitle}
          </p>
        )}

        {reviewText && (
          <p className="mt-3 text-[13px] leading-relaxed text-white/70">
            {truncate(reviewText, 150)}
          </p>
        )}

        <span className="mt-4 inline-flex items-center gap-2 text-xs text-dimmer">
          <Avatar name={author_id?.username ?? 'Someone'} size={18} />
          {author_id?.username ?? 'Someone'}
          {posted && (
            <>
              <span aria-hidden>·</span>
              {posted}
            </>
          )}
        </span>
      </div>
    </Link>
  );
}
