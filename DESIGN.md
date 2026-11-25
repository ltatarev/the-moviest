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

<!-- impeccable:design-map -->
Name: The Moviest
Colors: primary: accent #FF4D6D; secondary: iris #7C5CFF; neutral: ink #0B0716; data: heat-awesome #F4536E; primary: accent-soft #FF8FA3; secondary: magenta #C13BB0; neutral: ink-deep #07040F (+8 more in the sidecar)
Fonts: Outfit (display-xl, display, headline, title); Plus Jakarta Sans (body-lead, body, meta, label)
Spacing: gutter-sm 20px, gutter-md 32px, gutter-lg 40px, section 72px, container 1360px
Radius: cell 6px, card 18px, hero 28px, pill 999px
North Star: "The Late Show"
Rules:
- The Rare Signal Rule. Coral marks the main action, the current state, and the best values.
- The Light Stays Behind Rule. Iris and magenta live in the ambient background and in data bands.
- The Tabular Numbers Rule. Every rating, vote count and rank uses `tabular-nums`, so columns of numbers line up.
- The No Eyebrow Rule. New sections do not get an uppercase label above the heading.
- The Flat At Rest Rule. Cards and lists have no shadow at rest.
Elevation:
- Lift: 0 22px 50px -18px rgba(255,77,109,.5)
- Glow: 0 12px 34px -8px rgba(255,77,109,.6)
- Glow strong: 0 18px 42px -8px rgba(255,77,109,.72)
- Text shade: drop-shadow: 0 2px 10px rgba(0,0,0,.75)
Don't:
- Don't use coral for more than the main action, the current state and the best values (The Rare Signal Rule).
- Don't add a decorative mark beside the logo wordmark.
- Don't add new uppercase labels above section headings (The No Eyebrow Rule).
- Don't add a light theme or white surfaces.
- Don't use solid-colour borders or shadows at rest.
- Don't use bounce or elastic easing.
Do:
- Do keep the page on Ink with the ambient light and grain from `AmbientBackground`.
- Do build surfaces from white at low opacity (3–13% fill, 10–20% border) on the ink.
- Do use the silk curve (`cubic-bezier(.2,.7,.3,1)`) for state changes: 200ms for colour and fill, 300ms for movement, 500–700ms for image zoom and light sweeps.
- Do keep content visible when motion is off.
- Do theme the browser parts: coral text selection at 35%, the Soft Coral focus ring, thin white scrollbars that turn Soft Coral on hover.
- Do show data as real tables and lists, with tabular numbers.
Full: .impeccable/design-full.md (read a section when you need its detail)
