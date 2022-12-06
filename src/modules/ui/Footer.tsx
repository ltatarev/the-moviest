import Image from 'next/image';

export function Footer() {
  return (
    <div className="bg-slate-900 flex flex-col items-start md:flex-row md:items-center bg-opacity-20 h-full w-full py-10 px-10 overflow-hidden text-slate-50 mt-10 mb-5 rounded-xl">
      <Image src="/assets/tmdb.png" width={100} height={100} alt="" />
      <p className="mx-4 my-1">THE MOVIEST © 2022</p>
    </div>
  );
}
