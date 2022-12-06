import { MovieType } from '@lib/types';
import Image from 'next/image';
import { ActionButton } from './ActionButton';
import { GradientOverlay } from './GradientOverlay';

export function Card({
  poster_path,
  original_title,
  original_name,
  overview,
}: MovieType) {
  return (
    <div className="p-2 h-[600px] w-full md:w-1/2 xl:w-1/5 my-10 ">
      <div className="w-full h-[600px] bg-slate-400 select-none hover:transition-all hover:duration-75 hover:ease-smooth rounded-lg rounded-tl-3xl rounded-br-3xl shadow-lg">
        <div className="relative w-full h-1/2 rounded-tl-3xl">
          <GradientOverlay>
            <Image
              className="object-cover mix-blend-screen rounded-tr-lg rounded-tl-3xl"
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              fill
              alt=""
            />
          </GradientOverlay>
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
