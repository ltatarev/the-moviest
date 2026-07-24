// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0716",
        "ink-deep": "#07040F",
        chalk: "#F4F1FA",
        dim: "#A79FC0",
        dimmer: "#7A7192",
        accent: {
          DEFAULT: "#FF4D6D",
          soft: "#FF8FA3",
        },
        iris: "#7C5CFF",
        magenta: "#C13BB0",
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', ...fontFamily.sans],
        display: ['var(--font-outfit)', ...fontFamily.sans],
      },
      borderRadius: {
        card: "18px",
        hero: "28px",
      },
      dropShadow: {
        'text': '0 2px 10px rgba(0,0,0,0.75)',
      },
      boxShadow: {
        lift: "0 22px 50px -18px rgba(255,77,109,.5)",
        glow: "0 12px 34px -8px rgba(255,77,109,.6)",
        "glow-strong": "0 18px 42px -8px rgba(255,77,109,.72)",
      },
      transitionTimingFunction: {
        'silk': 'cubic-bezier(.2,.7,.3,1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(4%, -3%, 0) scale(1.08)' },
          '66%': { transform: 'translate3d(-3%, 4%, 0) scale(.95)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .7s cubic-bezier(.2,.7,.3,1) both',
        'fade-in': 'fade-in .45s cubic-bezier(.2,.7,.3,1) both',
        drift: 'drift 26s cubic-bezier(.4,0,.6,1) infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
