import { toTitleDetail } from '@lib/detail';
import { getDetailEndpoint } from '@lib/tmdb';
import { TitleDetailType, TitleResponseType } from '@lib/types';
import { TitleDetail } from '@modules/detail';
import { HomeLayout } from '@modules/layout';
import { Navbar } from '@modules/navbar';
import Head from 'next/head';

type MovieDetailsProps = {
  detail: TitleDetailType;
};

export default function MovieDetails({ detail }: MovieDetailsProps) {
  return (
    <HomeLayout>
      <Head>
        <title>{`${detail.title} — The Moviest`}</title>
      </Head>

      <Navbar />
      <TitleDetail detail={detail} />
    </HomeLayout>
  );
}

type ServerProps = {
  query: { id: string };
};

export async function getServerSideProps({ query }: ServerProps) {
  const response = await fetch(getDetailEndpoint('movie', query.id), {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    return { notFound: true };
  }

  const movie = (await response.json()) as TitleResponseType;

  return {
    props: {
      detail: toTitleDetail(movie, 'movie'),
    },
  };
}
