/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'dark-gray': '#23272a',
        'light-gold': '#facd15',
        'light-gray': '#d1d5db',
      }
    },
  },
  plugins: [],
}