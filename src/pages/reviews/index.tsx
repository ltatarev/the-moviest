import type { GetServerSidePropsContext } from 'next';
import { setPublicPageCache } from '@lib/cache';
import { ReviewType } from '@lib/types';
import { HomeLayout } from '@modules/layout';
import { Navbar } from '@modules/navbar';
import { PageHeader, Reveal, ReviewCard } from '@modules/ui';
import Head from 'next/head';

type ReviewsProps = {
  reviews: Array<ReviewType>;
};

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <HomeLayout>
      <Head>
        <title>Reviews — The Moviest</title>
      </Head>

      <Navbar />

      <PageHeader
        eyebrow="What people said"
        title="Reviews"
        description="Verdicts from everyone who could not keep quiet about what they just watched."
      />

      {reviews.length > 0 ? (
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {reviews.map((review, i) => (
            <Reveal key={review._id.toString()} delay={(i % 2) * 70}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal>
          <p className="mt-12 rounded-card border border-white/10 bg-white/[.05] px-8 py-14 text-center text-[15px] text-dim">
            No reviews yet.
          </p>
        </Reveal>
      )}
    </HomeLayout>
  );
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  setPublicPageCache(res);
  const response = await fetch(`${process.env.API_BASE_URL}/api/reviews`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const reviews = response.ok ? (await response.json()).data : [];

  return {
    props: {
      reviews: reviews ?? [],
    },
  };
}
