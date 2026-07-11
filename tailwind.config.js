/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f1f4f0",
          100: "#e3e7e2",
          200: "#c9cec8",
          300: "#aab1a9",
          400: "#7f887e",
          500: "#60685f",
          600: "#454b44",
          700: "#292d29",
          800: "#1c1f1c",
          900: "#121412",
          950: "#0b0d0b",
        },
        signal: {
          DEFAULT: "#c8f65d",
          light: "#dcff8c",
        },
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
