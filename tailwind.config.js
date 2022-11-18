/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'lg': '700px',
      // => @media (min-width: 700px) { ... }
      'sm': '450px'
      // => @media (min-width: 450px) { ... }
    }
  },
  plugins: [],
}
