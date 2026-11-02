# Moviest Studio: social card generator, Claude Code handoff (096)

> **Status (2 Nov 2026):** 096a and 096b implemented on `feature/studio`. See `docs/studio.md` for setup. Deviations from this doc: the hash uses `:` separators; title-slide and trending titles may wrap to two lines (step-down then clamp) instead of one line + ellipsis; the hello template was never added.
>
> Lives in the web repo (`ltatarev/the-moviest`), not the iOS app. The number continues the app's ticket sequence (091–095 = Stats v3) only to keep one numbering; it has no dependency on any app ticket.

## What this covers

A private, password-protected `/studio` section in the existing Next.js web app (`ltatarev/the-moviest`, deployed at `the-moviest.vercel.app`). You pick a template, type copy and title names, TMDB fills in everything else, and you download finished 1080×1350 PNGs (a zip for carousels). The iOS app is out of scope; nothing here ships in the app for now.

**Repo facts this ticket is written against (Nov 2026, `develop`):**
- Next.js 16 with the **Pages Router** (`src/pages`, API routes in `src/pages/api`), Tailwind 4 + Mantine 9, MongoDB via mongoose, `sharp`.
- TMDB helpers in `lib/tmdb.ts` (key from `TMDB_KEY` via `lib/env.ts`, sent as `api_key` query param); `IMAGE_BASE_URL` and `ImageSize` already exist.
- Existing user auth uses `jsonwebtoken` + `JWT_SECRET` (`lib/plugins/userPlugin.ts`). The studio does **not** reuse it.
- No middleware/proxy file exists yet.

- **096a, foundation:** auth, studio shell, template contract, auto-built input form, TMDB title picker, image proxy, export.
- **096b, first templates:** the celebrity favourites carousel (cover, one slide per title, end slide), most popular TV, and the episode heatmap.
- **096c, later:** an app-screenshot showcase (device frame + headline) and a "hot take" versus card. These are not in this run; listed so the template contract leaves room for them.

**Design reference:** the "Moviest Social Cards" design canvas, with six artboards: Cover, Title slide, End slide, Most popular TV, Episode heatmap, Hot take. Export each artboard as PNG into `docs/tickets/assets/studio/` before starting. Every value is copied below, so the canvas is only a visual check.

**What the mockups get wrong (ignore it):**
- Posters are flat colour blocks; the real cards use TMDB `poster_path`.
- All bracketed copy (`[Artist]`, `[Film title]`, `[Service]`) is placeholder.
- The heatmap numbers are invented sample data.
- The mockups are drawn at 540×675. Real output is exactly **2×** that: 1080×1350. Double every px value below.

## Run order

| # | Ticket | Depends on |
|---|---|---|
| 096a | Studio foundation: auth, template contract, picker, export | Nothing |
| 096b | First three templates | 096a |
| 096c | Screenshot showcase + hot take | 096b (separate ticket later) |

## Mockup values (at 540×675; double them for output)

The web repo has no `src/theme/theme.ts`. Create `src/modules/studio/theme.ts` with these values as named constants. Card styling uses these constants (inline styles or CSS modules), not the site's Tailwind theme, so site restyles never change exported cards.

**Colours**

| Role | Value |
|---|---|
| Dark ground | `#0B0716` (end slide `#0E0A16`) |
| Text primary (dark) | `#F3EEF8` |
| Text secondary (dark) | `#B8A9D9`, quote text `#E4DCEF` |
| Text tertiary (dark) | `#8F7FB3` |
| Coral accent | `#F4536E` (one solid coral element per card, as in the app) |
| Provider pill | fill `rgba(108,99,255,0.22)`, label `#CFC9FF` |
| Light ground: Trending | `#E8E0F4`, text `#140C22`, secondary `#3A2C55` / `#4B3C66`, eyebrow `#5B4A7A` |
| Light ground: Hot take | `#F3DCCB`, text `#1A0F1E`, secondary `#5A4250`, bar `#C9304F` |

**Heatmap scale** (value ≥ min → colour)

| Band | Min | Fill | Text |
|---|---|---|---|
| Awesome | 8.5 | `#F4536E` | `#FFFFFF` |
| Great | 7.8 | `#B5449A` | `#FFFFFF` |
| Good | 7.0 | `#6A4FC0` | `#FFFFFF` |
| Meh | 6.2 | `#3A3580` | `#E4DCEF` |
| Rough | 0 | `#221A33` | `#9C8DBC` |
| Not enough votes | — | `#16101F`, 1px `rgba(255,255,255,0.06)` border | `#5E5378`, shows "–" |

