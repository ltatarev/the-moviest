import type { GetServerSidePropsContext } from 'next';
import { setSlowPageCache } from '@lib/cache';
import { getMoodJsonLd } from '@lib/jsonLd';
import { fetchMoodTitles } from '@lib/moodTitles';
import { getMood, moodMediaTypes, moodsInSeason, type Mood } from '@lib/moods';
import type { ContentType, MovieType } from '@lib/types';
import { HomeLayout } from '@modules/layout';
import { MoodPills } from '@modules/moods';
import { Navbar } from '@modules/navbar';
import { Breadcrumb, JsonLd, Rail, Reveal, Seo } from '@modules/ui';
import cn from 'classnames';
import Link from 'next/link';

/** Two TMDB pages: 40 titles, enough to browse without a "load more". */
const PAGES = 2;

const MEDIA_LABELS: Record<ContentType, string> = {
  movie: 'Movies',
  tv: 'Shows',
};

type MoodPageProps = {
  mood: Mood;
  type: ContentType;
  types: Array<ContentType>;
  titles: Array<MovieType>;
  others: Array<Mood>;
};

export default function MoodPage({
  mood,
  type,
  types,
  titles,
  others,
}: MoodPageProps) {
  const path = `/moods/${mood.slug}`;
  const isDefaultType = type === types[0];

  return (
    <HomeLayout>
      <Seo
        title={`${mood.title} ${type === 'tv' ? 'shows' : 'films'}`}
        description={`${mood.blurb} A mood from the Moviest app.`}
        path={isDefaultType ? path : `${path}?type=${type}`}
      />
      <JsonLd id="mood" data={getMoodJsonLd(mood, titles, type)} />

      <Navbar />

      <div className="pt-6 sm:pt-10">
        <Breadcrumb
          items={[{ label: 'Moods', href: '/moods' }, { label: mood.title }]}
        />
      </div>

      <Reveal as="header" className="mt-6">
        <p className="mb-3 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[.18em] text-accent-soft">
          <span className={cn('h-[7px] w-[7px] rounded-full', mood.dot)} />
          In the mood for…
        </p>
        <h1 className="font-display text-[38px] font-bold leading-[1.05] tracking-[-.035em] sm:text-5xl lg:text-[58px]">
          {mood.title}
        </h1>
        <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-dim">
          {mood.blurb}
        </p>
      </Reveal>

      {types.length > 1 && (
        <nav
          aria-label="Films or shows"
          className="mt-8 flex w-fit gap-0.5 rounded-full border border-white/10 bg-white/[.05] p-1"
        >
          {types.map((option) => (
            <Link
              key={option}
              href={option === types[0] ? path : `${path}?type=${option}`}
              aria-current={option === type ? 'page' : undefined}
              scroll={false}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ease-silk',
                option === type
                  ? 'bg-white/[.13] font-semibold text-chalk'
                  : 'text-dim hover:bg-white/[.06] hover:text-chalk',
              )}
            >
              {MEDIA_LABELS[option]}
            </Link>
          ))}
        </nav>
      )}

      <section className="mt-10">
        {titles.length > 0 ? (
          <Rail items={titles} type={type} />
        ) : (
          <p className="rounded-card border border-white/10 bg-white/[.04] px-6 py-10 text-center text-[15px] text-dim">
            Nothing came back for this mood right now. Try again in a moment.
          </p>
        )}
      </section>

      {others.length > 0 && (
        <section className="mt-20">
          <Reveal>
            <h2 className="mb-5 font-display text-2xl font-semibold tracking-[-.025em]">
              Other moods
            </h2>
            <MoodPills moods={others} />
          </Reveal>
        </section>
      )}
    </HomeLayout>
  );
}

function isContentType(value: unknown): value is ContentType {
  return value === 'movie' || value === 'tv';
}

export async function getServerSideProps({
  params,
  query,
  res,
}: GetServerSidePropsContext) {
  // A mood stays addressable out of season. It is only left out of the lists.
  const mood = getMood(String(params?.slug ?? ''));

  if (!mood) {
    return { notFound: true };
  }

  const types = moodMediaTypes(mood);
  const type =
    isContentType(query.type) && types.includes(query.type)
      ? query.type
      : types[0];
  const today = new Date();

  setSlowPageCache(res);
  const titles = await fetchMoodTitles(mood, type, today, PAGES);

  return {
    props: {
      mood,
      type,
      types,
      titles,
      others: moodsInSeason(today).filter((item) => item.slug !== mood.slug),
    },
  };
}
