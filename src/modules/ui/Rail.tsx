import { ContentType, MovieType } from '@lib/types';
import { PosterCard } from './PosterCard';
import { Reveal } from './Reveal';

type RailProps = {
  items: Array<MovieType>;
  type: ContentType;
  /** Number the cards 01, 02, 03… */
  ranked?: boolean;
};

/** Responsive grid of poster cards that reveal in a staggered cascade. */
export function Rail({ items, type, ranked = false }: RailProps) {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((item, i) => (
        <Reveal key={item.id} delay={(i % 5) * 70}>
          <PosterCard
            movie={item}
            type={type}
            rank={ranked ? i + 1 : undefined}
          />
        </Reveal>
      ))}
    </div>
  );
}
