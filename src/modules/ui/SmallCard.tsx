import { WatchlistType } from '@lib/types';
import Link from 'next/link';
import { Tv } from './Tv';

type SmallCardProps = {
  watchlist: WatchlistType;
};

export function SmallCard({ watchlist }: SmallCardProps) {
  return (
    <Link
      href={`/watchlists/${watchlist._id.toString()}`}
      className="group w-2/3 md:w-1/3 xl:w-1/5 hover:transition-all shadow-card duration-700 hover:duration-500 ease-smooth hover:ease-smooth rounded-lg hover:shadow-none hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 from-slate-50 to-slate-50 bg-gradient-to-b my-10 mx-5"
    >
      <div className="p-5">
        <div className="flex flex-col place-content-center items-center h-[200px]">
          <Tv />
          <h1 className="text-3xl font-bold p-5 text-center text-accent-purple group-hover:text-white transition-all duration-100 ease-smooth">
            {watchlist.title}
          </h1>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-accent-purple text-center font-poppins group-hover:text-white transition-all duration-100 ease-smooth">
            {watchlist.author_id.username}
          </p>
          <p className="italic text-accent-purple text-center text-sm font-poppins group-hover:text-white transition-all duration-100 ease-smooth">
            {watchlist.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
