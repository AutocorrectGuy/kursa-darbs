/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          400: '#C6C5C4',
          500: '#989795',
          600: '#3C3936',
          700: '#312E2B',
          800: '#272522',
          900: '#1B1A19'
        },
        'chess-green': {
          100: '#EEEED2',
          700: '#95BB4A',
          800: '#7FA650',
          900: '#537133',
        }
      }
    },
    
  },
  plugins: [],
}
