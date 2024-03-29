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
       "accent-pink": "#E63E65",
       "accent-purple": "#8293FF",
       "greyish": "#343A40"
      },
      fontFamily: {
        sans: ['var(--font-dmSans)', ...fontFamily.sans],
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
      backgroundImage: {
        'homeBackground': "url('/assets/background.jpg')"
      },
      dropShadow: {
        'text': '0 2px 10px rgba(0,0,0,0.75)', 
      },
      boxShadow: {
        card: "0px 0px 20px white"
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.65, 0, 0.076, 1)' 
      },
      width: { 
        40: "40%"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
