import Head from 'next/head';
import { HomeLayout } from '@modules/layout';
import { getEnvString } from '@lib/env';
import { CardsCarousel } from '@modules/carousel/Carousel';

export default function Home({ trendingMovies }) {
  const featuredMovies = trendingMovies.slice(0, 3);

  return (
    <div>
      <Head>
        <title>The Moviest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeLayout>
          <CardsCarousel data={featuredMovies} />
        </HomeLayout>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const trendingMovies = await (
    await fetch(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=' +
        getEnvString('TMDB_KEY'),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  ).json();

  return {
    props: { trendingMovies: trendingMovies.results },
  };
}
