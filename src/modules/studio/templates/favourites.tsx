import type { Region, TitleDetails } from '@lib/studio/types';
import { REGIONS } from '@lib/studio/types';
import { studioImageUrl } from '@lib/studio/imagePath';
import { fetchTitle } from '../api';
import {
  AccentText,
  Arrow,
  CardFrame,
  Grain,
  ProviderPills,
  Wordmark,
} from '../components/Card';
import { Poster } from '../components/Poster';
import {
  fillPlaceholders,
  fitFontSize,
  hasPlaceholder,
  slugify,
} from '../text';
import { colors, fonts } from '../theme';
import type { PickedTitle, SlideDef, TemplateDef } from '../types';

type Input = {
  person: string;
  headline: string;
  kicker: string;
  source: string;
  region: Region;
  titles: PickedTitle[];
};

type Data = { details: TitleDetails[] };

const regionOptions = REGIONS.map((region) => ({
  value: region,
  label: region,
}));

/* ---------- slides ---------- */

function Cover({ input, data }: { input: Input; data: Data }) {
  const posters = data.details.length
    ? Array.from(
        { length: 12 },
        (_, index) => data.details[index % data.details.length],
      )
    : [];
  const headline = fillPlaceholders(input.headline, {
    person: input.person.trim(),
  });

  return (
    <CardFrame background={colors.ground} color={colors.text}>
      <div
        style={{
          position: 'absolute',
          left: -80,
          top: -60,
          width: 1240,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: 24,
          transform: 'rotate(-6deg)',
        }}
      >
        {posters.map((title, index) => (
          <Poster
            key={index}
            path={title.posterPath}
            seed={title.id}
            size="w500"
            width="100%"
            height="auto"
            radius={20}
            style={{
              aspectRatio: '2 / 3',
              boxShadow: '0 16px 48px rgba(0,0,0,0.45)',
            }}
          />
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 840,
          background:
            'linear-gradient(to bottom, rgba(11,7,22,0) 0%, rgba(11,7,22,0.55) 30%, rgba(11,7,22,0.92) 62%, #0B0716 100%)',
        }}
      />
      <Grain opacity={0.16} blend="overlay" />
      <div style={{ position: 'absolute', left: 72, top: 64 }}>
        <Wordmark size={40} color={colors.text} weight={700} withIcon />
      </div>
      <div
        style={{
          position: 'absolute',
          left: 72,
          right: 72,
          bottom: 88,
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
        }}
      >
        <span
          style={{
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: colors.textSecondary,
          }}
        >
          From an interview · {input.source.trim()}
        </span>
        <div
          style={{
            fontFamily: fonts.display,
            fontWeight: 800,
            fontSize: fitFontSize(headline, 100, 38),
            lineHeight: 0.98,
            letterSpacing: '-0.03em',
          }}
        >
          <AccentText text={headline} />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: 28, color: colors.textSecondary }}>
            {input.kicker.trim()}
          </span>
          <Arrow color={colors.text} />
        </div>
      </div>
    </CardFrame>
  );
}

