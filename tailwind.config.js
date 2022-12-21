/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: 'hsl(246 6% 9%)',
      },
      gridTemplateColumns: {
        6: '6rem',
        auto: 'auto',
      },
      gridTemplateRows: {
        max: 'max-content',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
