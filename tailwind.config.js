/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'tokyo':"url('/images/bg.png')"
      }
    },
  },
  plugins: [],
}