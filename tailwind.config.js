/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'FigTree': ['FigTree', 'sans-serif']
    },
    extend: {
      colors: {
        grey: '#808080',
        yellow: '	#f4d04e'
      }
    },
  },
  plugins: [],
}

