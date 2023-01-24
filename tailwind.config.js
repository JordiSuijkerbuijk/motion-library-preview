/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "hsl(246 6% 9%)",
        yellow: "#cca43b",
      },
      fontFamily: {
        "proximanova-thin": ["proximanova-thin"],
        "proximanova-light": ["proximanova-light"],
        "proximanova-regular": ["proximanova-regular"],
        "proximanova-bold": ["proximanova-bold"],
      },
      fontSize: {
        "heading-1": ["var(--heading-1)", "var(--heading-1-line-height)"],
        "heading-2": ["var(--heading-2)", "var(--heading-2-line-height)"],
        "heading-3": ["var(--heading-3)", "var(--heading-3-line-height)"],
        "heading-4": ["var(--heading-4)", "var(--heading-4-line-height)"],
        body: ["var(--body-text)", "var(--body-text-line-height)"],
        "small-body": [
          "var(--small-body-text)",
          "var(--small-body-text-line-height)",
        ],
      },
      gridTemplateColumns: {
        6: "6rem",
        auto: "auto",
      },
      gridTemplateRows: {
        max: "max-content",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
