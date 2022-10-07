/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'IBM-Plex-Mono': ['IBM Plex Mono', 'monospace'],
      'IBM-Plex-Sans': ['IBM Plex Sans Devanagari', 'sans-serif'],
      Inter: ['Inter', 'sans-serif'],
      Nunito: ['Nunito', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
      Roboto: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
