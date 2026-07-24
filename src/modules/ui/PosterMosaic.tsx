import { getStoredImageSrc, getTileGradient } from '@lib/tmdb';
import { ListedMovieType } from '@lib/types';
import { PosterImage } from './PosterImage';

type PosterMosaicProps = {
  movies: Array<ListedMovieType>;
  /** Seeds the fallback gradient so an empty list still has a colour. */
  seed: string;
};

/**
 * Up to four posters tiled behind a list's title. Fewer than four titles just
 * means fewer, larger tiles — the grid follows the list rather than padding it
 * out with placeholders.
 */
export function PosterMosaic({ movies, seed }: PosterMosaicProps) {
  const tiles = movies.slice(0, 4);

  if (tiles.length === 0) {
    return (
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: getTileGradient(seed) }}
      />
    );
  }

  return (
    <div
      aria-hidden
      className="absolute inset-0 grid opacity-90"
      style={{
        gridTemplateColumns: `repeat(${tiles.length > 1 ? 2 : 1}, 1fr)`,
        gridAutoRows: '1fr',
      }}
    >
      {tiles.map((movie, i) => (
        <div
          key={movie._id ?? `${movie.movieTitle}-${i}`}
          className="relative overflow-hidden"
          style={{
            // Three posters: the first spans the full left column.
            gridRow: tiles.length === 3 && i === 0 ? 'span 2' : undefined,
          }}
        >
          <PosterImage
            src={getStoredImageSrc(movie.moviePosterPath, 'w342')}
            title={movie.movieTitle ?? `${seed}-${i}`}
            sizes="(max-width: 680px) 50vw, 25vw"
            label={false}
          />
        </div>
      ))}
    </div>
  );
}
