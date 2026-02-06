/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'linx-red': '#C41E3A',
        'linx-white': '#ffffff',
        'linx-yellow': '#f5cf55',
        'linx-green': '#00BFB2',
        'linx-black': '#14110F'
      },
    },
  },
  plugins: [],
}
