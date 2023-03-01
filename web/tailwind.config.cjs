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
        'background-header': 'url(/src/assets/fundo-topo.jpg)'
      }
    },
  },
  plugins: [],
}
