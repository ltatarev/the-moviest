# Cloudflare hosting audit

An audit of whether The Moviest can move from Vercel to Cloudflare at low or zero cost. Use this file to continue the work later.

- **Date of the audit:** 2026-11-25. Adapter support and prices change often. Check the [sources](#sources) again before you start.
- **Project state at the audit:** Next.js 16.4.6, Pages Router only, deployed on Vercel.
- **Status:** analysis only. There is no Cloudflare config in the repo. The one code change that came from the audit is the season batching in `getHeatmap` (see [Done](#done)).

## Decision summary

| Question               | Answer                                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| Best Cloudflare option | Workers with `@opennextjs/cloudflare`                                                                          |
| Compatibility          | Compatible with minor changes                                                                                  |
| Plan                   | Workers Paid, $5/month. Workers Free is not reliable for this app (see [Free plan limits](#free-plan-limits)). |
| Effort                 | Medium, about 1–2 days                                                                                         |
| Alternative            | Stay on Vercel Hobby ($0) if the site is non-commercial. It works now, and the CDN cache works.                |
| Not possible           | Cloudflare Pages static export                                                                                 |
| Not recommended yet    | vinext                                                                                                         |

## What the project uses

| Area             | Details                                                                                                                                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Router           | Pages Router only. No `app/` folder, no Server Components, no Server Actions.                                                                                                                                                         |
| Rendering        | `getServerSideProps` on all data pages: `home`, `discover`, `moods/index`, `moods/[slug]`, `movie/[id]`, `tv/[id]`, `tv/[id]/episodes`, `sitemap.xml`. No SSG, no ISR. `/studio/*` pages are static.                                  |
| Page cache       | Pages set `s-maxage` and `stale-while-revalidate` (`lib/cache.ts`). The site depends on the Vercel CDN to keep the rendered pages.                                                                                                    |
| API routes       | `src/pages/api/app-config.ts` (read by the iOS app), `src/pages/api/discover/regional.ts` and 8 routes in `src/pages/api/studio/`. They use `NextApiRequest`/`NextApiResponse`, `req.cookies`, `req.body`, `Set-Cookie` and `Buffer`. |
| Proxy            | `src/proxy.ts`: a Next 16 proxy, which always runs on the Node.js runtime. It blocks bots by user agent and checks the studio session cookie.                                                                                         |
| Node APIs        | `lib/studio/session.ts`: `crypto.scrypt` (N=2^15, r=8), `createHmac`, `timingSafeEqual`, `randomBytes`, `Buffer`.                                                                                                                     |
| Images           | `next/image` with `images.unoptimized: true`. `sharp` is in `dependencies` and `serverExternalPackages`, but no code imports it.                                                                                                      |
| Fonts            | `next/font/google` in `src/pages/_app.tsx` and `src/modules/studio/fonts.ts`.                                                                                                                                                         |
| `next.config.js` | `redirects()` (4 rules), `reactStrictMode`, `experimental.agentUpgrade`.                                                                                                                                                              |
| Data             | TMDB REST API only. No database, no storage, no user accounts.                                                                                                                                                                        |
| Secrets          | `TMDB_KEY`, `STUDIO_PASSWORD_HASH`, `STUDIO_SESSION_SECRET`, `STUDIO_SESSION_VERSION`. Also `NEXT_PUBLIC_SITE_URL`, which defaults to `the-moviest.vercel.app` (`lib/site.ts`).                                                       |
| Static files     | 22 MB in `public/`. The largest file is `public/assets/bg.webm` at 19 MB, below the 25 MiB limit per file.                                                                                                                            |
| Client only      | `jszip` and `modern-screenshot` run in the browser in the studio. They have no effect on the server runtime.                                                                                                                          |

## Options

### A. Cloudflare Pages with static export: not possible

`output: "export"` cannot work, because:

1. All data pages use `getServerSideProps`. `movie/[id]` and `tv/[id]` accept any TMDB ID, so you cannot list all paths at build time.
2. A static export removes all API routes. The studio, `app-config` and the regional Discover sections stop working.
3. A static export does not run `src/proxy.ts`.
4. Next ignores `redirects()` in a static export. You would need a `_redirects` file.
5. Fresh data would need TMDB calls from the browser, which exposes `TMDB_KEY`.

### B. Cloudflare Workers with OpenNext: recommended

- OpenNext supports all Next 16 versions from 16.4.5. The Pages Router is "Supported".
- SSR works with no cache config. You do not need KV, R2, D1 or Queues.
- `node:crypto` is "fully supported" except DSA/DH key generation, argon2, ed448 and FIPS. `scrypt`, `createHmac` and `timingSafeEqual` should work, but the docs do not name them. Test them.
- `proxy.ts`: OpenNext calls the support "experimental since 1.20.3". The Cloudflare OpenNext guide still says "Not yet supported". The two sources do not agree.
- `images.unoptimized: true` skips `/_next/image`, so you do not need an Images binding. This is a conclusion from the docs, not a documented fact.
- Cloudflare now says to use vinext for new apps and keeps OpenNext for existing apps. OpenNext is still the more mature adapter.

Config to add:

- The `@opennextjs/cloudflare` and `wrangler` dev dependencies.
- A `wrangler.jsonc` file with `main: ".open-next/worker.js"`, an `assets` block (`directory: ".open-next/assets"`, `binding: "ASSETS"`), a current `compatibility_date` and `compatibility_flags: ["nodejs_compat"]`. From compatibility date 2026-08-04, `nodejs_compat` is on by default.
- An `open-next.config.ts` file with `export default defineCloudflareConfig();`.
- `preview` and `deploy` scripts.
- The secrets, set with `wrangler secret put`. Set `NEXT_PUBLIC_SITE_URL` at build time.

### C. Cloudflare Workers with vinext: not recommended yet

- The sources disagree on maturity. The blog post (2026-09-28) says "Vinext 1.0 … production-ready". The Cloudflare guide (2026-11-05) says "vinext is in beta". The vinext FAQ says "with caution" and calls OpenNext "the safer choice".
- The compatibility dashboard tests against Next 16.2.6, and the project uses 16.4.6.
- `getServerSideProps` passes 48 of 48 tests. API route tests are edge runtime only. The dashboard does not list `res.setHeader`, `res.status().json`, `req.cookies`, `request.nextUrl.clone()`, `images.unoptimized`, `serverExternalPackages` or `postcss-preset-mantine`. Treat these as untested.
- `proxy.ts` is supported. All code runs in workerd.
- **Caching difference:** vinext does not cache `getServerSideProps` responses, "even when they return a public browser policy". To cache pages, you need an explicit policy and the Response Store (R2 and a Durable Object).
- **Fonts:** `next/font` loads at runtime from a CDN, not self-hosted at build time. This can cause layout shift, and each visitor then sends a request to Google.
- vinext builds with Vite. Each Next upgrade then depends on how fast vinext follows.

## Problems and workarounds

| #   | Location                                       | Problem                                                                                                                                                                                | Status                                   | Smallest workaround                                                                                                                                                                                                                                                                              |
| --- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `lib/cache.ts`, all `getServerSideProps` pages | No page cache. A Worker runs before the Cloudflare cache, so each view runs SSR and calls TMDB again. `/discover` makes 7 or more TMDB calls per view.                                 | Confirmed                                | Accept it on Workers Paid, or wrap the worker and store pages in `caches.default` with the existing `s-maxage` values.                                                                                                                                                                           |
| 2   | All SSR pages, on Workers Free                 | The free plan allows 10 ms of CPU per request. Most pages need more (see [measurements](#measured-cpu)). The result is error 1102.                                                     | Measured locally. Confirm on Cloudflare. | Workers Paid                                                                                                                                                                                                                                                                                     |
| 3   | `lib/studio/session.ts` (`verifyPassword`)     | scrypt uses about 50–150 ms of CPU, so the studio login fails on Free.                                                                                                                 | Confirmed on Free                        | Workers Paid. See [Free plan limits](#free-plan-limits) for an alternative.                                                                                                                                                                                                                      |
| 4   | `lib/studio/tmdb.ts` (`getHeatmap`)            | The page made 1 call for the show and 1 for each season. Free allows 50 outgoing calls, so Saturday Night Live (52 seasons, 53 calls) failed.                                          | **Fixed** (see [Done](#done))            | —                                                                                                                                                                                                                                                                                                |
| 5   | `src/proxy.ts`                                 | The Next 16 proxy is locked to Node. OpenNext support is experimental.                                                                                                                 | Needs testing                            | Remove the proxy. Each studio API route already calls `requireStudioSession`, and the studio pages have no server data. Move the bot block to the Cloudflare "Block AI bots" setting or a WAF rule. Move `X-Robots-Tag` to `headers()` in `next.config.js`. Redirect to the login on the client. |
| 6   | `src/proxy.ts` matcher                         | On Workers, files in `public/` come from the assets layer before the Worker, so the user-agent block does not cover `/assets/*`.                                                       | Confirmed                                | A WAF rule covers the assets too.                                                                                                                                                                                                                                                                |
| 7   | `package.json`, `next.config.js`               | `sharp` is a native binary that workerd cannot load. No code uses it.                                                                                                                  | Needs testing                            | Remove `sharp` and the `serverExternalPackages` entry.                                                                                                                                                                                                                                           |
| 8   | Worker bundle                                  | The sources disagree on the limit. OpenNext says 3 MiB gzip on Free and 10 MiB on Paid. The Cloudflare limits page says "There is no compressed size limit", only 64 MiB uncompressed. | Needs testing                            | Read `handler.mjs.meta.json` after the build.                                                                                                                                                                                                                                                    |
| 9   | `lib/site.ts`                                  | The canonical, Open Graph and sitemap URLs default to `the-moviest.vercel.app`.                                                                                                        | Confirmed                                | Set `NEXT_PUBLIC_SITE_URL`.                                                                                                                                                                                                                                                                      |
| 10  | `next.config.js`                               | The adapters may not know `experimental.agentUpgrade`.                                                                                                                                 | Low risk                                 | Remove it if the build fails.                                                                                                                                                                                                                                                                    |
| 11  | `public/assets/bg.webm`                        | 19 MB is below the 25 MiB limit per file.                                                                                                                                              | OK                                       | —                                                                                                                                                                                                                                                                                                |
| 12  | `lib/cache.ts` comments                        | The comments mention the Vercel CDN.                                                                                                                                                   | Documentation                            | Update them after the move.                                                                                                                                                                                                                                                                      |
| 13  | `docs/studio.md`                               | The setup steps name Vercel environment variables.                                                                                                                                     | Documentation                            | Add the `wrangler secret put` steps.                                                                                                                                                                                                                                                             |

## Measured CPU

Server CPU time per request, measured with `next start` on an Apple M-series Mac, with 30 requests per page after a warm-up. Cloudflare servers are probably slower per core, so expect higher values on Workers.

| Page                              | CPU per request | HTML size | `__NEXT_DATA__` |
| --------------------------------- | --------------- | --------- | --------------- |
| `/api/app-config`                 | 2 ms            | —         | —               |
| `/sitemap.xml`                    | 4 ms            | 12 KB     | —               |
| `/tv/1396/episodes` (5 seasons)   | 5 ms            | 61 KB     | —               |
| `/tv/1396`                        | 6 ms            | 75 KB     | —               |
| `/movie/603`                      | 7 ms            | 95 KB     | 19 KB           |
| `/moods/cozy`                     | 8 ms            | 182 KB    | —               |
| `/home`                           | 11 ms           | 131 KB    | 28 KB           |
| `/moods`                          | 12 ms           | 47 KB     | —               |
| `/tv/456/episodes` (The Simpsons) | 15 ms           | 359 KB    | 63 KB           |
| `/discover`                       | 20 ms           | 204 KB    | 36 KB           |

Findings:

- The props are small. Most of the CPU goes to the React render of the markup.
- Parsing JSON for the Simpsons seasons (about 2 MB from TMDB) takes about 4.5 ms. TMDB has no field selection, so this cost stays.
- Each `PosterImage` adds an inline blur SVG of about 760 bytes (`placeholder="blur"` in `src/modules/ui/PosterImage.tsx`). That is 36 KB on `/discover`.

To measure again, build a copy of the repo outside the project and time the server process. Turbopack does not follow a `node_modules` symlink outside the root, so clone the folder (`cp -cR node_modules …` on APFS). Then run `next start` and read `ps -o time=` for the server process before and after N requests to each URL.

## Free plan limits

| Limit (per request)      | Workers Free    | Workers Paid                 |
| ------------------------ | --------------- | ---------------------------- |
| CPU time                 | 10 ms           | 30 s by default, up to 5 min |
| Outgoing `fetch()` calls | 50              | 10,000                       |
| Memory                   | 128 MB          | 128 MB                       |
| Requests                 | 100,000 per day | 10M per month included       |

CPU time counts only the time the processor works on your code. Time spent waiting for `fetch()` does not count. The Paid plan is set per account, not per Worker.

### Can the code fit the Free plan?

| Problem                 | Fix for Free                                                                                       | Effort       | Result                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------- |
| Too many outgoing calls | Batch the seasons                                                                                  | Done         | Complete fix                                                                                  |
| Studio login CPU        | Replace scrypt with one HMAC-SHA256 check of a long random password (32 or more random characters) | About 1 hour | Complete fix, but only with a generated password, never with a password a person can remember |
| Render CPU              | See the steps below                                                                                | 2–4 days     | Possible, not guaranteed                                                                      |

Steps to lower render CPU:

1. Change `/home`, `/discover`, `/moods` and `/moods/[slug]` to `getStaticProps`, and rebuild on a schedule (for example a GitHub Actions cron that deploys every few hours). Stored HTML costs about 1 ms per request. Data is then hours old instead of 5 minutes old. Do not use ISR `revalidate`: the new render runs in the Worker and fails at 10 ms again.
2. Store the detail pages in `caches.default`. A hit costs about 1 ms. A miss still needs the full render, and a miss above 10 ms returns error 1102. A failed background refresh also leaves the old copy in the cache.
3. Make the markup smaller. For example, replace the inline blur SVG with a CSS background on the wrapper, and show fewer cast cards or rail items. Expect a gain of 10–30%.
4. For long episode heatmaps, render the newest seasons on the server and load older seasons in the browser.

Even after these steps, `/movie/[id]` and `/tv/[id]` stay close to 10 ms on Cloudflare hardware. Each new feature must also stay below the limit.

**Recommendation:** before you start this work, deploy the current build to a free Worker for one hour. Read the P99 CPU time in **Workers → the Worker → Metrics**, and run `wrangler tail` to find `exceededCpu` results. `wrangler dev` does not apply the CPU limit. If the detail pages go over 10 ms, use the $5 plan.

## Costs

| Plan                    | Cost per month         | Notes                                                                                                                                                                                                             |
| ----------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cloudflare Pages Free   | $0                     | Not possible for this app                                                                                                                                                                                         |
| Cloudflare Workers Free | $0                     | Not reliable (CPU limit). Static asset requests are free with no limit.                                                                                                                                           |
| Cloudflare Workers Paid | $5                     | Includes 10M requests and 30M CPU ms, then $0.30 for each extra million requests and $0.02 for each extra million CPU ms. No egress charges. At 50 ms of CPU per render, 30M CPU ms covers about 600,000 renders. |
| Vercel Hobby            | $0                     | Includes 1M function invocations, 4 hours of active CPU, 100 GB of transfer and 1M CDN requests per month, with no paid overage. The terms allow "personal or non-commercial use" only.                           |
| Vercel Pro              | $20 per developer seat | Includes a $20 usage credit. Needed for commercial use.                                                                                                                                                           |

Services that can add Cloudflare cost: none for OpenNext SSR. Costs start only if you add a page cache: the vinext Response Store uses R2 and a Durable Object, and the OpenNext data cache uses R2 or KV. R2 Free includes 10 GB and 1M/10M operations per month. KV Free includes 100,000 reads and 1,000 writes per day.

Open question: does the site count as commercial for Vercel Hobby? If the iOS app earns money from purchases, subscriptions or ads, a site that promotes it is probably commercial.

## Migration plan

Do these steps in this order:

1. Get a Cloudflare account on Workers Paid.
2. Remove `src/proxy.ts` and move its work as described in problem 5. Alternative: keep the proxy and test it carefully.
3. Remove `sharp` from `package.json` and `serverExternalPackages` from `next.config.js`.
4. Add the OpenNext config (see [option B](#b-cloudflare-workers-with-opennext-recommended)) and the secrets. Set `NEXT_PUBLIC_SITE_URL`.
5. Optional: add a `caches.default` wrapper so that the `s-maxage` values work again. This lowers CPU use and the number of TMDB calls.
6. Test these items on a preview deploy:
   - The studio login (scrypt), the session cookie, and logout.
   - The 4 redirects in `next.config.js`.
   - `/api/app-config`. The iOS app depends on it.
   - `/tv/1667/episodes` (52 seasons) and `/tv/456/episodes`.
   - `/sitemap.xml` and the canonical URLs.
   - The bot block, for pages and for `/assets/*`.
7. Update `docs/studio.md` and the comments in `lib/cache.ts`.
8. Move the domain and keep Vercel running until the Cloudflare site is stable.

## Risks compared with Vercel

- Without a cache wrapper, there is no page cache. This means higher latency, more CPU, and a risk of TMDB rate limits when traffic spikes.
- The proxy support is experimental, if you keep `src/proxy.ts`.
- OpenNext follows each Next minor release with a delay. A fast Next upgrade can break the deploy.
- Logs come from `wrangler tail` and the Cloudflare dashboard, not from Vercel.
- The user-agent block does not cover static assets unless you add a WAF rule.

## Done

- **Season batching in `getHeatmap`** (`lib/studio/tmdb.ts`). The first call gets the show and seasons 1–19, because TMDB leaves out the seasons that do not exist. Then the missing seasons come in batches of 19 (`SEASONS_PER_REQUEST`). TMDB refuses more than 20 append items in one call. If TMDB does not return a season, the page leaves that season out and does not fail.

  | Show                       | Seasons | Calls before | Calls after |
  | -------------------------- | ------- | ------------ | ----------- |
  | Breaking Bad (1396)        | 5       | 6            | 1           |
  | The Simpsons (456)         | 38      | 39           | 2           |
  | Saturday Night Live (1667) | 52      | 53           | 3           |

  A compare against real TMDB data gave the same output as before for all 3 shows. The tests are in `lib/studio/tmdb.test.ts`.

## Sources

Read on 2026-11-25.

- Cloudflare: [OpenNext guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/opennext/index.md), [Next.js on Workers (vinext)](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/index.md), [node:crypto](https://developers.cloudflare.com/workers/runtime-apis/nodejs/crypto/), [Node.js APIs](https://developers.cloudflare.com/workers/runtime-apis/nodejs/)
- Cloudflare limits and prices: [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/), [Workers limits](https://developers.cloudflare.com/workers/platform/limits/), [subrequest limit changelog](https://developers.cloudflare.com/changelog/post/2026-02-11-subrequests-limit/), [Pages limits](https://developers.cloudflare.com/pages/platform/limits/)
- OpenNext: [overview](https://opennext.js.org/cloudflare), [caching](https://opennext.js.org/cloudflare/caching), [troubleshooting](https://opennext.js.org/cloudflare/troubleshooting), [images](https://opennext.js.org/cloudflare/howtos/image), [known issues](https://opennext.js.org/cloudflare/known-issues), [releases](https://github.com/opennextjs/opennextjs-cloudflare/releases)
- vinext: [repo](https://github.com/cloudflare/vinext), [1.0 blog post](https://blog.cloudflare.com/vinext-nextjs-on-vite/), [vinext.dev](https://vinext.dev/), [compatibility](https://vinext.dev/compatibility), [caching](https://vinext.dev/docs/guides/caching), [differences](https://vinext.dev/docs/reference/differences)
- Vercel: [pricing](https://vercel.com/pricing), [Hobby plan](https://vercel.com/docs/plans/hobby), [fair use](https://vercel.com/docs/limits/fair-use-guidelines), [terms](https://vercel.com/legal/terms)
- Next.js: [proxy](https://nextjs.org/docs/pages/api-reference/file-conventions/proxy)
