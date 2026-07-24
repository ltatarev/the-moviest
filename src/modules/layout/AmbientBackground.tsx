/**
 * Backdrop behind every page: four slowly drifting blurred blobs fixed to the
 * viewport, under a film-grain overlay.
 */
export function AmbientBackground() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <span className="animate-drift absolute -left-56 -top-64 h-[700px] w-[820px] rounded-full bg-iris opacity-30 blur-[110px]" />
        <span
          className="animate-drift absolute -right-40 -top-48 h-[640px] w-[760px] rounded-full bg-magenta opacity-25 blur-[110px]"
          style={{ animationDelay: '-9s' }}
        />
        <span
          className="animate-drift absolute -right-44 top-[1180px] h-[660px] w-[720px] rounded-full bg-accent opacity-[.14] blur-[110px]"
          style={{ animationDelay: '-17s' }}
        />
        <span
          className="animate-drift absolute -left-60 top-[1560px] h-[700px] w-[760px] rounded-full bg-[#5B3BD6] opacity-[.18] blur-[110px]"
          style={{ animationDelay: '-4s' }}
        />
      </div>

      <div
        aria-hidden
        className="grain pointer-events-none fixed inset-0 z-0 opacity-[.035]"
      />
    </>
  );
}
