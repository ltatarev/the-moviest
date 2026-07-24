import { getStoredImageSrc } from '@lib/tmdb';
import { ListedMovieType } from '@lib/types';
import Link from 'next/link';
import { PosterImage } from './PosterImage';

/**
 * A title as it sits on a watchlist. Only links out when the saved record kept
 * its TMDB id — the oldest entries did not.
 */
export function SavedTitleCard({ movie }: { movie: ListedMovieType }) {
  const title = movie.movieTitle ?? 'Untitled';

  const card = (
    <>
      <div className="relative aspect-[2/3] overflow-hidden rounded-card border border-white/10 transition-all duration-300 ease-silk group-hover:border-accent/45 group-hover:shadow-lift">
        <PosterImage
          src={getStoredImageSrc(movie.moviePosterPath, 'w342')}
          title={title}
          sizes="(max-width: 680px) 50vw, (max-width: 1100px) 33vw, 20vw"
          imageClassName="transition-transform duration-500 ease-silk group-hover:scale-[1.06]"
        />
      </div>

      <h3 className="mt-3.5 truncate text-[15px] font-semibold tracking-[-.01em] transition-colors duration-200 group-hover:text-accent-soft">
        {title}
      </h3>
    </>
  );

  if (!movie.movieId) {
    return <div className="group">{card}</div>;
  }

  return (
    <Link
      href={`/movie/${movie.movieId}`}
      className="group block transition-transform duration-300 ease-silk hover:-translate-y-1.5"
    >
      {card}
    </Link>
  );
}
