import { formatDate, pluralize } from '@lib/format';
import { WatchlistType } from '@lib/types';
import { HomeLayout } from '@modules/layout';
import { Navbar } from '@modules/navbar';
import { Avatar, Breadcrumb, Reveal, SavedTitleCard } from '@modules/ui';
import Head from 'next/head';

type WatchlistDetailsProps = {
  watchlist: WatchlistType;
};

export default function WatchlistDetails({ watchlist }: WatchlistDetailsProps) {
  const { title, description, author_id, movies = [], createdAt } = watchlist;
  const author = author_id?.username ?? 'Someone';

  return (
    <HomeLayout>
      <Head>
        <title>{`${title} — The Moviest`}</title>
      </Head>

      <Navbar />

      <div className="pt-8">
        <Breadcrumb
          items={[
            { label: 'Watchlists', href: '/watchlists' },
            { label: title },
          ]}
        />
      </div>

      <Reveal as="header" className="mt-6">
        <p className="mb-3 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[.18em] text-accent-soft">
          <span className="h-[7px] w-[7px] rounded-full bg-accent" />
          Watchlist
        </p>

        <h1 className="font-display text-[34px] font-bold leading-[1.05] tracking-[-.035em] sm:text-5xl lg:text-[58px]">
          {title}
        </h1>

        {description && (
          <p className="mt-4 max-w-[600px] text-base leading-relaxed text-white/75">
            {description}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] text-dimmer">
          <span className="inline-flex items-center gap-2">
            <Avatar name={author} size={22} />
            {author}
          </span>
          <span aria-hidden>·</span>
          <span>{pluralize(movies.length, 'title')}</span>
          {formatDate(createdAt) && (
            <>
              <span aria-hidden>·</span>
              <span>{formatDate(createdAt)}</span>
            </>
          )}
        </div>
      </Reveal>

      {movies.length > 0 ? (
        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-5">
          {movies.map((movie, i) => (
            <Reveal
              key={movie._id ?? `${movie.movieTitle}-${i}`}
              delay={(i % 5) * 70}
            >
              <SavedTitleCard movie={movie} />
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal>
          <p className="mt-12 rounded-card border border-white/10 bg-white/[.05] px-8 py-14 text-center text-[15px] text-dim">
            This list is still empty.
          </p>
        </Reveal>
      )}
    </HomeLayout>
  );
}

type ServerProps = {
  query: { id: string };
};

export async function getServerSideProps({ query }: ServerProps) {
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/watchlists?id=${query.id}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  if (!response.ok) {
    return { notFound: true };
  }

  const watchlist = (await response.json()).data;

  if (!watchlist) {
    return { notFound: true };
  }

  return {
    props: { watchlist },
  };
}
