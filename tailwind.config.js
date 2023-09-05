/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background' : '#111111',
        'primary' : '#176B87',
        'secondary' : '#64CCC5',
        'details' : '#DAFFFB',
      },
    },
  },
  plugins: [],
}