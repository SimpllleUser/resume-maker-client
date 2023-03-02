/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'primary': '#104c91',
        'primary-dark': '#0b3565',
        'primary-light': '#3f6fa7',
        'secondary': '#efc9af',
        'secondary-dark': '#a78c7a',
        'secondary-light': '#f2d3bf',
        'accent': '#1f8ac0',
        'accent-dark': '#156086',
        'accent-light': '#4ba1cc',
        'light': '#fcfcfc',
      },
    },
  },
  plugins: [
    
  ],
}
