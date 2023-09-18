/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'Rubik'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
