import type { GetServerSidePropsContext } from 'next';
import { setSlowPageCache } from '@lib/cache';
import { fetchMoodTitles } from '@lib/moodTitles';
import { getMood, moodMediaTypes, moodsInSeason } from '@lib/moods';
import { HomeLayout } from '@modules/layout';
import { MoodCard } from '@modules/moods';
import { Navbar } from '@modules/navbar';
import { PageHeader, Reveal, Seo } from '@modules/ui';

type MoodsProps = {
  moods: Array<{ slug: string; backdropPath: string | null }>;
};

export default function Moods({ moods }: MoodsProps) {
  return (
    <HomeLayout>
      <Seo
        title="Moods"
        path="/moods"
        description="Films and shows by mood: cozy sitcoms, mind-bending twists, short and sharp films, true stories and more. The same moods as the Moviest app."
      />

      <Navbar />

      <PageHeader
        eyebrow="Moods"
        title="In the mood for…"
        description="No idea what to watch? Start from how the evening feels. These are the same moods as in the Moviest app."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {moods.map(({ slug, backdropPath }, i) => {
          const mood = getMood(slug);

          return mood ? (
            <Reveal key={slug} delay={(i % 3) * 70}>
              <MoodCard mood={mood} backdropPath={backdropPath} />
            </Reveal>
          ) : null;
        })}
      </div>
    </HomeLayout>
  );
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  setSlowPageCache(res);
  const today = new Date();
  const moods = await Promise.all(
    moodsInSeason(today).map(async (mood) => {
      const [first] = await fetchMoodTitles(
        mood,
        moodMediaTypes(mood)[0],
        today,
      );

      return { slug: mood.slug, backdropPath: first?.backdrop_path ?? null };
    }),
  );

  return { props: { moods } };
}
