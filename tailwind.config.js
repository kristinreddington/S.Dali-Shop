/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ash-gray': '#becbc1',
        'rose-taupe': "#8A515A",
        'accent-one': '#4f738a',
        'dim-gray': '#636968',
        'pearl': '#EEEEEE',
        'beaver': '#AE8C77',
        'ecru': '#C6AE83'
      }
    },
  },
  plugins: [],
}

