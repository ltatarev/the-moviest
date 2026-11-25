---
name: The Moviest
description: Public web companion of the Moviest iOS app — films and shows by mood, trending, episode ratings and where to watch.
colors:
  ink: "#0B0716"
  ink-deep: "#07040F"
  poster-shade: "#080410"
  chalk: "#F4F1FA"
  dim: "#A79FC0"
  dimmer: "#7A7192"
  accent: "#FF4D6D"
  accent-soft: "#FF8FA3"
  iris: "#7C5CFF"
  magenta: "#C13BB0"
  heat-awesome: "#F4536E"
  heat-great: "#B5449A"
  heat-good: "#6A4FC0"
  heat-meh: "#3A3580"
  heat-rough: "#221A33"
typography:
  display-xl:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "84px"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  display:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body-lead:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  meta:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.1em"
rounded:
  cell: "6px"
  card: "18px"
  hero: "28px"
  pill: "999px"
spacing:
  gutter-sm: "20px"
  gutter-md: "32px"
  gutter-lg: "40px"
  section: "72px"
  container: "1360px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.10)"
    textColor: "{colors.chalk}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  nav-link:
    textColor: "{colors.dim}"
    rounded: "{rounded.pill}"
    padding: "9px 18px"
  nav-link-active:
    backgroundColor: "rgba(255,255,255,0.13)"
    textColor: "{colors.chalk}"
    rounded: "{rounded.pill}"
    padding: "9px 18px"
  mood-pill:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "{colors.chalk}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  mood-pill-current:
    backgroundColor: "rgba(255,77,109,0.15)"
    textColor: "{colors.chalk}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  data-card:
    backgroundColor: "rgba(255,255,255,0.03)"
    textColor: "{colors.chalk}"
    rounded: "{rounded.card}"
    padding: "20px"
  heatmap-cell:
    backgroundColor: "{colors.heat-great}"
    textColor: "#FFFFFF"
    rounded: "{rounded.cell}"
    height: "36px"
    width: "44px"
---

# Design System: The Moviest

## Overview

**Creative North Star: "The Late Show"**

The site is a cinema after dark. The room is a deep ink-violet. Coloured screen light (iris, magenta and coral) drifts slowly at the edges behind a thin film grain. Content sits in front of that light on quiet glass: thin white borders, faint white fills, and soft blur. Posters and data carry the colour. The interface itself stays mostly ink and chalk.

The density is comfortable, not sparse. Pages answer a question first, in large Outfit headings and a readable lead paragraph, then show the data behind the answer in calm tables, lists and grids. Motion is slow and soft: things rise into view, light sweeps across a poster, the background drifts on a 26-second loop. Nothing bounces.

Coral is the rare signal. It marks the one main action, the current state, and the best values in the data. When coral appears everywhere, it stops meaning anything.

**Key Characteristics:**
- Dark only. The page is ink (`color-scheme: dark`), with no light theme.
- Ambient light: four blurred, drifting colour fields under a 3.5% film grain.
- Glass surfaces: white at 3–13% fill, white at 10–20% border, optional backdrop blur.
- Fully rounded controls (pills), 18px cards, 6px data cells.
- Outfit for display and numbers that matter, Plus Jakarta Sans for reading.
- One easing curve, "silk", for nearly all motion.

## Colors

An ink-violet night with chalk text, two violet lights, and one warm coral signal.

### Primary
- **Late Show Coral** (accent): the main action ("Track in Moviest"), the current mood pill, focus outlines, and the top band of ratings. Use it as a signal, never as a fill for large areas.
- **Soft Coral** (accent-soft): hover text on links, the focus ring, small icons such as the rating star. It is the readable coral for text on ink.

### Secondary
- **Iris Projector Light** (iris): the main ambient light field at the top left, and the base of the violet data bands.
- **Velvet Magenta** (magenta): the second ambient light field at the top right.

