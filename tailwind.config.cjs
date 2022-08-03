/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    zIndex: {
      'full': '1000',
      'md': '50',
      'sm': '20'
    },
    container: { center: true, },
    fontFamily:{ 'robo' : ['Roboto']},
    extend:{
    },
    },
  }