function TitleSlide({
  title,
  picked,
  index,
  slideNumber,
  slideCount,
}: {
  title: TitleDetails;
  picked?: PickedTitle;
  index: number;
  slideNumber: number;
  slideCount: number;
}) {
  const backdrop = studioImageUrl(title.backdropPath, 'w780');
  const meta = [
    title.year,
    title.maker,
    title.voteAverage !== null ? `★ ${title.voteAverage.toFixed(1)}` : null,
  ].filter(Boolean);
  const note = picked?.note?.trim();

  return (
    <CardFrame background={colors.ground} color={colors.text}>
      {backdrop ? (
        <img
          src={backdrop}
          alt=""
          style={{
            position: 'absolute',
            inset: -80,
            width: 1240,
            height: 1510,
            objectFit: 'cover',
            filter: 'blur(48px)',
            opacity: 0.6,
          }}
        />
      ) : (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: colors.backdropFallback,
          }}
        />
      )}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(11,7,22,0.35) 0%, rgba(11,7,22,0.75) 45%, #0B0716 78%)',
        }}
      />
      <Grain opacity={0.16} blend="overlay" />
      <div
        style={{
          position: 'absolute',
          left: 72,
          right: 72,
          top: 64,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Wordmark size={36} color={colors.text} weight={700} />
        <span
          style={{
            fontSize: 26,
            fontWeight: 600,
            color: colors.textSecondary,
            padding: '12px 24px',
            borderRadius: 999,
            background: 'rgba(255,255,255,0.08)',
          }}
        >
          {slideNumber} / {slideCount}
        </span>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 72,
          right: 72,
          top: 184,
          display: 'flex',
          gap: 44,
          alignItems: 'flex-end',
        }}
      >
        <Poster
          path={title.posterPath}
          seed={title.id}
          size="w780"
          width={440}
          height={660}
          radius={28}
          style={{
            boxShadow: '0 36px 80px rgba(0,0,0,0.55)',
            border: '2px solid rgba(255,255,255,0.08)',
          }}
        />
        <span
          style={{
            fontFamily: fonts.display,
            fontWeight: 800,
            fontSize: 240,
            lineHeight: 0.8,
            letterSpacing: '-0.05em',
            color: 'rgba(243,238,248,0.12)',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 72,
          right: 72,
          bottom: 72,
          display: 'flex',
          flexDirection: 'column',
          gap: 26,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div
            style={{
              fontFamily: fonts.display,
              fontWeight: 800,
              fontSize: fitFontSize(title.title, 80, 20),
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {title.title}
          </div>
          {meta.length > 0 && (
            <span style={{ fontSize: 30, color: colors.textSecondary }}>
              {meta.join(' · ')}
            </span>
          )}
        </div>
        {note && (
          <p
            style={{
              margin: 0,
              fontSize: 34,
              lineHeight: 1.45,
              color: colors.textQuote,
              fontStyle: 'italic',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            “{note}”
          </p>
        )}
        <ProviderPills
          names={title.providers.slice(0, 3).map((provider) => provider.name)}
        />
        <span style={{ fontSize: 20, color: colors.textTertiary }}>
          Data: TMDB{title.providers.length ? ' · JustWatch' : ''}
        </span>
      </div>
    </CardFrame>
  );
}

function countLabel(details: TitleDetails[]): string {
  const count = details.length;

  if (details.every((title) => title.media === 'movie')) {
    return `${count} films`;
  }

  if (details.every((title) => title.media === 'tv')) {
    return `${count} shows`;
  }

  return `${count} titles`;
}

function EndSlide({ input, data }: { input: Input; data: Data }) {
  const [front, left, right] = data.details;

  return (
    <CardFrame
      background={colors.groundEnd}
      color={colors.text}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 68,
        padding: '96px 80px',
      }}
    >
      <Grain opacity={0.14} blend="overlay" />
      <div style={{ position: 'relative', width: 600, height: 460 }}>
        {left && (
          <Poster
            path={left.posterPath}
            seed={left.id}
            size="w342"
            width={260}
            height={390}
            radius={24}
            style={{
              position: 'absolute',
              left: 20,
              top: 60,
              transform: 'rotate(-12deg)',
              boxShadow: '0 28px 60px rgba(0,0,0,0.5)',
            }}
          />
        )}
        {right && (
          <Poster
            path={right.posterPath}
            seed={right.id}
            size="w342"
            width={260}
            height={390}
            radius={24}
            style={{
              position: 'absolute',
              right: 20,
              top: 60,
              transform: 'rotate(12deg)',
              boxShadow: '0 28px 60px rgba(0,0,0,0.5)',
            }}
          />
        )}
        {front && (
          <Poster
            path={front.posterPath}
            seed={front.id}
            size="w500"
            width={260}
            height={390}
            radius={24}
            style={{
              position: 'absolute',
              left: 170,
              top: 0,
              boxShadow: '0 36px 72px rgba(0,0,0,0.6)',
              border: '2px solid rgba(255,255,255,0.1)',
            }}
          />
        )}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            bottom: -12,
            transform: 'translateX(-50%)',
            padding: '12px 28px',
            borderRadius: 999,
            background: colors.chipFill,
            border: '2px solid rgba(255,255,255,0.12)',
            fontSize: 26,
            fontWeight: 600,
            color: colors.pillText,
            whiteSpace: 'nowrap',
          }}
        >
          {countLabel(data.details)} · 1 list
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: fonts.display,
            fontWeight: 800,
            fontSize: 80,
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            maxWidth: 900,
          }}
        >
          Save {input.person.trim()}’s list to your watchlist
        </div>
        <p
          style={{
            margin: 0,
            fontSize: 32,
            lineHeight: 1.45,
            color: colors.textSecondary,
          }}
        >
          Opens straight in Moviest. Free, no account,
          <br />
          nothing tracked.
        </p>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 28,
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 20,
            padding: '28px 52px',
            borderRadius: 999,
            background: colors.coral,
            color: '#FFFFFF',
            fontFamily: fonts.display,
            fontWeight: 700,
            fontSize: 34,
          }}
        >
          Link in bio
          <svg
            width={36}
            height={36}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth={2.4}
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
        <span style={{ fontSize: 24, color: colors.textTertiary }}>
          Source: {input.source.trim()} · Data: TMDB
        </span>
      </div>
      <div style={{ position: 'absolute', bottom: 52 }}>
        <Wordmark size={36} color="rgba(243,238,248,0.7)" weight={700} />
      </div>
    </CardFrame>
  );
}

