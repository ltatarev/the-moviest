const RADIUS = 27;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/** TMDB's average vote drawn as a dial, 0–100. */
export function ScoreRing({ score }: { score: number }) {
  return (
    <div className="relative h-16 w-16 flex-none">
      <svg width="64" height="64" aria-hidden className="-rotate-90">
        <circle
          cx="32"
          cy="32"
          r={RADIUS}
          fill="none"
          stroke="rgba(255,255,255,.12)"
          strokeWidth="5"
        />
        <circle
          cx="32"
          cy="32"
          r={RADIUS}
          fill="none"
          stroke="#FF4D6D"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - score / 100)}
          className="transition-[stroke-dashoffset] duration-700 ease-silk"
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center font-display text-[19px] font-bold">
        {score}
      </span>
    </div>
  );
}
