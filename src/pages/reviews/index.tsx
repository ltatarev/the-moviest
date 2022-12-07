import { WatchlistType } from '@lib/types';
import { HomeLayout } from '@modules/layout';
import { Navbar } from '@modules/navbar';
import { SmallCard } from '@modules/ui';

type ReviewsProps = {
  watchlists: Array<WatchlistType>;
};

export default function Reviews({ watchlists }: ReviewsProps) {
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
    await fetch(`${process.env.API_BASE_URL}/api/reviews`, {
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
