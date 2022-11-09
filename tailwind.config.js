/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    colors: {
      orange: 'hsl(25, 97%, 53%)',
      white: 'hsl(0, 0%, 100%)',
      'light-gray': 'hsl(217, 12%, 63%)',
      'medium-gray': 'hsl(216, 12%, 54%)',
      'dark-blue': 'hsl(213, 19%, 18%)',
      'very-dark-blue': 'hsl(216, 12%, 8%)',
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    extend: {},
  },
  plugins: [],
};