The thresholds are a starting point. Keep them in one constant so they are easy to tune.

**Type** (both from Google Fonts, self-hosted via `next/font`)

| Element | Style (mockup px) |
|---|---|
| Cover headline | Outfit 800, 50, line height 0.98, letter-spacing −0.03em; accent word italic coral |
| Eyebrow | Plus Jakarta Sans 600, 13, uppercase, letter-spacing 0.14em |
| Title slide title | Outfit 800, 40 |
| Title slide quote | Plus Jakarta Sans 400 italic, 17, line height 1.45 |
| Rank ghost number | Outfit 800, 120, text at 12% |
| End slide headline | Outfit 800, 40 |
| Trending heading | Outfit 800, 46, uppercase |
| Trending row title | Outfit 700, 15 |
| Heatmap headline | Outfit 800, 30 |
| Heatmap cell | Outfit 600, 14 |
| Wordmark | Outfit 700–800, 18–30 lowercase "moviest" |

**Geometry**

| Element | Value (mockup px) |
|---|---|
| Card | 540×675, outer padding 32–40 |
| Cover poster wall | 4-column grid, gap 12, rotated −6°, posters 2:3 radius 10; bottom scrim to `#0B0716` over the lower 420px |
| Title slide poster | 220×330, radius 14 |
| Trending rows | 2 columns × 5, posters 48×66, radius 6, column gap 18, row gap 14 |
| Heatmap cells | height 34, radius 7, gap 5; episode label column 28 |
| CTA pill | padding 14/26, full radius |
| Grain | overlay at 14–25% opacity (multiply on light grounds, overlay on dark) |

---

## Prompt 096a: Studio foundation

