/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          700: '#084c7d',
          500: '#1e82c9'
        }
      },
      backgroundImage: {
        'background-header': 'url(/fundo-topo.jpg)',
        'background-body': 'url(/fundo-corpo.jpeg)'
      }
    },
  },
  plugins: [],
}
