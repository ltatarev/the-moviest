import { getImageSrc } from '@lib/tmdb';
import { BackdropImage } from '@modules/ui';

type TitleBackdropProps = {
  path: string | null;
  title: string;
};

/**
 * The still behind the masthead. It breaks out of the centred content column
 * to reach both viewport edges, then dissolves into the page background so the
 * ambient field underneath takes over.
 */
export function TitleBackdrop({ path, title }: TitleBackdropProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-screen -translate-x-1/2 overflow-hidden sm:h-[560px] lg:h-[660px]"
    >
      <BackdropImage src={getImageSrc(path, 'w1280')} title={title} priority />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,7,22,.55)_0%,rgba(11,7,22,.2)_30%,rgba(11,7,22,.86)_78%,#0B0716_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,7,22,.72)_0%,rgba(11,7,22,0)_62%)]" />
    </div>
  );
}
