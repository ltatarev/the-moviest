import { HomeLayout } from '@modules/layout';
import { InferGetServerSidePropsType } from 'next';
import { getBlurredImage } from '@lib/plaiceholder';
import { getEnvString } from '@lib/env';
import { Footer, MovieCard } from '@modules/ui';
import { Navbar } from '@modules/navbar';

export default function MovieDetails({
  movie,
  imageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <HomeLayout hideFooter>
      <div className="flex flex-col justify-between min-h-screen">
        <Navbar />

        <div className="flex justify-center">
          <MovieCard movie={movie} imageProps={imageProps} />
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
        'TMDB_KEY',
      )}&language=en-US`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  ).json();

  const { src, base64 } = await getBlurredImage(
    'https://image.tmdb.org/t/p/original' + movie.poster_path,
  );

  return {
    props: {
      movie,
      imageProps: {
        src,
        alt: '',
        blurDataURL: base64,
      },
    },
  };
}
