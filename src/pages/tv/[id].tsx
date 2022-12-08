import { HomeLayout } from '@modules/layout';
import { getEnvString } from '@lib/env';
import { InferGetServerSidePropsType } from 'next';
import { Footer, MovieCard } from '@modules/ui';
import { getPlaiceholder } from 'plaiceholder';
import { Navbar } from '@modules/navbar';

export default function TvDetails({
  tvShow,
  imageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <HomeLayout hideFooter>
      <div className="flex flex-col justify-between min-h-screen">
        <Navbar />

        <div className="flex justify-center">
          <MovieCard movie={tvShow} imageProps={imageProps} />
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
  const tvShow = await (
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

  const { base64, img } = await getPlaiceholder(
    'https://image.tmdb.org/t/p/original' + tvShow.poster_path,
    { size: 64 }
  );

  return {
    props: {
      tvShow,
      imageProps: {
        src: img.src,
        alt: '',
        blurDataURL: base64,
      },
    },
  };
}
