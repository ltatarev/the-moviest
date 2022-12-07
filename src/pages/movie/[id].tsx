import { HomeLayout } from '@modules/layout';
import { getEnvString } from '@lib/env';
import { Footer, MovieCard } from '@modules/ui';
import { Navbar } from '@modules/navbar';
import { MovieType } from '@lib/types';

interface MovieDetailsProps {
  movie: MovieType;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <HomeLayout>
      <div className="flex flex-col justify-between min-h-screen">
        <Navbar />

        <div className="flex justify-center">
          <MovieCard {...movie} />
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
  const movie = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/${query.id}?api_key=${getEnvString(
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
      movie,
    },
  };
}