### Neutral
- **Ink** (ink): the page background everywhere.
- **Ink Deep** (ink-deep) and **Poster Shade** (poster-shade): the darkest layers. Poster Shade is the base of the gradients that make text readable over posters and mood art.
- **Chalk** (chalk): headings and body text. Use chalk at 80–90% opacity for long body copy.
- **Dim Lilac** (dim): secondary text, meta lines, inactive nav links.
- **Dimmer Lilac** (dimmer): tertiary text: rank numbers, table headers, separators. Only for small text that supports a stronger neighbour.

### Rating bands
The five heat colours (heat-awesome to heat-rough) map TMDB scores to colour: Awesome 8.5+, Great 7.8–8.4, Good 7.0–7.7, Meh 6.2–6.9, Rough below 6.2. They run from coral through magenta and violet into ink, so the best episodes glow and the weakest fade into the room. Episodes with too few votes get a near-ink fill with a faint border.

### Named Rules
**The Rare Signal Rule.** Coral marks the main action, the current state, and the best values. If a screen has more than one coral action, one of them is wrong.

**The Light Stays Behind Rule.** Iris and magenta live in the ambient background and in data bands. They are not used for buttons, text or borders.

## Typography

**Display Font:** Outfit (with system-ui, sans-serif)
**Body Font:** Plus Jakarta Sans (with system-ui, sans-serif)

**Character:** Outfit is round, geometric and confident, like a title card. Plus Jakarta Sans is warm and clear at small sizes. Both load through `next/font` with weights 400–700.

### Hierarchy
- **Display XL** (700, 44px → 84px, line-height 1.02, tracking -0.035em): the home hero only.
- **Display** (700, 34px → 48px–64px, line-height 1.03–1.05, tracking -0.035em): the page `h1` on detail and answer pages.
- **Headline** (600, 26px → 32px, tracking -0.025em): section headings (`h2`).
- **Title** (700, 18px–24px, tracking -0.02em): card titles, poster captions, FAQ questions, and key numbers such as ratings.
- **Body lead** (400, 17px, line-height 1.625): the answer paragraph under an `h1`. Keep it to about 680px wide.
- **Body** (400, 15px, line-height 1.625): list items and FAQ answers.
- **Meta** (400, 13px): breadcrumbs, meta lines, captions, secondary links.
- **Label** (600, 11px, tracking 0.1em, uppercase): table headers and season/episode axis labels.

### Named Rules
**The Tabular Numbers Rule.** Every rating, vote count and rank uses `tabular-nums`, so columns of numbers line up.

**The No Eyebrow Rule.** New sections do not get an uppercase label above the heading. The heading carries itself. Existing labels (the coral dot and uppercase text in `SectionHeader` and page headers) stay until that page gets a redesign.

## Layout

One centred column, at most 1360px wide, with side gutters of 20px, 32px from 640px, and 40px from 1024px. Sections are separated by about 72px, with 48px after a page header. A section heading sits about 28px above its content.

Grids follow Tailwind's breakpoints (640, 768, 1024, 1280). Poster grids go from two columns on phones to five or more on desktop. Paired lists (best and worst) sit side by side from 1024px. Wide data, such as a long show's heatmap or a table, scrolls sideways inside its card and never makes the page scroll sideways (`body` uses `overflow-x: clip`).

The navbar is sticky at the top. It tightens its padding and gains an ink glass bar once the page scrolls. On phones, the nav moves into a drawer from the right.

## Elevation & Depth

