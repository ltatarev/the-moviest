import type { CSSProperties, ReactNode } from 'react';
import { CARD_HEIGHT, CARD_WIDTH, colors, fonts } from '../theme';
import { parseAccent } from '../text';

/**
 * Root of every exported card: a fixed 1080×1350 box with its own reset, so
 * the site's Tailwind/Mantine base styles never reach the export.
 */
export function CardFrame({
  background,
  color,
  children,
  style,
}: {
  background: string;
  color: string;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      data-studio-card
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        background,
        color,
        fontFamily: fonts.body,
        fontSize: 28,
        fontWeight: 400,
        fontStyle: 'normal',
        lineHeight: 1.3,
        letterSpacing: 'normal',
        textAlign: 'left',
        WebkitFontSmoothing: 'antialiased',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Film grain. A committed PNG, not an SVG filter: it exports reliably. */
export function Grain({
  opacity,
  blend,
}: {
  opacity: number;
  blend: 'overlay' | 'multiply' | 'soft-light';
}) {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/studio/grain.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: '512px 512px',
        opacity,
        mixBlendMode: blend,
        pointerEvents: 'none',
      }}
    />
  );
}

export function Wordmark({
  size,
  color,
  weight = 800,
  withIcon = false,
}: {
  size: number;
  color: string;
  weight?: 700 | 800;
  withIcon?: boolean;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: size * 0.4,
        color,
      }}
    >
      {withIcon && (
        <svg
          width={size * 1.1}
          height={size * 1.1}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={2}
          aria-hidden
        >
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="M3 9h18M8 5v4M16 5v4" />
        </svg>
      )}
      <span
        style={{
          fontFamily: fonts.display,
          fontWeight: weight,
          fontSize: size,
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        moviest
      </span>
    </div>
  );
}

/** Headline copy where `*word*` renders italic in the accent colour. */
export function AccentText({
  text,
  accentColor = colors.coral,
}: {
  text: string;
  accentColor?: string;
}) {
  return (
    <>
      {parseAccent(text).map((segment, index) =>
        segment.accent ? (
          <span key={index} style={{ color: accentColor, fontStyle: 'italic' }}>
            {segment.text}
          </span>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </>
  );
}

export function Arrow({ color, size = 68 }: { color: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 34 20"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M2 10h28M22 2l8 8-8 8" />
    </svg>
  );
}

export function ProviderPills({ names }: { names: string[] }) {
  if (!names.length) {
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <span
        style={{
          fontSize: 24,
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: colors.textTertiary,
        }}
      >
        Stream on
      </span>
      {names.map((name) => (
        <span
          key={name}
          style={{
            fontSize: 26,
            fontWeight: 600,
            padding: '12px 24px',
            borderRadius: 999,
            background: colors.pillFill,
            color: colors.pillText,
            lineHeight: 1.2,
          }}
        >
          {name}
        </span>
      ))}
    </div>
  );
}