/* ---------- definition ---------- */

export const favourites: TemplateDef<Input, Data> = {
  id: 'favourites',
  name: 'Celebrity favourites',
  description:
    'Carousel: cover, one slide per title, and a "save the list" end slide.',
  fields: {
    person: {
      kind: 'text',
      label: 'Person',
      placeholder: 'Olivia Rodrigo',
      max: 40,
    },
    headline: {
      kind: 'text',
      label: 'Headline',
      help: 'Wrap one word in *asterisks* for the coral accent. {person} is filled in.',
      max: 70,
    },
    kicker: {
      kind: 'text',
      label: 'Kicker',
      placeholder: 'the last one is unexpected…',
      optional: true,
      max: 40,
    },
    source: {
      kind: 'text',
      label: 'Source',
      placeholder: 'Rolling Stone, 2024',
      max: 40,
    },
    region: {
      kind: 'select',
      label: 'Streaming region',
      options: regionOptions,
    },
    titles: {
      kind: 'titles',
      label: 'Titles',
      media: 'multi',
      min: 3,
      max: 10,
      withNote: true,
      help: 'In order. The note is their reason, shown as a quote.',
    },
  },
  defaults: {
    person: '',
    headline: '{person}’s *favourite* films of all time',
    kicker: '',
    source: '',
    region: 'DE',
    titles: [],
  },
  validate: (input) =>
    hasPlaceholder(
      fillPlaceholders(input.headline, { person: input.person.trim() }),
    )
      ? ['Headline has an unfilled {placeholder}']
      : [],
  dataKey: (input) =>
    JSON.stringify([
      input.region,
      input.titles.map((title) => `${title.media}:${title.id}`),
    ]),
  resolve: async (input) => ({
    details: await Promise.all(
      input.titles.map((title) =>
        fetchTitle(title.media, title.id, input.region),
      ),
    ),
  }),
  slides: (input, data) => {
    const slideCount = data.details.length + 2;
    const slides: SlideDef[] = [
      {
        key: 'cover',
        label: 'Cover',
        element: <Cover input={input} data={data} />,
      },
      ...data.details.map((title, index) => ({
        key: `title-${title.media}-${title.id}`,
        label: title.title,
        element: (
          <TitleSlide
            title={title}
            picked={input.titles.find(
              (picked) =>
                picked.id === title.id && picked.media === title.media,
            )}
            index={index}
            slideNumber={index + 2}
            slideCount={slideCount}
          />
        ),
      })),
      {
        key: 'end',
        label: 'End',
        element: <EndSlide input={input} data={data} />,
      },
    ];

    return slides;
  },
  slug: (input) => slugify(input.person),
};