Depth comes from light and glass, not from stacked shadows. Surfaces are flat at rest: a faint white fill and a thin white border separate them from the ink. Shadows appear only as a response: a coral glow under the primary button, and a coral lift under a poster or mood card on hover.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 22px 50px -18px rgba(255,77,109,.5)`): under a poster or mood card on hover, together with a coral border at 45%.
- **Glow** (`box-shadow: 0 12px 34px -8px rgba(255,77,109,.6)`): under the primary coral button at rest.
- **Glow strong** (`box-shadow: 0 18px 42px -8px rgba(255,77,109,.72)`): under the primary coral button on hover.
- **Text shade** (`drop-shadow: 0 2px 10px rgba(0,0,0,.75)`): titles set over posters.

### Named Rules
**The Flat At Rest Rule.** Cards and lists have no shadow at rest. A shadow means "you are pointing at this".

## Shapes

Three corner sizes and the pill. Controls (buttons, nav links, mood pills, icon buttons) are fully round. Content cards, posters, tables and data frames use 18px corners. Hero art uses 28px. Data cells in the heatmap use 6px, so a grid of them reads as a mosaic, not as a set of buttons. Borders are always 1px white at 5–20% opacity, never solid colour, except the coral border at 45–50% on a hovered card or the current mood.

## Components

### Buttons
Soft, round and confident.
- **Shape:** full pill (999px).
- **Primary ("Track in Moviest"):** coral fill, white text, 14px × 28px padding, semibold 14px, with a leading plus icon and the Glow shadow. It always opens the App Store page.
- **Ghost:** white at 10% fill, white at 20% border, chalk text, backdrop blur. On hover the fill rises to 18%.
- **Hover:** the button rises 2px and the shadow or fill grows, in 200ms silk.
- **Focus:** a 2px Soft Coral outline with a 3px offset (global `:focus-visible`).

### Chips (mood pills)
- **Style:** pill, white at 5% fill, white at 10% border, chalk text at 90%, a small 8px dot in the mood's own colour before the title.
- **State:** the current mood gets coral at 15% fill and coral at 50% border. Hover rises 2px and brightens the fill.

### Cards / Containers
- **Corner Style:** 18px.
- **Background:** white at 3% over the ink, with a white border at 10%. Rows inside divide with white at 8% lines.
- **Shadow Strategy:** none at rest; Lift on hover for linked cards (see Elevation & Depth).
- **Internal Padding:** 12px–20px for data frames, 16px–20px for list rows.

### Poster card
A 2:3 poster in an 18px frame. A Poster Shade gradient rises from the bottom so the title stays readable. On hover the card rises 6px, the poster scales to 106% over 500ms, a white light sweep crosses it once, and the frame gains the coral border and Lift. Under the poster: the title (15px semibold, Soft Coral on hover), the rating with a coral star, and a meta line of year and genres.

### Navigation
A glass pill in the centre of the sticky bar. Links are 14px medium in Dim Lilac. The active link gets a white 13% fill and chalk semibold text. On hover, an inactive link gains a faint fill and a thin Soft Coral underline that grows from the centre. The logo wordmark stands alone at the left, with no mark beside it.

### Episode heatmap (signature)
A real `<table>`: one column per season, one row per episode, each cell a 36px × 44px tile in its rating band colour with the score in it. The best episode has a chalk outline and the worst a Dimmer Lilac outline. Above the grid, a sticky glass readout pill shows the best episode, or the episode under the pointer. The legend entries are buttons that filter the grid to one band (other cells fade to 14% and lose saturation). On first view the cells sweep in season by season, with the delay capped at 900ms.

## Do's and Don'ts

### Do:
- **Do** keep the page on Ink with the ambient light and grain from `AmbientBackground`.
- **Do** build surfaces from white at low opacity (3–13% fill, 10–20% border) on the ink.
- **Do** use the silk curve (`cubic-bezier(.2,.7,.3,1)`) for state changes: 200ms for colour and fill, 300ms for movement, 500–700ms for image zoom and light sweeps.
- **Do** keep content visible when motion is off. Everything respects `prefers-reduced-motion`.
- **Do** theme the browser parts: coral text selection at 35%, the Soft Coral focus ring, thin white scrollbars that turn Soft Coral on hover.
- **Do** show data as real tables and lists, with tabular numbers.

### Don't:
- **Don't** use coral for more than the main action, the current state and the best values (The Rare Signal Rule).
- **Don't** add a decorative mark beside the logo wordmark.
- **Don't** add new uppercase labels above section headings (The No Eyebrow Rule).
- **Don't** add a light theme or white surfaces.
- **Don't** use solid-colour borders or shadows at rest.
- **Don't** use bounce or elastic easing.
