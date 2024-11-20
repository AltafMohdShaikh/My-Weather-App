/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Bungee': ['Bungee']
    },
    extend: {
      boxShadow: {
        'solid': '10px 10px 0 0 rgb(0 0 0)',
       'down': '0 10px 0 0 rgb(0 0 0)',

      }
    },
  },
  plugins: [],
}