```markdown
# Ticket 096a: Moviest Studio foundation

## Context
This repo is The Moviest web app: Next.js 16, Pages Router (`src/pages`), Tailwind + Mantine,
MongoDB, TMDB via `lib/tmdb.ts`. We're adding a private section, `/studio`, where I generate social
media images (1080×1350 PNG) from templates. I pick a template, type copy and title names, the
studio fetches TMDB data on the server, and I download PNGs (a zip for carousels). Only I use it.
It must be locked behind a strong password and must never expose `TMDB_KEY` or turn the
deployment into an open proxy. The public site's behaviour must not change.

Decided (do not reopen; flag only a hard blocker):

### Routing
- Pages under `src/pages/studio/…`, API routes under `src/pages/api/studio/…` (Pages Router, to
  match the repo; don't introduce `app/`).
- Studio code (templates, components, theme, helpers) lives in `src/modules/studio/`; server-only
  helpers in `lib/studio/`.
- The studio does not use the site layout (navbar, footer, ambient background). Give studio pages
  their own layout via the `getLayout` pattern or a check in `_app.tsx`; Phase 0 picks whichever
  fits the current `_app.tsx`.
- `/studio` is never indexed: `X-Robots-Tag: noindex, nofollow` on every studio response, plus a
  `robots.txt` disallow if one exists or is cheap to add.

### Auth (one user, one password, no auth library)
- Separate from the site's user auth: don't touch `JWT_SECRET`, the user model or
  `userPlugin.ts`, and don't share cookies with them.
- **Secrets in Vercel env only, never `NEXT_PUBLIC_`.** Add both to `.env.example` (placeholder
  values) and to the `EnvParam` type in `lib/types.ts`:
  - `STUDIO_PASSWORD_HASH`: scrypt hash, stored as `scrypt:N:r:p:saltB64url:hashB64url` (colons, not `$`: Next's dotenv expansion would eat `$…` segments in `.env.local`).
  - `STUDIO_SESSION_SECRET`: 32+ random bytes, base64.
- Add `scripts/hash-studio-password.mjs` that reads a password from stdin (no echo, never from an
  argument, so it stays out of shell history) and prints the hash string. Use Node's built-in
  `crypto.scrypt` (N=2^15, r=8, p=1, 16-byte salt). No dependencies.
- **Login:** `/studio/login` page posts to `POST /api/studio/login`.
  - Verify with scrypt + `crypto.timingSafeEqual`.
  - On failure, wait ~1s before responding and return a generic "Wrong password".
  - On success, set cookie `studio_session` = `base64url(JSON {exp, v}) + "." + base64url(HMAC-SHA256)`,
    with `HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=30 days`.
    - `v` is a version number read from an optional `STUDIO_SESSION_VERSION` env var (default 1).
      Bumping it signs everyone out.
- **Request gate:** Next 16 renamed `middleware.ts` to `proxy.ts`; Phase 0 confirms the file name
  and location (`src/` vs root) for this version. None exists yet, so the new one must match only
  `/studio/:path*` and `/api/studio/:path*` (skipping `/studio/login` and `/api/studio/login`) and
  leave every other route untouched. It verifies the HMAC with Web Crypto, checks `exp` and `v`,
  then:
  - pages → redirect to `/studio/login?next=…` (only allow a relative `next` path);
  - API → `401` JSON.
- `POST /api/studio/logout` clears the cookie. Add a logout button in the studio header.
- If either env var is missing, every studio route returns 503 "Studio not configured". Never
  fall back to "no auth".
- Rate limiting: in-memory counters don't work on serverless. The 1s delay plus a long password
  (20+ characters from a password manager) is the v1 defence. Phase 0 checks whether this Vercel
  plan offers a firewall rate-limit rule for `/api/studio/login`. Report it; don't add a paid
  dependency.

### TMDB on the server
- Build on `lib/tmdb.ts` (`API_BASE_URL`, `getEnvString('TMDB_KEY')`, `IMAGE_BASE_URL`). Add the
  extra endpoints the studio needs (search, season details, watch providers, discover) there or in
  `lib/studio/tmdb.ts`, without changing existing helpers' behaviour. Never import these from
  client components.
- Defence in depth: each studio API route also verifies the session itself (one shared
  `requireStudioSession(req, res)` helper), so a matcher mistake can't expose them.
- Studio endpoints (all auth-gated, all GET, all cached with `revalidate` of a few hours):
  - `GET /api/studio/search?q=&type=movie|tv|multi&year=` → top 8 results: id, type, title, year,
    poster path, original title.
  - `GET /api/studio/title/:type/:id?region=DE` → details plus credits (director for movies,
    creator for TV), `vote_average`, `vote_count`, genres, runtime / episode run time, seasons
    list, and flatrate watch providers for the region.
  - Template-specific data goes through each template's `resolve` (see 096b), which calls these
    same API routes.
  - Pages Router API routes don't get `revalidate`; cache with `Cache-Control: private,
    max-age=…` plus a small in-process memo, or Next's `fetch` cache if Phase 0 shows it applies
    here.
- **Image proxy:** `GET /api/studio/image?p=/w780/abc.jpg`.
  - Only fetches from `https://image.tmdb.org/t/p` + `p`.
  - `p` must match `^/(w\d{2,4}|original)/[A-Za-z0-9_-]+\.(jpg|png)$`.
  - Streams the body back with a long `Cache-Control`.
  - This exists so the browser export never hits cross-origin image errors. It must not be usable
    to fetch anything else.

### Template contract
Each template lives in `src/modules/studio/templates/<id>/` and exports one definition:

    type FieldKind =
      | { kind: 'text'; label: string; max?: number }
      | { kind: 'multiline'; label: string; max?: number }
      | { kind: 'titles'; label: string; media: 'movie' | 'tv' | 'multi'; min: number; max: number; withNote?: boolean }
      | { kind: 'title'; label: string; media: 'movie' | 'tv' | 'multi' }
      | { kind: 'select'; label: string; options: { value: string; label: string }[] }
      | { kind: 'image'; label: string }   // 096c, local upload, never sent to the server

    type TemplateDef<Input, Data> = {
      id: string; name: string; description: string;
      fields: Record<keyof Input, FieldKind>;
      defaults: Input;
      resolve: (input: Input) => Promise<Data>;          // calls studio API routes
      slides: (input: Input, data: Data) => SlideDef[];  // 1..N slides
    }
    type SlideDef = { key: string; label: string; render: () => React.ReactElement }

- The input form is built automatically from `fields`. No hand-written form per template.
- The `titles` field is a picker:
  - Type a name, see TMDB matches with poster, year and type, and pick one.
  - Selected titles show as a reorderable list (drag, or up/down buttons) with a remove button.
  - With `withNote`, each title gets a one-line note (the "why they love it" quote).
