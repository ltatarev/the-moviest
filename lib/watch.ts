/**
 * Where to watch a title. TMDB supplies the offers, and JustWatch supplies
 * them to TMDB. TMDB's terms require the JustWatch credit next to the offers.
 */

/** The regions the site offers, in the order of the region list. */
export const WATCH_REGIONS = [
  'US',
  'GB',
  'CA',
  'AU',
  'IE',
  'DE',
  'AT',
  'CH',
  'FR',
  'ES',
  'IT',
  'NL',
  'HR',
] as const;

export type WatchRegion = (typeof WATCH_REGIONS)[number];

/** The server renders this region, so crawlers always get the same text. */
export const DEFAULT_WATCH_REGION: WatchRegion = 'US';

export function isWatchRegion(value: unknown): value is WatchRegion {
  return WATCH_REGIONS.includes(value as WatchRegion);
}

type RawProvider = {
  provider_id: number;
  provider_name: string;
  logo_path?: string | null;
  display_priority?: number;
};

type RawRegionOffers = {
  link?: string;
  flatrate?: Array<RawProvider>;
  free?: Array<RawProvider>;
  ads?: Array<RawProvider>;
  rent?: Array<RawProvider>;
  buy?: Array<RawProvider>;
};

export type RawWatchProviders = {
  results?: Record<string, RawRegionOffers>;
};

export type WatchProvider = {
  id: number;
  name: string;
  logoPath: string | null;
};

/** The ways to watch, in the order the panel shows them. */
export const OFFER_KINDS = ['stream', 'free', 'ads', 'rent', 'buy'] as const;

export type OfferKind = (typeof OFFER_KINDS)[number];

export const OFFER_LABELS: Record<OfferKind, string> = {
  stream: 'Stream',
  free: 'Free',
  ads: 'Free with ads',
  rent: 'Rent',
  buy: 'Buy',
};

export type WatchOffers = {
  /** TMDB's watch page for the title in this region. */
  link: string | null;
} & Record<OfferKind, Array<WatchProvider>>;

export type WatchRegions = Partial<Record<WatchRegion, WatchOffers>>;

const RAW_KEYS: Record<OfferKind, keyof RawRegionOffers> = {
  stream: 'flatrate',
  free: 'free',
  ads: 'ads',
  rent: 'rent',
  buy: 'buy',
};

function toProviders(
  raw: Array<RawProvider> | undefined,
): Array<WatchProvider> {
  const seen = new Set<number>();

  return [...(raw ?? [])]
    .sort(
      (a, b) =>
        (a.display_priority ?? Number.MAX_SAFE_INTEGER) -
        (b.display_priority ?? Number.MAX_SAFE_INTEGER),
    )
    .filter((provider) => {
      if (seen.has(provider.provider_id)) {
        return false;
      }

      seen.add(provider.provider_id);

      return true;
    })
    .map((provider) => ({
      id: provider.provider_id,
      name: provider.provider_name,
      logoPath: provider.logo_path ?? null,
    }))
    .filter((provider, _, all) => !isVariant(provider, all));
}

/**
 * True for a variant of another listed service, for example "Netflix
 * Standard with Ads" next to "Netflix", or "HBO Max Amazon Channel" next to
 * "HBO Max". The base service already tells the viewer where to go.
 */
function isVariant(
  provider: WatchProvider,
  all: Array<WatchProvider>,
): boolean {
  return all.some(
    (other) =>
      other.id !== provider.id && provider.name.startsWith(`${other.name} `),
  );
}

export function hasOffers(offers: WatchOffers | undefined): boolean {
  return Boolean(offers && OFFER_KINDS.some((kind) => offers[kind].length > 0));
}

/** Keeps the site's regions that have at least one offer. */
export function toWatchRegions(
  raw: RawWatchProviders | undefined,
): WatchRegions {
  const regions: WatchRegions = {};

  for (const region of WATCH_REGIONS) {
    const source = raw?.results?.[region];

    if (!source) {
      continue;
    }

    const offers = {
      link: source.link ?? null,
      ...Object.fromEntries(
        OFFER_KINDS.map((kind) => [
          kind,
          toProviders(source[RAW_KEYS[kind]] as Array<RawProvider> | undefined),
        ]),
      ),
    } as WatchOffers;

    if (hasOffers(offers)) {
      regions[region] = offers;
    }
  }

  return regions;
}

const REGION_NAMES = new Intl.DisplayNames(['en'], { type: 'region' });

export function regionName(region: WatchRegion): string {
  return REGION_NAMES.of(region) ?? region;
}

/** "the United States" reads better in a sentence than "United States". */
export function regionInSentence(region: WatchRegion): string {
  return ['US', 'GB', 'NL'].includes(region)
    ? `the ${regionName(region)}`
    : regionName(region);
}

function joinNames(names: Array<string>): string {
  if (names.length <= 1) {
    return names.join('');
  }

  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
}

const SENTENCE_VERBS: Record<OfferKind, string> = {
  stream: 'stream it on',
  free: 'watch it free on',
  ads: 'watch it free with ads on',
  rent: 'rent it on',
  buy: 'buy it on',
};

const NAMES_IN_SENTENCE = 4;

function namesOf(providers: Array<WatchProvider>): string {
  return joinNames(
    providers.slice(0, NAMES_IN_SENTENCE).map((provider) => provider.name),
  );
}

/**
 * Plain sentences about where to watch, for people and answer engines: one
 * sentence for each way to watch. Null when there are no offers.
 */
export function getWatchSentence(
  offers: WatchOffers | undefined,
  region: WatchRegion,
): string | null {
  if (!offers || !hasOffers(offers)) {
    return null;
  }

  const sameStores =
    offers.rent.length > 0 && namesOf(offers.rent) === namesOf(offers.buy);

  const clauses = OFFER_KINDS.filter(
    (kind) => offers[kind].length > 0 && !(sameStores && kind === 'buy'),
  ).map((kind) =>
    sameStores && kind === 'rent'
      ? `rent or buy it on ${namesOf(offers.rent)}`
      : `${SENTENCE_VERBS[kind]} ${namesOf(offers[kind])}`,
  );

  const [first, ...rest] = clauses;

  return [
    `In ${regionInSentence(region)}, you can ${first}.`,
    ...rest.map((clause) => `You can also ${clause}.`),
  ].join(' ');
}

/** The streaming services in the default region, for the meta description. */
export function getDefaultStreamNames(watch: WatchRegions): Array<string> {
  return (watch[DEFAULT_WATCH_REGION]?.stream ?? []).map(
    (provider) => provider.name,
  );
}
