import { HomeLayout } from '@modules/layout';
import { Navbar } from '@modules/navbar';
import { getPlaiceholder } from 'plaiceholder';
import { Footer, WatchlistCard } from '@modules/ui';
import { InferGetServerSidePropsType } from 'next';

export default function WatchlistDetails({
  watchlist,
  imageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <HomeLayout hideFooter>
      <div className="flex flex-col justify-between min-h-screen">
        <Navbar />
        <div className="flex justify-center">
          <WatchlistCard watchlist={watchlist} imageProps={imageProps} />
        </div>
        <Footer />
      </div>
    </HomeLayout>
  );
}

type Query = {
  id: number;
};

type ServerProps = {
  query: Query;
};

export async function getServerSideProps({ query }: ServerProps) {
  const watchlist = await (
    await fetch(`${process.env.API_BASE_URL}/api/watchlists?id=${query.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

  let img;
  let base64;
  let posterPath;

  try {
    posterPath = watchlist.data.movies[0].moviePosterPath;
  } catch {
    posterPath = null;
  }

  try {
    const res = await getPlaiceholder(posterPath);
    img = res.img;
    base64 = res.base64;
  } catch {
    base64 = 'https://dummyimage.com/210x210/8289ed/8289ed.jpg';

    img = {
      src: '/assets/placeholder.png',
      blurDataUrl: 'https://dummyimage.com/210x210/8289ed/8289ed.jpg',
    };
  }

  return {
    props: {
      watchlist: watchlist.data,
      imageProps: {
        src: img.src,
        alt: '',
        blurDataURL: base64,
      },
    },
  };
}
