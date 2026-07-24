import { pluralize } from '@lib/format';
import { WatchlistType } from '@lib/types';
import Link from 'next/link';
import { Avatar } from './Avatar';
import { PosterMosaic } from './PosterMosaic';

export function WatchlistCard({ watchlist }: { watchlist: WatchlistType }) {
  const { _id, title, description, author_id, movies = [] } = watchlist;
  const id = _id.toString();

  return (
    <Link
      href={`/watchlists/${id}`}
      className="group relative block aspect-[16/10] overflow-hidden rounded-card border border-white/10 transition-all duration-300 ease-silk hover:-translate-y-1.5 hover:border-white/20"
    >
      <PosterMosaic movies={movies} seed={id} />

      <span
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,4,16,.94)_12%,rgba(8,4,16,.25)_70%)]"
      />

      <div className="absolute inset-x-6 bottom-5">
        <h3 className="font-display text-xl font-semibold tracking-[-.02em] transition-colors duration-200 group-hover:text-accent-soft">
          {title}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-[13px] text-dim">
          {description || pluralize(movies.length, 'title')}
        </p>

        <span className="mt-3 inline-flex items-center gap-2 text-xs text-dimmer">
          <Avatar name={author_id?.username ?? 'Someone'} size={18} />
          {author_id?.username ?? 'Someone'}
          {description && (
            <>
              <span aria-hidden>·</span>
              {pluralize(movies.length, 'title')}
            </>
          )}
        </span>
      </div>
    </Link>
  );
}
