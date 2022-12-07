import { HomeLayout } from '@modules/layout';
import { getEnvString } from '@lib/env';
import { Carousel, Card } from '@modules/ui';
import { Navbar } from '@modules/navbar';
import Image from 'next/image';
import { MovieType } from '@lib/types';

interface HomeProps {
  trendingMovies: Array<MovieType>;
  trendingShows: Array<MovieType>;
}

export default function Home({ trendingMovies, trendingShows }: HomeProps) {
  const featuredMovies = trendingMovies.slice(0, 3);
  const otherMovies = trendingMovies.slice(3, 8);

  const featuredShows = trendingShows.slice(0, 3);
  const otherShows = trendingShows.slice(3, 8);

  return (
    <HomeLayout>
      <div className="container">
        <Navbar />
        <div className="container py-10 min-h-full">
          <div className="flex flex-row items-end">
            <Image
              src="/assets/video-camera.png"
              width={80}
              height={80}
              alt=""
            />
            <p className="text-4xl sm:text-6xl text-slate-100 ml-5 font-semibold border-b-8 border-blue-900">
              Trending now
            </p>
          </div>
          <Carousel type="movie" data={featuredMovies} />
          <div className="flex flex-row flex-wrap place-content-between -mx-1">
            {otherMovies.map((movie) => (
              <Card type="movie" key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        <div className="py-10 h-full">
          <div className="flex flex-row items-end place-content-end mt-10">
            <p className="text-4xl sm:text-6xl text-slate-100 mr-5 font-semibold text-right border-b-8 border-pink-900">
              Popular on TV
            </p>
            <Image src="/assets/tv.png" width={70} height={70} alt="" />
          </div>
          <Carousel type="tv" data={featuredShows} />
          <div className="flex flex-row flex-wrap place-content-between -mx-1">
            {otherShows.map((movie) => (
              <Card type="tv" key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
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