- Every slide component renders at exactly **1080×1350 CSS px**, with no responsive units inside
  the card. The preview scales it down with a CSS `transform` wrapper; the export renders it
  unscaled.

### Studio shell
- `/studio`: grid of template cards → `/studio/[templateId]`.
- `/studio/[templateId]`: left column has the form and a "Fetch data" button (runs `resolve`); right
  column has the slide previews in a horizontal strip, each with its own "PNG" button, plus a
  "Download all (.zip)" button.
- **Drafts:**
  - Inputs autosave to `localStorage` per template, wrapped in try/catch.
  - "Export post JSON" / "Import post JSON" buttons save a post's inputs to a file, so any post
    can be regenerated later.
- Plain, functional UI in the Moviest colours, using the repo's existing Mantine/Tailwind setup.
  The cards are the design work, not the studio chrome.

### Export
- Use `modern-screenshot` (`domToPng`) at scale 1 on the unscaled 1080×1350 node. Before capturing,
  await `document.fonts.ready` and every `<img>` `decode()`.
- Zip with `jszip`. Name files `{templateId}-{slug}-{nn}.png`, with `nn` = 01, 02, … in slide
  order.
- Grain is a committed PNG (`public/studio/grain.png`, a 540px tile, generated once by a script
  you add), applied as a repeated background. Don't use SVG `feTurbulence`; it exports unreliably.
- Fonts: Outfit and Plus Jakarta Sans via `next/font/google`, exposed as CSS variables and loaded
  only on studio pages (check what the site already loads in `_app.tsx` / `_document.tsx`).
- Mantine and Tailwind global styles must not leak into the card nodes: the export captures
  computed styles, so verify a reset on the card root (box-sizing, line-height, font smoothing).

### Attribution
- The studio footer shows the standard TMDB notice: "This product uses the TMDB API but is not
  endorsed or certified by TMDB."
- Every data card carries "Data: TMDB" (plus "JustWatch" when providers are shown) in its
  footer. Templates in 096b handle this.

Read first: `src/pages/_app.tsx`, `_document.tsx`, `src/pages/api/*`, `lib/tmdb.ts`, `lib/env.ts`,
`lib/types.ts`, `lib/plugins/userPlugin.ts` (to stay clear of it), `next.config.js`,
`package.json`, `.env.example`, and this handoff doc.

## Phase 0: explore and report. STOP after this, change nothing.
1. How studio pages get their own layout given the current `_app.tsx` (providers, Mantine theme,
   navbar), and how to keep site styles off the card nodes.
2. The request-gate file for Next 16 (`proxy.ts` vs `middleware.ts`, root vs `src/`), its runtime,
   and a matcher that provably touches nothing outside `/studio` and `/api/studio`.
3. Which `lib/tmdb.ts` helpers can be reused as-is, and what needs adding (search, seasons,
   providers, discover). Whether `crypto.scrypt` is fine in Pages API routes (it should be: Node).
4. Vercel plan features relevant here: firewall rate-limit rules, and the function timeout
   (heatmaps make one request per season).
5. Proposed file tree and dependency list (expected: `modern-screenshot`, `jszip`, maybe
   `@dnd-kit/sortable`; justify anything else).
6. A commit list.

## Phase 1: build (after I confirm)
- Auth, middleware, hash script, logout, 503-when-unconfigured.
- Studio API routes and the locked-down image proxy.
- Template contract, auto form, title picker, preview strip, export (PNG + zip), drafts,
  JSON import/export.
- One throwaway "hello" template to prove the pipeline end to end; delete it in 096b.
- Unit tests:
  - Session sign/verify: valid, expired, tampered, wrong version.
  - Password verify: right, wrong, malformed hash.
  - Image path validation: good paths, `..`, absolute URLs, query strings, other hosts.
  - The `next` redirect only allows relative paths.
- Gitmoji commits, one concern each.

## Done when
- [ ] The Phase 0 report has been delivered and approved.
- [ ] Logged out: every `/studio*` page redirects to login and every `/api/studio*` route returns
      401, including the image proxy.
- [ ] Tampered, expired or old-version cookies are rejected. Missing env vars give 503, never open
      access.
