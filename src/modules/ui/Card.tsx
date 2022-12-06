import { MovieType } from '@lib/types';
import Image from 'next/image';
import { ActionButton } from './ActionButton';

export function Card({
  poster_path,
  original_title,
  original_name,
  overview,
}: MovieType) {
  return (
    <div
      className="p-2 w-full md:w-1/2 xl:w-1/5 my-10 "
      style={{ height: 600 }}
    >
      <div
        className="w-full bg-slate-400 select-none bg-opacity-90 hover:bg-opacity-100 hover:transition-all hover:duration-75 hover:ease-smooth rounded-lg rounded-tl-3xl rounded-br-3xl shadow-lg"
        style={{ height: 600 }}
      >
        <div className="bg-slate-400 relative w-full h-1/2 rounded-tl-3xl">
          <Image
            className="object-cover rounded-tl-3xl"
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            fill
            alt=""
          />
        </div>
        <div className="p-3 h-1/2 flex flex-col">
          <h2 className="text-2xl font-poppins uppercase font-semibold">
            {original_title || original_name}
          </h2>
          <div className="flex flex-grow overflow-auto pr-3 my-1 scrollbar-thumb-neutral-300 scrollbar-thin">
            <p className="italic">{overview}</p>
          </div>
          <ActionButton title="learn more" />
        </div>
      </div>
    </div>
  );
}
