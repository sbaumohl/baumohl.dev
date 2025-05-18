/* eslint-disable import/no-extraneous-dependencies, global-require */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}",
    "./node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Source Serif 4 Variable'", ...defaultTheme.fontFamily.serif],
        sans: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        bright: {
          50: "#f2f2f2",
          100: "#e6e6e6",
          200: "#cccccc",
          300: "#b3b3b3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4d4d4d",
          800: "#333333",
          900: "#1a1a1a",
          950: "#0d0d0d",
          DEFAULT: "#eaeaea",
        },
        darker: {
          50: "#f3f1f1",
          100: "#e7e4e4",
          200: "#cfc9c9",
          300: "#b7aeae",
          400: "#9f9393",
          500: "#877878",
          600: "#6c6060",
          700: "#514848",
          800: "#363030",
          900: "#1b1818",
          950: "#0e0c0c",
          DEFAULT: "#131111",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["lofi"],
  },
};