- [ ] `TMDB_KEY` appears nowhere in client bundles (grep the `.next` client output to check).
- [ ] The image proxy refuses anything that isn't a TMDB image path.
- [ ] The public site (home, discover, title pages, watchlists, reviews, login) behaves exactly as
      before, and its pages don't load studio code or fonts.
- [ ] The hello template exports a 1080×1350 PNG with correct fonts and a TMDB poster.
- [ ] `tsc`, lint and tests pass. Open questions listed at the end.
```

---

## Prompt 096b: First three templates

```markdown
# Ticket 096b: Studio templates: favourites carousel, most popular TV, episode heatmap

## Context
096a has landed (the studio shell, template contract, picker, export). Build three templates. All
design values are in the 096 handoff doc; PNGs are in `docs/tickets/assets/studio/`. Mockups are
drawn at 540×675, so **double every px value** for the 1080×1350 output. Delete the hello template.

Shared rules (decided):
- Shared pieces live in `src/modules/studio/components/`: `Grain`, `Wordmark`, `Poster` (via the image proxy,
  `w780` for large posters, `w342` for small ones), `ProviderPills`, `SourceFooter`.
- **One solid coral element per card at most.** Coral text accents (an italic accent word) count
  as that element.
- **Never invent data.** A missing field means the element is omitted. Never show placeholder
  text on an exported card; if a required input is empty, disable export and say which input.
- Long titles: one line with automatic font-size step-down (max 2 steps), then ellipsis.
  Test with "Everything Everywhere All at Once" and "The Lord of the Rings: The Return of the King".

### Template 1: `favourites` (carousel)
Inputs:
- `person`: text, e.g. "Olivia Rodrigo".
- `headline`: text with one accent word in `*asterisks*`, rendered italic coral; default
  "{person}'s *favourite* films of all time".
- `kicker`: optional small line, e.g. "the last one is unexpected…".
- `source`: text, e.g. "Rolling Stone, 2024".
- `titles`: 3–10 titles, `media: 'multi'`, `withNote`.

Slides:
1. **Cover:** a 4-column poster wall from the chosen titles (repeat them to fill 12 tiles),
   rotated −6°, bottom scrim, eyebrow "From an interview · {source}", headline, kicker, swipe
   arrow, wordmark top left.
2. **One slide per title:** large poster, ghost rank number, title, "{year} · {director or
   creator} · ★ {vote_average to 1 decimal}", the note as a quoted line (omitted if empty), and
   "Stream on" pills for up to 3 flatrate providers in the selected region (omitted if none).
   Page counter "n / total" top right. Use a blurred, darkened copy of the title's backdrop as
   the background if one exists (CSS `filter: blur()` on an `<img>` is fine), otherwise
   `#2A1D3A`.
3. **End slide:** a stack of 3 posters with a "{count} films · 1 list" chip, "Save {person}'s
   list to your watchlist", the line "Opens straight in Moviest. Free, no account, nothing
   tracked.", a coral "Link in bio" pill, and "Source: {source} · Data: TMDB".
- Region select (DE default; also AT, CH, US, GB) controls the provider pills.
- The "Link in bio" pill is static text for now.

### Template 2: `trending` (single slide)
Inputs:
- `source`: select, one of:
  - "Trending this week" (`/trending/tv/week`)
  - "Popular now" (`/tv/popular`)
  - "New this month" (`/discover/tv` with `first_air_date` within the chosen month, sorted by
    popularity, `vote_count` ≥ 20)
- `month`: shown only for "New this month".
- `region`: select.
- `eyebrow`: text, default "Moviest · {Month Year}".
- `heading`: text, default "MOST POPULAR TV".
- `subheading`: text, default "Trending on TMDB, and where to stream it".
- Optional manual override: the `titles` field (exactly 10). If filled, it replaces the fetched
  list, so I can curate.

Layout: light lavender ground. Two columns of five, filled column-first; each row is rank, poster,
title, and the first flatrate provider in the region (+ " · new" if it first aired in the last 30
days). Footer: "Data: TMDB · JustWatch" left, "track yours on / moviest" right.

TMDB has no monthly trending. "Monthly" posts use "Trending this week" or "New this month"; the
copy is mine to write. Don't fake a monthly ranking.

### Template 3: `heatmap` (single slide, optionally split)
Inputs:
- `show`: one TV title.
- `headline`: with an accent word, default "When did it *fall off?*".
- `minVotes`: int, default 5.

