import Image from 'next/image';
import Link from 'next/link';
import { Github } from './Github';

export function Footer() {
  return (
    <div className="bg-slate-900 flex flex-col items-start md:justify-between md:flex-row md:items-center bg-opacity-20 h-full w-full py-10 px-10 overflow-hidden text-slate-50 mt-10 mb-5 rounded-xl">
      <div className="flex flex-row">
        <Image
          src="/assets/tmdb.png"
          width={100}
          height={100}
          alt=""
          priority
        />
        <p className="mx-4 my-1">THE MOVIEST © 2022</p>
      </div>
      <div className="h-10 w-10 self-end">
        <Link href="https://github.com/ltatarev" target="_blank">
          <Github />
        </Link>
      </div>
    </div>
  );
}
