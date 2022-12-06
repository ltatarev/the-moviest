import Head from 'next/head';
import { HomeLayout } from '@modules/layout';
import { getEnvString } from '@lib/env';
import { Footer, MovieCard } from '@modules/ui';
import { Navbar } from '@modules/navbar';
import { MovieType } from '@lib/types';

interface MovieDetailsProps {
  movie: MovieType;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  console.log(movie);

  return (
    <div>
      <Head>
        <title>The Moviest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <div className="container">
          <Navbar />

          <div className="container h-[65vh] flex justify-center">
            <MovieCard {...movie} />
          </div>

          <Footer />
        </div>
      </HomeLayout>
    </div>
  );
}

type ServerProps = {
  query: object;
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
