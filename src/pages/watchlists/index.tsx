import { WatchlistType } from '@lib/types';
import { HomeLayout } from '@modules/layout';
import { Navbar } from '@modules/navbar';
import { SmallCard } from '@modules/ui';

type WatchlistProps = {
  watchlists: Array<WatchlistType>;
};

export default function Watchlist({ watchlists }: WatchlistProps) {
  return (
    <HomeLayout>
      <Navbar />
      <div className="flex flex-wrap self-center place-content-center">
        {watchlists.map((watchlist) => (
          <SmallCard key={watchlist._id.toString()} watchlist={watchlist} />
        ))}
      </div>
    </HomeLayout>
  );
}

export async function getServerSideProps() {
  const watchlists = await (
    await fetch(`${process.env.API_BASE_URL}/api/watchlists`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

  return {
    props: {
      watchlists: watchlists.data,
    },
  };
}
