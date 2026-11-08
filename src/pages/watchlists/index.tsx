import type { GetServerSidePropsContext } from 'next';
import { setPublicPageCache } from '@lib/cache';
import { WatchlistType } from '@lib/types';
import { HomeLayout } from '@modules/layout';
import { Navbar } from '@modules/navbar';
import { PageHeader, Reveal, WatchlistCard } from '@modules/ui';
import Head from 'next/head';

type WatchlistsProps = {
  watchlists: Array<WatchlistType>;
};

export default function Watchlists({ watchlists }: WatchlistsProps) {
  return (
    <HomeLayout>
      <Head>
        <title>Watchlists — The Moviest</title>
      </Head>

      <Navbar />

      <PageHeader
        eyebrow="From the community"
        title="Watchlists worth stealing"
        description="Cold autumn days, comfort rewatches, the best of the year — lists made by people, not algorithms."
      />

      {watchlists.length > 0 ? (
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {watchlists.map((watchlist, i) => (
            <Reveal key={watchlist._id.toString()} delay={(i % 3) * 70}>
              <WatchlistCard watchlist={watchlist} />
            </Reveal>
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </HomeLayout>
  );
}

function EmptyState() {
  return (
    <Reveal>
      <p className="mt-12 rounded-card border border-white/10 bg-white/[.05] px-8 py-14 text-center text-[15px] text-dim">
        No watchlists yet.
      </p>
    </Reveal>
  );
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  setPublicPageCache(res);
  const response = await fetch(`${process.env.API_BASE_URL}/api/watchlists`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const watchlists = response.ok ? (await response.json()).data : [];

  return {
    props: {
      watchlists: watchlists ?? [],
    },
  };
}
