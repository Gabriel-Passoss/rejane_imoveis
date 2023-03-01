/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          700: '#084c7d'
        }
      },
      backgroundImage: {
        'background-header': 'url(/fundo-topo.jpg)'
      }
    },
  },
  plugins: [],
}
