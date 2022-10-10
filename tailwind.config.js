/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'IBM-Plex-Mono': ['IBM Plex Mono', 'monospace'],
        'IBM-Plex-Sans': ['IBM Plex Sans Devanagari', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Nunito: ['Nunito', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#E91717',
        secondary: '#000000',
        white: '#FFFFFF',
      },
      backgroundImage: {
        'bg-banner': "url('/src/assets/images/banner-img.png')",
      },
    },
  },
  plugins: [],
};
