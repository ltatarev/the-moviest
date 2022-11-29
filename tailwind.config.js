const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dmSans)', ...fontFamily.sans],
      },
      backgroundImage: {
        'homeBackground': "url('/assets/background.jpg')"
      }
    },
  },
  plugins: [],
}