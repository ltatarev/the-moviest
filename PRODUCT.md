# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary visitors arrive from a search engine with one question. Examples: "best episode of Community", "where to stream this film", "a cozy show for tonight". They want a clear answer fast and usually do not know Moviest yet.

The secondary visitors already use the Moviest iOS app and use the site to browse on a larger screen.

## Product Purpose

The Moviest website is the public companion of the Moviest iOS app ("Moviest: Film & TV Tracker"). Visitors browse films and TV shows by mood, see what is trending, read episode ratings, and find where to watch.

Success has two parts, in this order:

1. The visitor gets a clear answer to the question that brought them.
2. Some visitors install the Moviest app from the App Store.

## Positioning

The site uses the same moods as the Moviest app, so a visitor can start from how the evening feels instead of from a genre list. Answer pages (for example episode ratings) state the answer in the first lines and show all of the data behind it.

## Operating Context

- Most visits start on a search result and land deep in the site, not on the home page.
- Visitors use phones and desktops. Mobile web is a first-class case.
- Pages render on the server for search engines. Answer pages carry structured data (JSON-LD) and FAQ content.

## Capabilities and Constraints

- Public routes: home, Discover, Moods (`/moods`, `/moods/[slug]`), film pages (`/movie/[id]`), show pages (`/tv/[id]`), episode ratings (`/tv/[id]/episodes`).
- Data comes from TMDB. Where-to-watch data comes through TMDB.
- No accounts, no sign-in, no personal data on the public site. Personal app features (watchlists, Up next, recommendations) appear only as App Store prompts.
- "Track in Moviest" links go to the App Store, not to a bare `moviest://` link.
- The private `/studio` tool is out of scope for this file.

## Brand Commitments

- The App Store listing is the source of truth for app facts. Do not claim a feature the listing does not name.
  - App Store name: "Moviest: Film & TV Tracker". Subtitle: "One watchlist for films and TV".
  - iPhone and iPad only. No Android app.
  - Import from IMDb and Trakt only. There is no Letterboxd import and no iCloud sync of the library.
  - No ads, no tracking, no algorithmic feed.
- The `logo.png` wordmark stands alone in the navbar. Do not add a decorative mark beside it.
- The footer calls the site "a hobby project" and credits The Movie Database.

## Evidence on Hand

- Live TMDB data: titles, posters, ratings, vote counts, seasons, episodes, cast, crew, watch providers.
- The Moviest moods, shared with the app.
- There are no testimonials, user counts, reviews or press. Do not invent them.

## Product Principles

1. Answer first. The first lines of a page answer the question that brought the visitor.
2. Show the data behind the answer, so the visitor can check it and explore.
3. Stay truthful to the app. Every app claim matches the App Store listing.
4. Public and private by design. Nothing on the site needs or collects personal data.
5. The app is the next step, not a gate. App prompts never block the answer.

## Accessibility & Inclusion

Data views (for example the episode heatmap) stay readable as real tables for screen readers and search engines. Motion respects `prefers-reduced-motion`.
