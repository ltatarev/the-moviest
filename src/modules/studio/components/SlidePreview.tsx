import type { ReactElement } from 'react';
import { CARD_HEIGHT, CARD_WIDTH } from '../theme';

/**
 * Shows a card scaled down. The card node itself stays unscaled (the
 * transform sits on a wrapper), so exporting it gives a true 1080×1350 PNG.
 */
export function SlidePreview({
  element,
  label,
  scale,
  onExport,
  exporting,
  disabled,
  cardRef,
}: {
  element: ReactElement;
  label: string;
  scale: number;
  onExport: () => void;
  exporting: boolean;
  disabled: boolean;
  cardRef: (node: HTMLDivElement | null) => void;
}) {
  return (
    <figure className="m-0 flex shrink-0 flex-col gap-2">
      <div
        className="overflow-hidden rounded-lg ring-1 ring-white/10"
        style={{ width: CARD_WIDTH * scale, height: CARD_HEIGHT * scale }}
      >
        <div
          style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
        >
          <div ref={cardRef} style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}>
            {element}
          </div>
        </div>
      </div>
      <figcaption className="flex items-center justify-between gap-2">
        <span className="truncate text-xs text-dim">{label}</span>
        <button
          type="button"
          onClick={onExport}
          disabled={disabled || exporting}
          className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold hover:bg-white/10 disabled:opacity-40"
        >
          {exporting ? '…' : 'PNG'}
        </button>
      </figcaption>
    </figure>
  );
}
