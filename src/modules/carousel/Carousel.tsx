import { Carousel } from '@mantine/carousel';
import { Paper, Text, Title } from '@mantine/core';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

function Card({ image, title, description }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${image})`,
      }}
      className="flex place-content-end flex-col align-text-bottom bg-cover h-full"
    >
      <div className="mb-5">
        <Title
          order={3}
          className="font-bold text-slate-100 text-5xl my-5 text-center uppercase drop-shadow-text"
        >
          {title}
        </Title>
        <Text
          className="text-slate-100 text-lg text-center mx-10 drop-shadow-text font-semibold"
          size="xs"
        >
          {description}
        </Text>
      </div>
    </Paper>
  );
}

export function CardsCarousel({ data }: Array<object>) {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.id}>
      <Card
        title={item.original_title}
        description={item.overview}
        image={item.backdrop_path}
      />
    </Carousel.Slide>
  ));

  return (
    <div style={{ height: 500, display: 'flex' }}>
      <Carousel
        slideSize="100%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%' }]}
        slideGap="xl"
        align="start"
        slidesToScroll={1}
        withIndicators
        height="100%"
        sx={{ flex: 1 }}
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
