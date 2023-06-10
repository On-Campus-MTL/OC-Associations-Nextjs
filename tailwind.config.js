/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        'lobster': 'var(--font-lobster)',
        'dmSans': 'var(--font-dmSans)',
        'inter': 'var(--font-inter)',
      },
      colors: {
        primary: '#F8BE00',
        secondary: '#FF7C02',
        white: '#FFFFFF'
      },
    },
  },
  plugins: [],
}