Data:
- `/tv/{id}` for the seasons list, then `/tv/{id}/season/{n}` for each season.
- Skip season 0 (specials) and unaired episodes (no `air_date` or one in the future).
- Cell value = `vote_average` to 1 decimal. If `vote_count` < `minVotes`, use the "not enough
  votes" style and show "–".
- Fetch seasons in parallel with a limit of 4, on the server inside `resolve`'s API route. Cache
  the responses.

Layout:
- Header: small poster, eyebrow "{show} · {first year}–{last year or 'now'}", headline, and
  "Best: S{n}E{n} · {v} — Worst: S{n}E{n} · {v}" computed from cells that have enough votes.
- Grid: seasons as columns, episodes as rows, with S/E labels. Legend row below the grid.
  Footer "TMDB community scores per episode" + wordmark.
- **Sizing:** compute the cell size from the available area so the grid fills the card.
  - Hide cell numbers if a cell is under 40px tall (export px) and colour alone carries it.
    Turn on the legend's numeric ranges in that case.
  - If the show has more than 12 seasons or 30 episodes in any season, split into multiple slides
    by season range (S1–S8, S9–S16…), each with the same header and a "part n/m" label.

## Phase 0: explore and report. STOP after this.
1. How 096a turned out: contract, shared component locations, export path. Anything to adjust
   before adding templates.
2. Real data checks:
   - Heatmap for Breaking Bad, Game of Thrones, Grey's Anatomy (size/split), and one small show
     (vote-count threshold).
   - Trending this week for DE.
   - A favourites run with 5 mixed movie/TV titles.
   For each: request count, total time, and anything missing.
3. The proposed font step-down rule and the cell-size formula.
4. A commit list.

## Phase 1: build (after I confirm)
- The three templates and shared components; remove the hello template.
- Unit tests for: heatmap band mapping, best/worst picking (ties go to the earlier episode; cells
  below the vote threshold are excluded), season splitting, the "new" flag, the accent-word parser,
  and provider selection (first flatrate by display priority, region-aware, none → omitted).
- Gitmoji commits, one concern each.

## Done when
- [ ] The Phase 0 report has been delivered and approved.
- [ ] Each template visually matches its mockup PNG at 2× (real posters instead of colour blocks).
- [ ] A 7-title favourites carousel exports as a zip of 9 correctly ordered PNGs.
- [ ] The Grey's Anatomy heatmap splits cleanly and Breaking Bad fits on one slide with numbers
      visible.
- [ ] No exported card ever shows placeholder text, "undefined", "NaN" or an empty pill.
- [ ] Every data card carries its source footer.
- [ ] `tsc`, lint and tests pass. Open questions listed at the end.
```

---

## App screenshots (manual workflow until 096c)

1. Boot the simulator on the device you want, e.g. iPhone 17 Pro.
2. Clean the status bar:
   `xcrun simctl status_bar booted override --time 9:41 --batteryState charged --batteryLevel 100 --cellularBars 4 --wifiBars 3`
3. Take a still: `xcrun simctl io booted screenshot ~/Desktop/moviest-$(date +%s).png`.
4. Record a clip for Reels: `xcrun simctl io booted recordVideo --codec h264 ~/Desktop/clip.mp4` (stop with Ctrl-C).
5. Undo the status bar override: `xcrun simctl status_bar booted clear`.

096c will add a `showcase` template that takes one of these screenshots (a local upload that never leaves the browser), puts it in a CSS phone frame on the plum ground, and adds a headline with an accent word plus an optional sub-line. The same template covers "new in Moviest" posts and teasers for Plus features.

---

## Open questions (surface, don't resolve silently)

1. **TMDB terms for marketing:** Moviest has a paid tier, and these cards promote it. Confirm with TMDB whether commercial-use terms apply to the app and to marketing images that use posters.
2. **Rate limiting the login:** if the Vercel plan offers a free firewall rate-limit rule, add one for `/api/studio/login` in the dashboard. Otherwise the delay plus a long password is accepted for v1.
3. **Heatmap colour bands:** the thresholds are a guess. Tune them after seeing 5–10 real shows; the goal is that a typical good show isn't all one colour.
4. **Share links on the end slide:** if the app later gets shared-list links, the favourites end slide could carry a QR code or short link. Not planned now.
