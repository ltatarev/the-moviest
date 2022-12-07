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

  & > a > p {
    font-size: 1rem;
    text-overflow: ellipsis;
    padding-top: 20px;
    font-weight: bold;
    justify-content: center;
    text-align: center;
    height: 5vh;
    color: white;
    background-color: rgba(95, 73, 197, 0.3);
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
        />
        <p>{movie.original_title || movie.original_name}</p>
      </Link>
    </Box>
  );
}
