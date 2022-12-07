import { GENRE_EMOJIS, getImageSrc } from '@lib/tmdb';
import { MovieType } from '@lib/types';
import Image from 'next/image';

export function MovieCard({
  original_title,
  original_name,
  overview,
  tagline,
  genres,
  poster_path,
}: MovieType) {
  return (
    <div className="bg-neutral-200 select-none bg-opacity-80 flex flex-col lg:flex-row w-full lg:w-7/12 self-center rounded-xl p-10">
      <Image
        src={getImageSrc(poster_path)}
        width={270}
        height={600}
        className="object-cover shadow-xl lg:-ml-20 rounded-md hover:-translate-y-2 transition-all duration-200 ease-smooth"
        alt=""
      />
      <div className="flex flex-col lg:ml-10 mt-5">
        <div className="flex flex-col w-fit">
          <h1 className="font-bold text-6xl text-greyish z-10">
            {original_title || original_name}
          </h1>
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 h-2 z-0 -mt-2" />
        </div>
        <p className="italic mt-5 opacity-95 mb-20 text-greyish text-2xl">
          {tagline}
        </p>
        <p className="pb-5 text-greyish">{overview}</p>
        <div className="mt-5 flex flex-row flex-wrap">
          {genres.map((genre) => (
            <div
              key={genre.id}
              className="mr-3 my-1 bg-slate-200 uppercase text-xs text-greyish tracking-wide font-semibold py-1 px-2 rounded-xl text-center"
            >
              {genre.name} {GENRE_EMOJIS[genre.name]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
