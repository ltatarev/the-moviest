import { getInitials } from '@lib/format';
import { BLUR_DATA_URL, getImageSrc, getTileGradient } from '@lib/tmdb';
import { PersonType } from '@lib/types';
import { Reveal } from '@modules/ui';
import Image from 'next/image';
import { useState } from 'react';

/** Round headshots for the top-billed cast; initials when TMDB has no photo. */
export function CastGrid({ cast }: { cast: Array<PersonType> }) {
  return (
    <div className="grid grid-cols-3 gap-5 sm:grid-cols-4 lg:grid-cols-6">
      {cast.map((person, i) => (
        <Reveal key={person.id} delay={(i % 6) * 60}>
          <CastMember person={person} />
        </Reveal>
      ))}
    </div>
  );
}

function CastMember({ person }: { person: PersonType }) {
  const [failed, setFailed] = useState(false);
  const src = getImageSrc(person.profile_path, 'w342');

  return (
    <figure className="group text-center transition-transform duration-300 ease-silk hover:-translate-y-1.5">
      <div
        className="relative mb-3.5 aspect-square overflow-hidden rounded-full border border-white/10 transition-all duration-300 ease-silk group-hover:border-accent/50 group-hover:shadow-[0_16px_36px_-14px_rgba(255,77,109,.55)]"
        style={{ background: getTileGradient(person.name) }}
      >
        {src && !failed ? (
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 680px) 30vw, (max-width: 1100px) 22vw, 160px"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            onError={() => setFailed(true)}
            className="object-cover object-top transition-transform duration-500 ease-silk group-hover:scale-105"
          />
        ) : (
          <span
            aria-hidden
            className="grid h-full w-full place-items-center font-display text-xl font-bold text-white/85"
          >
            {getInitials(person.name)}
          </span>
        )}
      </div>

      <figcaption>
        <p className="truncate text-sm font-semibold">{person.name}</p>
        {person.character && (
          <p className="mt-0.5 truncate text-[13px] text-dimmer">
            {person.character}
          </p>
        )}
      </figcaption>
    </figure>
  );
}
