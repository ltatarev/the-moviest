import { HomeLayout } from '@modules/layout';
import { Navbar } from '@modules/navbar';
import { getPlaiceholder } from 'plaiceholder';
import { Footer } from '@modules/ui';
import { InferGetServerSidePropsType } from 'next';
import { DetailsCard } from '@modules/ui/DetailsCard';

export default function ReviewDetails({
  review,
  imageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <HomeLayout hideFooter>
      <div className="flex flex-col justify-between min-h-screen">
        <Navbar />
        <div className="flex justify-center">
          <DetailsCard post={review} imageProps={imageProps} />
        </div>
        <Footer />
      </div>
    </HomeLayout>
  );
}

type Query = {
  id: number;
};

type ServerProps = {
  query: Query;
};

export async function getServerSideProps({ query }: ServerProps) {
  const review = await (
    await fetch(`${process.env.API_BASE_URL}/api/reviews?id=${query.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

  let img;
  let base64;
  let posterPath;

  try {
    posterPath = review.data.movie.moviePosterPath;
  } catch {
    posterPath = null;
  }

  try {
    const res = await getPlaiceholder(posterPath);
    img = res.img;
    base64 = res.base64;
  } catch {
    base64 = 'https://dummyimage.com/210x210/8289ed/8289ed.jpg';

    img = {
      src: '/assets/placeholder.png',
      blurDataUrl: 'https://dummyimage.com/210x210/8289ed/8289ed.jpg',
    };
  }

  return {
    props: {
      review: review.data,
      imageProps: {
        src: img.src,
        alt: '',
        blurDataURL: base64,
      },
    },
  };
}
