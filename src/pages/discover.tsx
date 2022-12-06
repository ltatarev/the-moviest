import Head from 'next/head';
import { HomeLayout } from '@modules/layout';
import { getEnvString } from '@lib/env';
import { Footer } from '@modules/ui';
import { Navbar } from '@modules/navbar';
import Image from 'next/image';
import { MovieType } from '@lib/types';
import { FeaturedCard } from '@modules/ui/FeaturedCard';

interface HomeProps {
  movies: Array<MovieType>;
  shows: Array<MovieType>;
}

export default function Discover({ movies, shows }: HomeProps) {
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
            <div className="flex flex-row ml-5 items-end">
              <Image src="/assets/ticket.png" width={80} height={80} alt="" />
              <p className="text-4xl sm:text-6xl text-slate-100 ml-5 font-semibold border-b-8 border-blue-900">
                Movies in theathers
              </p>
            </div>
            <div className="flex flex-row">
              {movies.slice(0, 4).map((movie) => (
                <FeaturedCard key={movie.id} {...movie} />
              ))}
            </div>
          </div>

          <div className="py-10 min-h-full">
            <div className="flex flex-row mr-5 items-end place-content-end mt-10">
              <p className="text-4xl sm:text-6xl text-slate-100 mr-5 font-semibold text-right border-b-8 border-pink-900">
                Popular on TV
              </p>
              <Image src="/assets/tvflix.png" width={80} height={80} alt="" />
            </div>
            <div className="flex flex-row">
              {shows.slice(0, 4).map((movie) => (
                <FeaturedCard key={movie.id} {...movie} />
              ))}
            </div>
          </div>

          <Footer />
        </div>
      </HomeLayout>
    </div>
  );
}

export async function getServerSideProps() {
  const movies = await (
    await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=' +
        getEnvString('TMDB_KEY') +
        '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2022',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  ).json();

  const shows = await (
    await fetch(
      'https://api.themoviedb.org/3/discover/tv?api_key=' +
        getEnvString('TMDB_KEY') +
        '&language=en-US&sort_by=popularity.desc&first_air_date_year=2020&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_original_language=en',

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
      movies: movies.results,
      shows: shows.results,
    },
  };
}
