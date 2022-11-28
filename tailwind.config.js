/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-black':'#171717',
        'light-brown':'#c78e62',
      'main-gray': '#374151',
      'main-brown': '#b45309',
      }
    },
  },
  plugins: [],
}
