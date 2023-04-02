/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...fontFamily.sans]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

