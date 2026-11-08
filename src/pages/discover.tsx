import type { GetServerSidePropsContext } from 'next';
import { setPublicPageCache } from '@lib/cache';
import { fetchResults, getListEndpoint } from '@lib/tmdb';
import { MovieType } from '@lib/types';
import { HomeLayout } from '@modules/layout';
import { Navbar } from '@modules/navbar';
import { PageHeader, Rail, Reveal, SectionHeader } from '@modules/ui';
import Head from 'next/head';

interface DiscoverProps {
  inCinemas: Array<MovieType>;
  popularShows: Array<MovieType>;
  topRated: Array<MovieType>;
}

export default function Discover({
  inCinemas,
  popularShows,
  topRated,
}: DiscoverProps) {
  return (
    <HomeLayout>
      <Head>
        <title>Discover — The Moviest</title>
      </Head>

      <Navbar />

      <PageHeader
        eyebrow="Discover"
        title="What to watch next"
        description="What is on in cinemas, what everyone is streaming, and the films that have held up the longest."
      />

      <section className="mt-14">
        <Reveal>
          <SectionHeader eyebrow="In cinemas" title="Playing near you" />
        </Reveal>
        <Rail items={inCinemas} type="movie" />
      </section>

      <section className="mt-20">
        <Reveal>
          <SectionHeader eyebrow="On the small screen" title="Popular on TV" />
        </Reveal>
        <Rail items={popularShows} type="tv" />
      </section>

      <section className="mt-20">
        <Reveal>
          <SectionHeader eyebrow="The canon" title="Top rated of all time" />
        </Reveal>
        <Rail items={topRated} type="movie" />
      </section>
    </HomeLayout>
  );
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  setPublicPageCache(res);
  const [inCinemas, popularShows, topRated] = await Promise.all([
    fetchResults(getListEndpoint('movie', 'now_playing')),
    fetchResults(getListEndpoint('tv', 'popular')),
    fetchResults(getListEndpoint('movie', 'top_rated')),
  ]);

  return {
    props: {
      inCinemas: inCinemas.slice(0, 10),
      popularShows: popularShows.slice(0, 10),
      topRated: topRated.slice(0, 5),
    },
  };
}
