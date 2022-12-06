import { GENRE_EMOJIS } from '@lib/tmdb';
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
    <div className="bg-neutral-200 bg-opacity-80 flex flex-row w-7/12 self-center rounded-xl p-10">
      <Image
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        width={270}
        height={600}
        className="object-cover -ml-20 shadow-xl"
        alt=""
      />
      <div className="flex flex-col ml-10 mt-5">
        <h1 className="font-bold text-6xl text-slate-800">
          {original_title || original_name}
        </h1>
        <p className="italic mt-2 opacity-95 mb-20 font-bold text-xl">
          {tagline}
        </p>
        <p className=" pb-5">{overview}</p>
        <div className="mt-5 flex flex-row">
          {genres.map((genre) => (
            <div
              key={genre.id}
              className="mr-3 bg-slate-200 uppercase text-xs tracking-wide font-semibold py-1 px-2 rounded-full"
            >
              {genre.name} {GENRE_EMOJIS[genre.name]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
