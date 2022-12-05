import Image from 'next/image';

export function Card({ movie }) {
  return (
    <div
      className="bg-slate-400 bg-opacity-80 relative w-1/5 my-10 mx-3 rounded-lg rounded-tl-3xl rounded-br-3xl shadow-lg"
      style={{ height: 600 }}
    >
      <div className="bg-slate-400 relative w-full h-1/2 rounded-tl-3xl">
        <Image
          className="object-cover rounded-tl-3xl"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          fill
          alt=""
        />
      </div>
      <div className="p-3 h-1/2">
        <h2 className="text-3xl font-poppins uppercase font-semibold">
          {movie.original_title}
        </h2>
        <p className="h-1/2 text-ellipsis overflow-hidden">{movie.overview}</p>
      </div>
    </div>
  );
}
