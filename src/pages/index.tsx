import Head from 'next/head';
import { HomeLayout } from '@modules/layout';
import { getEnvString } from '@lib/env';
import { Carousel, Footer } from '@modules/ui';
import { Navbar } from '@modules/navbar';
import Image from 'next/image';
import { Card } from '../modules/ui/Card';
import { MovieType } from '@lib/types';

interface HomeProps {
  trendingMovies: Array<MovieType>;
  trendingShows: Array<MovieType>;
}

export default function Home({ trendingMovies, trendingShows }: HomeProps) {
  const featuredMovies = trendingMovies.slice(0, 3);
  const otherMovies = trendingMovies.slice(3, 8);

  const featuredShows = trendingShows.slice(0, 3);
  return (
    <div>
      <Head>
        <title>The Moviest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <div className="container">
          <Navbar />

          <div className="py-10 min-h-full">
            <div className="flex flex-row items-end">
              <Image
                src="/assets/video-camera.png"
                width={80}
                height={80}
                alt=""
              />
              <p className="text-6xl text-slate-100 ml-5 font-semibold border-b-8 border-blue-900">
                Trending now
              </p>
            </div>
            <Carousel data={featuredMovies} />
            <div className="flex flex-row flex-wrap place-content-between -mx-1">
              {otherMovies.map((movie) => (
                <Card key={movie.id} {...movie} />
              ))}
            </div>
          </div>
          <div className="py-10 h-full">
            <div className="flex flex-row items-end place-content-end mt-10">
              <p className="text-6xl text-slate-100 mr-5 font-semibold text-right border-b-8 border-pink-900">
                Popular on TV
              </p>
              <Image src="/assets/tv.png" width={70} height={70} alt="" />
            </div>
            <Carousel data={featuredShows} />
          </div>

          <Footer />
        </div>
      </HomeLayout>
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

  const trendingShows = await (
    await fetch(
      'https://api.themoviedb.org/3/trending/tv/week?api_key=' +
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
    props: {
      trendingMovies: trendingMovies.results,
      trendingShows: trendingShows.results,
    },
  };
}
