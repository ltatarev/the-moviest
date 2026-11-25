import type { GetServerSidePropsContext } from 'next';
import { type Anniversary, fetchAnniversaries } from '@lib/anniversaries';
import { setPublicPageCache } from '@lib/cache';
import { discoverMoods, type Mood } from '@lib/moods';
import { fetchRegionalData, type RegionalData } from '@lib/regional';
import { fetchResults, getListEndpoint, getTrendingEndpoint } from '@lib/tmdb';
import type { MovieType } from '@lib/types';
import {
  Anniversaries,
  AppCard,
  PopularSection,
  RegionalSections,
  TrendingBoard,
} from '@modules/discover';
import { HomeLayout } from '@modules/layout';
import { MoodPills } from '@modules/moods';
import { Navbar } from '@modules/navbar';
import { Hero, Rail, Reveal, SectionHeader, Seo } from '@modules/ui';

interface DiscoverProps {
  featured: Array<MovieType>;
  trending: Array<MovieType>;
  popularMovies: Array<MovieType>;
  popularShows: Array<MovieType>;
  moods: Array<Mood>;
  regional: RegionalData;
  anniversaries: Array<Anniversary>;
  topRated: Array<MovieType>;
}

/**
 * The web version of Discover in the app, in the app's order. The sections
 * that read the user's library stay in the app: the app card says so.
 */
export default function Discover({
  featured,
  trending,
  popularMovies,
  popularShows,
  moods,
  regional,
  anniversaries,
  topRated,
}: DiscoverProps) {
  return (
    <HomeLayout>
      <Seo
        title="Discover"
        path="/discover"
        description="What to watch next: this week's trending films and shows, what is popular, films by mood, what is in cinemas and the top-rated films of all time."
      />

      <Navbar />

      <Hero items={featured} type="movie" eyebrow="Trending today" />

      <section className="mt-20">
        <Reveal>
          <SectionHeader eyebrow="This week" title="Trending now" />
        </Reveal>
        <TrendingBoard items={trending} />
      </section>

      <div className="mt-20 grid grid-cols-1 items-start gap-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10">
        <div className="grid min-w-0 grid-cols-1 gap-20">
          <PopularSection movies={popularMovies} shows={popularShows} />

          {moods.length > 0 && (
            <section>
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
          )}
        </div>

        <Reveal className="lg:sticky lg:top-24">
          <AppCard />
        </Reveal>
      </div>

      <RegionalSections initial={regional} />

      {anniversaries.length > 0 && (
        <section className="mt-20">
          <Reveal>
            <SectionHeader eyebrow="This month" title="Birthdays" />
          </Reveal>
          <Anniversaries items={anniversaries} />
        </section>
      )}

      <section className="mt-20">
        <Reveal>
          <SectionHeader eyebrow="The canon" title="Top rated of all time" />
        </Reveal>
        <Rail items={topRated} type="movie" />
      </section>
    </HomeLayout>
  );
}

function isTitle(item: MovieType): boolean {
  return item.media_type === 'movie' || item.media_type === 'tv';
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  setPublicPageCache(res);
  const now = new Date();
  const [
    today,
    week,
    popularMovies,
    popularShows,
    regional,
    anniversaries,
    topRated,
  ] = await Promise.all([
    fetchResults(getTrendingEndpoint('all', 'day')),
    fetchResults(getTrendingEndpoint('all')),
    fetchResults(getListEndpoint('movie', 'popular')),
    fetchResults(getListEndpoint('tv', 'popular')),
    fetchRegionalData(),
    fetchAnniversaries(now),
    fetchResults(getListEndpoint('movie', 'top_rated')),
  ]);
  const trending = week.filter(isTitle).slice(0, 5);
  const onBoard = new Set(trending.map((item) => item.id));
  // The hero is today's list without the titles the weekly board shows.
  const featured = today
    .filter((item) => isTitle(item) && item.backdrop_path)
    .filter((item) => !onBoard.has(item.id))
    .slice(0, 5);

  return {
    props: {
      featured,
      trending,
      popularMovies: popularMovies.slice(0, 6),
      popularShows: popularShows.slice(0, 6),
      moods: discoverMoods(now),
      regional,
      anniversaries,
      topRated: topRated.slice(0, 10),
    },
  };
}
