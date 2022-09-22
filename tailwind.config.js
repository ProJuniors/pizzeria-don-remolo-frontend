/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        principal: '#E91717',
      },
      maxWidth: {
        1440: '1440px',
      },
    },
  },
  plugins: [],
};
