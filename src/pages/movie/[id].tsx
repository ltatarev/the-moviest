import type { ServerResponse } from 'node:http';
import { setPublicPageCache } from '@lib/cache';
import { toTitleDetail } from '@lib/detail';
import { getTitleDescription } from '@lib/seo';
import { getDetailEndpoint, getImageSrc } from '@lib/tmdb';
import { TitleDetailType, TitleResponseType } from '@lib/types';
import { TitleDetail } from '@modules/detail';
import { HomeLayout } from '@modules/layout';
import { Navbar } from '@modules/navbar';
import { Seo } from '@modules/ui';

type MovieDetailsProps = {
  detail: TitleDetailType;
};

export default function MovieDetails({ detail }: MovieDetailsProps) {
  return (
    <HomeLayout>
      <Seo
        title={detail.year ? `${detail.title} (${detail.year})` : detail.title}
        description={getTitleDescription(detail)}
        path={`/movie/${detail.id}`}
        image={getImageSrc(detail.backdropPath ?? detail.posterPath, 'w1280')}
        type="video.movie"
      />

      <Navbar />
      <TitleDetail detail={detail} />
    </HomeLayout>
  );
}

type ServerProps = {
  query: { id: string };
  res: ServerResponse;
};

export async function getServerSideProps({ query, res }: ServerProps) {
  setPublicPageCache(res);
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
