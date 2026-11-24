import type { GetServerSidePropsContext } from 'next';
import { setPublicPageCache } from '@lib/cache';
import { getSiteJsonLd } from '@lib/jsonLd';
import { fetchResults, getTrendingEndpoint } from '@lib/tmdb';
import { MovieType } from '@lib/types';
import { HomeLayout } from '@modules/layout';
import { Navbar } from '@modules/navbar';
import { discoverMoods, type Mood } from '@lib/moods';
import { MoodPills } from '@modules/moods';
import {
  AppPitch,
  Hero,
  JsonLd,
  Rail,
  Reveal,
  SectionHeader,
  Seo,
} from '@modules/ui';

interface HomeProps {
  trendingMovies: Array<MovieType>;
  trendingShows: Array<MovieType>;
  /** Read on the server, so the season is the same in the browser. */
  moods: Array<Mood>;
}

export default function Home({
  trendingMovies,
  trendingShows,
  moods,
}: HomeProps) {
  const featured = trendingMovies.slice(0, 5);
  const movies = trendingMovies.slice(5, 15);
  const shows = trendingShows.slice(0, 10);

  return (
    <HomeLayout>
      <Seo path="/home" />
      <JsonLd id="site" data={getSiteJsonLd()} />
      <Navbar />

      <Hero items={featured} type="movie" eyebrow="Trending now" />

      <section className="mt-20">
        <Reveal>
          <SectionHeader
            eyebrow="This week"
            title="Trending now"
            moreHref="/discover"
          />
        </Reveal>
        <Rail items={movies} type="movie" ranked />
      </section>

      <section className="mt-20">
        <Reveal>
          <SectionHeader
            eyebrow="On the small screen"
            title="Popular on TV"
            moreHref="/discover"
          />
        </Reveal>
        <Rail items={shows} type="tv" />
      </section>

      <section className="mt-20">
        <Reveal>
          <SectionHeader
            eyebrow="No idea what to watch"
            title="In the mood for…"
            moreLabel="All moods"
            moreHref="/moods"
          />
        </Reveal>
        <Reveal delay={60}>
          <MoodPills moods={moods} />
        </Reveal>
      </section>

      <section className="mt-20">
        <Reveal>
          <AppPitch />
        </Reveal>
      </section>
    </HomeLayout>
  );
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  setPublicPageCache(res);
  const [trendingMovies, trendingShows] = await Promise.all([
    fetchResults(getTrendingEndpoint('movie')),
    fetchResults(getTrendingEndpoint('tv')),
  ]);

  return {
    props: {
      trendingMovies,
      trendingShows,
      moods: discoverMoods(new Date()),
    },
  };
}
