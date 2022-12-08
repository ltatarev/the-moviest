import { randomEmoji } from '@lib/tmdb';
import { WatchlistType } from '@lib/types';
import Image, { ImageProps } from 'next/image';

type WatchlistCardProps = {
  watchlist: WatchlistType;
  imageProps: ImageProps;
};

export function WatchlistCard({ watchlist, imageProps }: WatchlistCardProps) {
  const { title, description, author_id, movies } = watchlist;

  return (
    <div className="bg-neutral-200 select-none bg-opacity-80 flex flex-col lg:flex-row w-full lg:w-7/12 self-center rounded-xl p-10">
      <Image
        sizes="100vw"
        placeholder="blur"
        width={300}
        height={600}
        priority
        className="object-cover lg:-ml-40 self-center w-full md:w-2/3 lg:w-1/2 xl:w-40 h-auto rounded-md hover:-translate-y-2 transition-all duration-200 ease-smooth"
        {...imageProps}
      />
      <div className="flex flex-col lg:ml-10 mt-5">
        <div className="flex flex-col w-fit">
          <h1 className="font-bold text-5xl md:text-6xl text-greyish z-10 flex-wrap">
            {title}
          </h1>
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 h-2 z-0 -mt-2" />
        </div>
        <p className="py-5 italic text-lg text-greyish">{description}</p>
        <div className="mt-5 flex flex-col">
          <h3 className="font-bold text-greyish text-xl">Movies/TV shows</h3>
          {movies?.length > 0 &&
            movies.map((movie) => (
              <div
                key={movie.movieTitle}
                className="mr-3 my-1 text-greyish text-lg py-1 px-2"
              >
                {randomEmoji()} {movie.movieTitle}
              </div>
            ))}
        </div>
        <div className="h-[0.03rem] my-5 bg-slate-700" />
        <p className="opacity-75 mt-5 text-sm">
          Created by: {author_id.username}
        </p>
      </div>
    </div>
  );
}
