import { fetchResults, getTrendingEndpoint } from '@lib/tmdb';
import { MovieType } from '@lib/types';
import { HomeLayout } from '@modules/layout';
import { Navbar } from '@modules/navbar';
import { Hero, Rail, Reveal, SectionHeader } from '@modules/ui';

interface HomeProps {
  trendingMovies: Array<MovieType>;
  trendingShows: Array<MovieType>;
}

export default function Home({ trendingMovies, trendingShows }: HomeProps) {
  const featured = trendingMovies.slice(0, 5);
  const movies = trendingMovies.slice(5, 15);
  const shows = trendingShows.slice(0, 10);

  return (
    <HomeLayout>
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
            eyebrow="From the community"
            title="Watchlists worth stealing"
            moreLabel="Browse all"
            moreHref="/watchlists"
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="relative overflow-hidden rounded-hero border border-white/10 bg-white/[.05] px-8 py-12 text-center backdrop-blur-md transition-colors duration-300 ease-silk hover:border-white/20 sm:px-14 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-iris/25 blur-[80px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/20 blur-[80px]"
            />
            <h3 className="relative font-display text-2xl font-semibold tracking-[-.02em] sm:text-3xl">
              Lists made by people, not algorithms
            </h3>
            <p className="relative mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-dim">
              Cold autumn days, comfort rewatches, the best of the year —
              curated by the community.
            </p>
          </div>
        </Reveal>
      </section>
    </HomeLayout>
  );
}

export async function getServerSideProps() {
  const [trendingMovies, trendingShows] = await Promise.all([
    fetchResults(getTrendingEndpoint('movie')),
    fetchResults(getTrendingEndpoint('tv')),
  ]);

  return {
    props: {
      trendingMovies,
      trendingShows,
    },
  };
}
