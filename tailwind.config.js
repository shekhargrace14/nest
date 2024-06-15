/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color" : "#3bb77e",
        "primary-color-dark" : "#2f9868",
        "accent" : "#fdcd66"
        
      },
      fontFamily:{
        'primary-font' : ["Quicksand", "sans-serif"]
      }
    },
  },
  plugins: [],
}

