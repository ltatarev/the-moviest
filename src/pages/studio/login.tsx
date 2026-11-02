import { useRouter } from 'next/router';
import { useState, type FormEvent } from 'react';
import { safeNextPath } from '@lib/studio/nextPath';
import {
  inputClass,
  primaryButtonClass,
  StudioShell,
} from '@modules/studio/components/StudioShell';

export default function StudioLogin() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);

    try {
      const response = await fetch('/api/studio/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        await router.replace(safeNextPath(router.query.next));

        return;
      }

      const body = await response.json().catch(() => null);
      setError(body?.error ?? 'Sign-in failed');
    } catch {
      setError('Network error');
    } finally {
      setBusy(false);
    }
  }

  return (
    <StudioShell title="Sign in" showLogout={false}>
      <form
        onSubmit={submit}
        className="mx-auto mt-16 flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-6"
      >
        <h1 className="font-display text-2xl font-bold">Sign in</h1>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="studio-password" className="text-sm font-semibold">
            Password
          </label>
          <input
            id="studio-password"
            type="password"
            autoComplete="current-password"
            autoFocus
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={inputClass}
          />
        </div>
        {error && (
          <p role="alert" className="text-sm text-accent-soft">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={busy || !password}
          className={primaryButtonClass}
        >
          {busy ? 'Checking…' : 'Sign in'}
        </button>
      </form>
    </StudioShell>
  );
}
