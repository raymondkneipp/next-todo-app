/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        'heading': ['var(--font-lexend)', ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
      padding: '2rem'
    }
  },
  plugins: [],
};
