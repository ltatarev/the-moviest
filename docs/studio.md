# Moviest Studio

A private section at `/studio` for making 1080×1350 social images from templates. Pick a template, type the copy and title names, fetch data (TMDB fills in posters, years, directors, scores and where to stream), and download PNGs. Carousels download as a zip.

Ticket: [096](tickets/096-studio-handoff.md).

## Setup

1. Make a long password (20+ characters, from a password manager).
2. Run `node scripts/hash-studio-password.mjs`. Type the password twice; nothing is echoed. It prints `STUDIO_PASSWORD_HASH` and a fresh `STUDIO_SESSION_SECRET`.
3. Put both in `.env.local` for local use, and in Vercel → Project → Settings → Environment Variables (Production) for the live site. Never prefix them with `NEXT_PUBLIC_`.
4. Redeploy. Open `/studio` and sign in.

Without both values every studio URL answers 503. It never falls back to open access.

To sign out everywhere: set `STUDIO_SESSION_VERSION` to a higher number (default 1) and redeploy. To change the password: re-run the script and replace both values.

## How it's put together

| Where | What |
|---|---|
| `src/proxy.ts` | Gate for `/studio/*` and `/api/studio/*` only. Redirects pages to the login, answers 401 for the API, adds `noindex`. |
| `lib/studio/session.ts` | scrypt password check and the signed session cookie. Separate from the site's user login. |
| `lib/studio/tmdb.ts` | Server-only TMDB calls (search, details + providers, trending, seasons), cached in memory for 3 hours. |
| `src/pages/api/studio/*` | Login/logout, data routes, and `image` (same-origin copy of TMDB images so PNG export works). Each route checks the session itself too. |
| `src/modules/studio/templates/*` | One file per template: input fields, data fetching, slides. |
| `src/modules/studio/theme.ts` | Card colours, fonts, heatmap bands. Cards don't use the site's Tailwind theme. |
| `public/studio/grain.png` | Film grain tile (`node scripts/generate-grain.mjs` regenerates it). |

## Adding a template

Create `src/modules/studio/templates/<id>.tsx` exporting a `TemplateDef` and add it to `templates/index.ts`. The form is built from `fields`; `resolve` fetches through `src/modules/studio/api.ts`; each slide is a `CardFrame` at 1080×1350. Use the shared pieces in `components/Card.tsx` and `components/Poster.tsx`, and keep the "Data: TMDB" footer on any card that shows TMDB data.

## Tests

`yarn test` runs the unit tests (sessions, password hashing, redirect and image-path validation, TMDB parsing, heatmap logic, form validation, drafts).
