/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
