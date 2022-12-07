import { HomeLayout } from '@modules/layout';
import { getEnvString } from '@lib/env';
import { Footer, MovieCard } from '@modules/ui';
import { Navbar } from '@modules/navbar';
import { MovieType } from '@lib/types';

interface MovieDetailsProps {
  tv: MovieType;
}

export default function TvDetails({ tv }: MovieDetailsProps) {
  return (
    <HomeLayout hideFooter>
      <div className="flex flex-col justify-between min-h-screen">
        <Navbar />

        <div className="flex justify-center">
          <MovieCard {...tv} />
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
  const tv = await (
    await fetch(
      `https://api.themoviedb.org/3/tv/${query.id}?api_key=${getEnvString(
        'TMDB_KEY'
      )}&language=en-US`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  ).json();

  return {
    props: {
      tv,
    },
  };
}
