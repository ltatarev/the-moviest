import { formatDate } from '@lib/format';
import { getStoredImageSrc } from '@lib/tmdb';
import { ReviewType } from '@lib/types';
import { HomeLayout } from '@modules/layout';
import { Navbar } from '@modules/navbar';
import { Avatar, Breadcrumb, PosterImage, Reveal } from '@modules/ui';
import { Star } from '@modules/ui/Icons';
import Head from 'next/head';
import Link from 'next/link';

type ReviewDetailsProps = {
  review: ReviewType;
};

export default function ReviewDetails({ review }: ReviewDetailsProps) {
  const { title, reviewText, rating, movie, author_id, createdAt } = review;
  const author = author_id?.username ?? 'Someone';
  const posted = formatDate(createdAt);

  return (
    <HomeLayout>
      <Head>
        <title>{`${title} — The Moviest`}</title>
      </Head>

      <Navbar />

      <div className="pt-8">
        <Breadcrumb
          items={[{ label: 'Reviews', href: '/reviews' }, { label: title }]}
        />
      </div>

      <article className="mt-6 grid items-start gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
        <Reveal className="max-w-[170px] lg:max-w-none">
          <div className="relative aspect-[2/3] overflow-hidden rounded-card border border-white/[.14] shadow-[0_40px_80px_-30px_rgba(0,0,0,.9)]">
            <PosterImage
              src={getStoredImageSrc(movie?.moviePosterPath, 'w500')}
              title={movie?.movieTitle ?? title}
              sizes="(max-width: 1100px) 170px, 220px"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={80}>
          {movie?.movieTitle && (
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[.18em] text-accent-soft">
              {movie.movieId ? (
                <Link
                  href={`/movie/${movie.movieId}`}
                  className="transition-colors duration-200 hover:text-accent"
                >
                  {movie.movieTitle}
                </Link>
              ) : (
                movie.movieTitle
              )}
            </p>
          )}

          <h1 className="font-display text-[32px] font-bold leading-[1.06] tracking-[-.035em] sm:text-[44px]">
            {title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-[13px] text-dimmer">
            {Boolean(rating) && (
              <span className="flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-bold text-[#180810]">
                <Star width={12} height={12} />
                {rating} / 10
              </span>
            )}
            <span className="inline-flex items-center gap-2">
              <Avatar name={author} size={22} />
              {author}
            </span>
            {posted && (
              <>
                <span aria-hidden>·</span>
                <span>{posted}</span>
              </>
            )}
          </div>

          {reviewText && (
            <p className="mt-8 max-w-[680px] whitespace-pre-line text-base leading-[1.8] text-white/80">
              {reviewText}
            </p>
          )}
        </Reveal>
      </article>
    </HomeLayout>
  );
}

type ServerProps = {
  query: { id: string };
};

export async function getServerSideProps({ query }: ServerProps) {
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/reviews?id=${query.id}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  if (!response.ok) {
    return { notFound: true };
  }

  const review = (await response.json()).data;

  if (!review) {
    return { notFound: true };
  }

  return {
    props: { review },
  };
}
