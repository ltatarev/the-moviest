# App config endpoint for the iOS app, Claude Code handoff (101)

> **Status (8 Nov 2026):** Steps 1–3 done. Step 4 (Vercel challenge) waits for the owner.
>
> Lives in the web repo (`ltatarev/the-moviest`). The number continues the
> app's ticket sequence. The app side is ticket 101 in `~/Developer/Moviest`,
> `docs/tickets/101-soft-and-force-update.md`. The app depends on this
> endpoint. This endpoint depends on nothing in the app.

## What this covers

A public `GET /api/app-config` that tells the Moviest iOS app the oldest build
that can still run and the newest build in the App Store. The app uses it to
show an "Update available" row, or to block a build that is too old.

```json
{ "ios": { "minimumVersion": "1.0.0", "latestVersion": "1.3.0" } }
```

**Repo facts this ticket is written against (Nov 2026):**

- Next.js 16 with the **Pages Router**. API routes are in `src/pages/api`. Each
  handler sets its own headers with `res.setHeader`.
- `src/proxy.ts` is the middleware. Its matcher covers only `/studio`,
  `/studio/:path*` and `/api/studio/:path*`. Do not change it.
- `lib/env.ts` is for secrets. These values are public, so they do not go in
  env vars.
- The repo has no TMDB proxy and no catch-all route. Nothing else uses
  `/api/app-config`.

## Steps

### 1. The config file

Add `config/app-config.json` at the repo root:

```json
{
  "ios": {
    "minimumVersion": "1.0.0",
    "latestVersion": "1.3.0"
  }
}
```

- Set `latestVersion` to the version that is live in the App Store now. Ask
  the owner if you do not know it. Do not guess.
- A change to this file is a commit and a deploy. Git history is the audit
  trail. Write the reason in each commit message.

### 2. The route

Add `src/pages/api/app-config.ts`:

- Import the JSON statically. It is bundled at build time, so the handler reads
  no file and no database at runtime.
- `GET` and `HEAD` return `200` with the JSON.
- Any other method returns `405` with `Allow: GET, HEAD`.
- Headers:
  - `Content-Type: application/json`
  - `Cache-Control: public, max-age=0, s-maxage=300, stale-while-revalidate=86400`
- `max-age=0` is an addition to the app ticket. It stops the phone's URL cache
  from holding an old config. The CDN still caches for five minutes.
- Read nothing from the request: no query, no headers, no cookies, no IP.
- No `console` calls. Keep only the Vercel default logs.
- Do not connect to MongoDB. Do not import `@lib/mongo`.

### 3. A test

Add a Vitest test next to the other tests. Check that:

- `GET` returns `200`, the JSON and the `Cache-Control` value above.
- `POST` returns `405` with the `Allow` header.
- The JSON has `ios.minimumVersion` and `ios.latestVersion` as strings in the
  form `MAJOR.MINOR.PATCH`. This stops a typo from reaching the app.

### 4. The Vercel challenge (blocker, needs the owner)

On 8 Nov 2026, every non-browser request to `the-moviest.vercel.app`
returned this:

```text
HTTP/2 429
x-vercel-mitigated: challenge
```

`/`, `/api/reviews` and `/api/app-config` all gave it, with or without a
`User-Agent`. The iOS app's `fetch` cannot pass a browser challenge. If this
stays, the endpoint is unreachable from the app.

The fix is in the Vercel dashboard, not in code. Claude Code cannot do it.
Give the owner these steps:

1. Open the project in Vercel, then **Firewall**.
2. Find out which feature sends the challenge: **Attack Challenge Mode**, or
   **Bot Protection** in the managed rulesets.
3. If Attack Challenge Mode is on and there is no attack now, turn it off. It
   challenges all traffic and is for an attack in progress only.
4. If Bot Protection sends it, add a **custom rule**: if the request path
   equals `/api/app-config`, the action is **Bypass**. Publish the rule.
5. Run the check below again.

If the challenge stays after these steps, stop and report. Do not move the
route to another host.

### 5. Preview deploys

Vercel Deployment Protection can also block `curl` on a preview URL. Use a
Protection Bypass for Automation token, or check on production after the
merge.

## Done when

- [ ] `curl -si -A Moviest https://the-moviest.vercel.app/api/app-config`
      returns `200`, the JSON, and the `Cache-Control` value above.
- [ ] A second request shows `x-vercel-cache: HIT`.
- [ ] `curl -si -X POST https://the-moviest.vercel.app/api/app-config` returns
      `405`.
- [ ] `/`, `/studio` and the existing API routes still work as before.
- [ ] `npm run lint` and `npm test` pass.

## Out of scope

- Android. The response has only an `ios` key. Add an `android` key later if
  it is needed. Do not rename the `ios` key or its fields: old app builds read
  them.
- An editor for the values. Edit the JSON file.
