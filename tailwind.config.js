/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        principal: '#E91717',
        segundario: '#F16602',
      },
      maxWidth: {
        1440: '1440px',
      },
    },
  },
  plugins: [],
};
