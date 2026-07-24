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
        // Legacy palette — still used by pages that have not been redesigned.
        "accent-pink": "#E63E65",
        "accent-purple": "#8293FF",
        "greyish": "#343A40",

        // Redesign palette.
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
        // Kept so untouched pages keep compiling; now resolves to the display face.
        poppins: ['var(--font-outfit)', ...fontFamily.sans],
      },
      backgroundImage: {
        'homeBackground': "url('/assets/background.jpg')"
      },
      borderRadius: {
        card: "18px",
        hero: "28px",
      },
      dropShadow: {
        'text': '0 2px 10px rgba(0,0,0,0.75)',
      },
      boxShadow: {
        card: "0px 0px 20px white",
        lift: "0 22px 50px -18px rgba(255,77,109,.5)",
        glow: "0 12px 34px -8px rgba(255,77,109,.6)",
        "glow-strong": "0 18px 42px -8px rgba(255,77,109,.72)",
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.65, 0, 0.076, 1)',
        'silk': 'cubic-bezier(.2,.7,.3,1)',
      },
      width: {
        40: "40%"
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
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(255,77,109,.45)' },
          '70%': { boxShadow: '0 0 0 8px rgba(255,77,109,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255,77,109,0)' },
        },
        progress: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        shine: {
          from: { transform: 'translateX(-130%) skewX(-12deg)' },
          to: { transform: 'translateX(130%) skewX(-12deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .7s cubic-bezier(.2,.7,.3,1) both',
        'fade-in': 'fade-in .8s cubic-bezier(.2,.7,.3,1) both',
        drift: 'drift 26s cubic-bezier(.4,0,.6,1) infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(.4,0,.6,1) infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
