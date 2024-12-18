/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1F3B1C',
        sage: '#A3B099',
        moss: '#80806B',
        ivory: '#F0EDE0',
        cedar: '#663826',
      },
      height: {
        100: '100px',
      },
      fontFamily: {
        spaceGrotesk: ['Space Grotesk'],
        inter: ['Inter'],
        roboto: ['Roboto'],
      },
      screens: {
        about: '950px',
        services: '830px',
        footer: '1036px',
      },
    },
  },

  plugins: [],
};
