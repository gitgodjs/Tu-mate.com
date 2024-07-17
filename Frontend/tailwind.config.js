/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': 'rgb(234, 179, 8)',
        'custom-white': 'rgba(239, 230, 248, 0.926)',
      },
    },
  },
  plugins: [],
}

