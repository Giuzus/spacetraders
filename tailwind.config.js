/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'secondary': '#ccc9d9',
        'accent': '#592d5c',
        'btn-primary': '#6a366d',
        'btn-secondary': '#e6cfe7',

        'primary-dark': '#faf6fd',
        'secondary-dark': '#221e38',
        'accent-dark': '#e2b436',
        'btn-primary-dark': '#e2b436',
        'btn-secondary-dark': '#f2f5fd',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
