/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"], // qualquer arquivo dentro da pasta raiz sendo .html ou .js vai poder usar o css tailwind
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        "home": "url('/images/bg.png')"
      }
    },
  },
  plugins: [],
}

