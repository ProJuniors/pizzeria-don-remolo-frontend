/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('/src/assets/backround/Union.png')",
      },
      colors: {
        principal: '#E91717',
        segundario: '#F16602',
      },
      maxWidth: {
        1440: '1440px',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        'IBM-PLEX-MONO': ['IBM Plex Mono', 'monospace'],
        'IBM-PLEX-SANS-DEVANAGARI': ['IBM Plex Sans Devanagari', 'sans-serif']
      },
    },
  },
  plugins: [],
};
