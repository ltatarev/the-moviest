import styled from '@emotion/styled';
import { getImageSrc } from '@lib/tmdb';
import { ContentType, MovieType } from '@lib/types';
import Image from 'next/image';
import Link from 'next/link';

// TODO: Please rework asap - legacy css
const Box = styled.div`
  flex: 1;
  overflow: hidden;
  transition: 0.5s;
  margin: 0 2%;
  height: 450px;
  border-radius: 10px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  line-height: 0;

  & > a > img {
    width: 200%;
    height: calc(100% - 5vh);
    -o-object-fit: cover;
    object-fit: cover;
    transition: 0.5s;
  }

  &:hover {
    flex: 1 1 30%;
  }

  &:hover > a > img {
    width: 100%;
    height: 100%;
  }
`;

type FeaturedCardProps = {
  movie: MovieType;
  type: ContentType;
};

export function FeaturedCard({ movie, type }: FeaturedCardProps) {
  return (
    <Box>
      <Link href={`${type}/${movie.id}`}>
        <Image
          src={getImageSrc(movie.poster_path)}
          alt=""
          width={500}
          height={850}
          placeholder="blur"
          priority
          blurDataURL="https://dummyimage.com/500x850/8289ed/8289ed.jpg"
        />
        <p className="text-ellipsis text-xs sm:text-sm md:text-md lg:text-lg text-center flex items-center place-content-center h-[5vh] bg-purple-500 bg-opacity-20 text-white">
          {movie.original_title || movie.original_name}
        </p>
      </Link>
    </Box>
  );
}
