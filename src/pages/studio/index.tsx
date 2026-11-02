import Link from 'next/link';
import { StudioShell } from '@modules/studio/components/StudioShell';
import { TEMPLATES } from '@modules/studio/templates';

export default function StudioHome() {
  return (
    <StudioShell title="Templates">
      <h1 className="mb-6 font-display text-3xl font-bold">Templates</h1>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TEMPLATES.map((template) => (
          <li key={template.id}>
            <Link
              href={`/studio/${template.id}`}
              className="flex h-full flex-col gap-2 rounded-2xl border border-white/10 bg-white/[.03] p-5 hover:border-accent-soft/60"
            >
              <span className="font-display text-xl font-bold">
                {template.name}
              </span>
              <span className="text-sm text-dim">{template.description}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-xs text-dimmer">
        This product uses the TMDB API but is not endorsed or certified by TMDB.
        Streaming data by JustWatch.
      </p>
    </StudioShell>
  );
}
