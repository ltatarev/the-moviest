import { getImageSrc } from '@lib/tmdb';
import {
  DEFAULT_WATCH_REGION,
  getWatchSentence,
  isWatchRegion,
  OFFER_KINDS,
  OFFER_LABELS,
  regionName,
  WATCH_REGIONS,
  type WatchRegion,
  type WatchRegions,
} from '@lib/watch';
import { ArrowRight } from '@modules/ui/Icons';
import {
  savePreferredRegion,
  usePreferredRegion,
} from '@modules/ui/watchRegion';
import Image from 'next/image';
import { useState } from 'react';

type WatchPanelProps = {
  watch: WatchRegions;
};

/**
 * Where to watch, by region. The server renders the default region, so the
 * text that crawlers read is the same each time. The browser then changes to
 * the region of the viewer when that region has offers.
 */
export function WatchPanel({ watch }: WatchPanelProps) {
  const available = WATCH_REGIONS.filter((region) => watch[region]);
  const fallback = watch[DEFAULT_WATCH_REGION]
    ? DEFAULT_WATCH_REGION
    : available[0];
  // The server and the first browser render use the fallback, so hydration
  // matches. Then the browser reads the saved or language region.
  const preferred = usePreferredRegion();
  const [chosen, setChosen] = useState<WatchRegion | null>(null);
  const region =
    chosen ?? (preferred && watch[preferred] ? preferred : fallback);

  if (!region) {
    return null;
  }

  const offers = watch[region];
  const sentence = getWatchSentence(offers, region);

  function choose(next: string) {
    if (!isWatchRegion(next)) {
      return;
    }

    setChosen(next);
    savePreferredRegion(next);
  }

  return (
    <div className="rounded-card border border-white/10 bg-white/[.05] px-6 py-6 sm:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {sentence && (
          <p className="max-w-[640px] text-[15px] leading-relaxed text-chalk/90">
            {sentence}
          </p>
        )}

        {available.length > 1 && (
          <label className="flex items-center gap-2 text-[13px] text-dim">
            Region
            <select
              value={region}
              onChange={(event) => choose(event.target.value)}
              className="rounded-lg border border-white/15 bg-ink px-3 py-2 text-[13px] font-semibold text-chalk focus:border-accent-soft focus:outline-none"
            >
              {available.map((code) => (
                <option key={code} value={code}>
                  {regionName(code)}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>

      <dl className="mt-6 grid gap-5 sm:grid-cols-2">
        {OFFER_KINDS.filter((kind) => offers && offers[kind].length > 0).map(
          (kind) => (
            <div key={kind}>
              <dt className="mb-2.5 text-xs font-semibold uppercase tracking-[.1em] text-dimmer">
                {OFFER_LABELS[kind]}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {offers?.[kind].map((provider) => {
                    const logo = getImageSrc(provider.logoPath, 'w92');

                    return (
                      <li
                        key={provider.id}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[.05] py-1 pl-1 pr-3.5 text-[13px] font-medium"
                      >
                        {logo ? (
                          <Image
                            src={logo}
                            alt=""
                            width={26}
                            height={26}
                            className="rounded-full"
                          />
                        ) : (
                          <span className="h-[26px] w-[26px] rounded-full bg-white/10" />
                        )}
                        {provider.name}
                      </li>
                    );
                  })}
                </ul>
              </dd>
            </div>
          ),
        )}
      </dl>

      <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-5 text-[12px] text-dimmer">
        <span>Offers from JustWatch, through TMDB. They can change.</span>
        {offers?.link && (
          <a
            href={offers.link}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1 font-semibold text-accent-soft transition-colors duration-200 ease-silk hover:text-chalk"
          >
            All offers and prices
            <ArrowRight
              width={13}
              height={13}
              className="transition-transform duration-300 ease-silk group-hover:translate-x-1"
            />
          </a>
        )}
      </p>
    </div>
  );
}
