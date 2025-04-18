/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#00253A',
          light: '#0A2E45'
        }
      }
    },
  },
  plugins: [],
}