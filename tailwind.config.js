/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "input-color" : "#495057",
        "green-hover" : "#8bc34a",
        "slider-bg" : "#f8f9fa",
        "slider-jun" : "#b4b4b4",
        "see-all-trends" : "#8bc34a"
      },
      fontFamily: {
        'mono': ['"B612 Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}