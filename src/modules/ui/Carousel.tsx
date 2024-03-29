import { getImageSrc } from '@lib/tmdb';
import { ContentType, MovieType } from '@lib/types';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import Link from 'next/link';

type CarouselCardProps = {
  data: Array<MovieType>;
  type: ContentType;
};

export default function CardsCarousel({ data, type }: CarouselCardProps) {
  const slides = data.map((item: MovieType) => (
    <Carousel.Slide key={item.id}>
      <Link href={`${type}/${item.id}`}>
        <div className="flex place-content-end flex-col align-text-bottom h-full">
          <Image
            src={getImageSrc(item.backdrop_path)}
            fill
            className="object-cover brightness-50 transition-all hover:transition-all hover:brightness-75"
            alt=""
            placeholder="blur"
            priority
            blurDataURL="https://dummyimage.com/210x210/8289ed/8289ed.jpg"
          />
          <div className="mb-10">
            <h3 className="font-semibold font-poppins text-slate-100 text-5xl my-5 text-center uppercase drop-shadow-text">
              {item.original_title || item.original_name}
            </h3>
            <p className="text-sm lg:text-xl text-slate-100 italic text-center mx-24 drop-shadow-text">
              {item.overview}
            </p>
          </div>
        </div>
      </Link>
    </Carousel.Slide>
  ));

  return (
    <div className="relative h-[600px]">
      <Carousel
        slideSize="100%"
        slideGap="xl"
        controlsOffset="xs"
        controlSize={21}
        align="center"
        loop
        height="100%"
        sx={{ height: '100%' }}
        slidesToScroll={1}
        withIndicators
        styles={{
          indicator: {
            width: 12,
            height: 4,
            backgroundColor: 'white !important',
            transition: 'width 250ms ease',

            '&[data-active]': {
              width: 40,
              backgroundColor: 'white',
            },
          },
          control: {
            backgroundColor: 'white !important',
            opacity: 0.5,
            borderColor: 'white !important',

            '&[data-inactive]': {
              opacity: 0,
              cursor: 'default',
            },
          },
        }}
      >
        {slides}
      </Carousel>
    </div>
  );
}
