import { Carousel } from '@mantine/carousel';
import Image from 'next/image';

export type CarouselCardProps = {
  data: Array<CardProps>;
};

export type CardProps = {
  id: string;
  backdrop_path: string;
  original_title?: string;
  original_name?: string;
  overview: string;
};

export default function CardsCarousel({ data }: CarouselCardProps) {
  const slides = data.map((item: CardProps) => (
    <Carousel.Slide key={item.id}>
      <div className="flex place-content-end flex-col align-text-bottom h-full">
        <Image
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          fill
          className="object-cover brightness-50 transition-all hover:transition-all hover:brightness-75"
          alt=""
        />
        <div className="mb-10">
          <h3 className="font-semibold font-poppins text-slate-100 text-5xl my-5 text-center uppercase drop-shadow-text">
            {item.original_title || item.original_name}
          </h3>
          <p className="text-slate-100 italic text-md text-center mx-24 drop-shadow-text">
            {item.overview}
          </p>
        </div>
      </div>
    </Carousel.Slide>
  ));

  return (
    <div style={{ height: 600, display: 'relative' }}>
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
