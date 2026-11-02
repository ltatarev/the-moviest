import type { Region, TrendingItem, TrendingSource } from '@lib/studio/types';
import { REGIONS } from '@lib/studio/types';
import { fetchTrending } from '../api';
import { CardFrame, Grain, Wordmark } from '../components/Card';
import { Poster } from '../components/Poster';
import {
  currentMonth,
  fillPlaceholders,
  fitFontSize,
  hasPlaceholder,
  monthLabel,
  slugify,
} from '../text';
import { colors, fonts } from '../theme';
import type { PickedTitle, TemplateDef } from '../types';

type Input = {
  source: TrendingSource;
  month: string;
  region: Region;
  eyebrow: string;
  heading: string;
  subheading: string;
  titles: PickedTitle[];
};

type Data = { items: TrendingItem[] };

const sourceOptions: Array<{ value: TrendingSource; label: string }> = [
  { value: 'week', label: 'Trending this week' },
  { value: 'popular', label: 'Popular now' },
  { value: 'new', label: 'New this month (first aired in the chosen month)' },
];

/** The month the copy talks about: the chosen one for "new", else this one. */
function copyMonth(input: Input): string {
  return input.source === 'new' ? input.month : currentMonth();
}

function TrendingCard({ input, data }: { input: Input; data: Data }) {
  const values = { month: monthLabel(copyMonth(input)) };
  const items = data.items.slice(0, 10);

  return (
    <CardFrame
      background={colors.lavender}
      color={colors.lavenderText}
      style={{
        padding: '80px 72px 64px',
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
      }}
    >
      <Grain opacity={0.22} blend="multiply" />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          borderBottom: '3px solid rgba(20,12,34,0.18)',
          paddingBottom: 32,
        }}
      >
        <span
          style={{
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: colors.lavenderEyebrow,
          }}
        >
          {fillPlaceholders(input.eyebrow, values)}
        </span>
        <div
          style={{
            fontFamily: fonts.display,
            fontWeight: 800,
            fontSize: fitFontSize(input.heading, 92, 17),
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
          }}
        >
          {fillPlaceholders(input.heading, values)}
        </div>
        <span style={{ fontSize: 30, color: colors.lavenderSecondary }}>
          {fillPlaceholders(input.subheading, values)}
        </span>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gridTemplateRows: 'repeat(5, auto)',
          gridAutoFlow: 'column',
          columnGap: 36,
          rowGap: 26,
        }}
      >
        {items.map((item, index) => {
          const service = [item.provider, item.isNew ? 'new' : null]
            .filter(Boolean)
            .join(' · ');

          return (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                minWidth: 0,
              }}
            >
              <span
                style={{
                  width: 52,
                  flexShrink: 0,
                  fontFamily: fonts.display,
                  fontWeight: 400,
                  fontSize: 52,
                  color: colors.lavenderEyebrow,
                  textAlign: 'right',
                  lineHeight: 1,
                }}
              >
                {index + 1}
              </span>
              <Poster
                path={item.posterPath}
                seed={item.id}
                size="w185"
                width={96}
                height={136}
                radius={12}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.display,
                    fontWeight: 700,
                    fontSize: 30,
                    lineHeight: 1.15,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {item.title}
                </span>
                {service && (
                  <span style={{ fontSize: 24, color: colors.lavenderMuted }}>
                    {service}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          position: 'relative',
          marginTop: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <span style={{ fontSize: 24, color: colors.lavenderMuted }}>
          Data: TMDB · JustWatch
        </span>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 6,
          }}
        >
          <span style={{ fontSize: 24, color: colors.lavenderSecondary }}>
            track yours on
          </span>
          <Wordmark size={60} color={colors.lavenderText} />
        </div>
      </div>
    </CardFrame>
  );
}

export const trending: TemplateDef<Input, Data> = {
  id: 'trending',
  name: 'Most popular TV',
  description:
    'Top 10 shows with where to stream them. Fetched from TMDB or hand-picked.',
  fields: {
    source: { kind: 'select', label: 'List', options: sourceOptions },
    month: {
      kind: 'month',
      label: 'Month',
      showWhen: (input) => input.source === 'new',
    },
    region: {
      kind: 'select',
      label: 'Streaming region',
      options: REGIONS.map((region) => ({ value: region, label: region })),
    },
    eyebrow: {
      kind: 'text',
      label: 'Eyebrow',
      help: '{month} is filled in.',
      max: 40,
    },
    heading: { kind: 'text', label: 'Heading', max: 30 },
    subheading: { kind: 'text', label: 'Subheading', max: 60 },
    titles: {
      kind: 'titles',
      label: 'Hand-picked list (optional)',
      media: 'tv',
      min: 0,
      max: 10,
      help: 'Exactly 10 shows, in order. Replaces the fetched list.',
    },
  },
  defaults: {
    source: 'week',
    month: currentMonth(),
    region: 'DE',
    eyebrow: 'Moviest · {month}',
    heading: 'MOST POPULAR TV',
    subheading: 'Trending on TMDB, and where to stream it',
    titles: [],
  },
  validate: (input) => {
    const errors: string[] = [];
    const values = { month: monthLabel(copyMonth(input)) };

    if (input.titles.length !== 0 && input.titles.length !== 10) {
      errors.push('Hand-picked list needs exactly 10 shows (or none)');
    }

    if (
      [input.eyebrow, input.heading, input.subheading].some((text) =>
        hasPlaceholder(fillPlaceholders(text, values)),
      )
    ) {
      errors.push('Copy has an unfilled {placeholder}');
    }

    return errors;
  },
  dataKey: (input) =>
    JSON.stringify([
      input.region,
      input.titles.length
        ? input.titles.map((title) => title.id)
        : [input.source, input.source === 'new' ? input.month : null],
    ]),
  resolve: async (input) => ({
    items: await fetchTrending({
      source: input.source,
      region: input.region,
      month: input.source === 'new' ? input.month : undefined,
      ids: input.titles.length
        ? input.titles.map((title) => title.id)
        : undefined,
    }),
  }),
  slides: (input, data) => [
    {
      key: 'trending',
      label: 'Top 10',
      element: <TrendingCard input={input} data={data} />,
    },
  ],
  slug: (input) =>
    slugify(
      `${input.titles.length ? 'picked' : input.source}-${copyMonth(input)}`,
    ),
};
