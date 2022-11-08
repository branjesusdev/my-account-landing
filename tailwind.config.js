const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // important : true,
  purge : {
    enabled : true,
    content: [ './src/**/*.{html,ts}'],
  },
  darkMode : 'class',
  theme: {
    extend: {
    },
  },
  plugins: [],
}
