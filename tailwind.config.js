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
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        barlowbold: ['vessel-barlow-bold', 'sans-serif'],
        roboto: ['vessel-roboto', 'sans-serif'],
        robotobold: ['vessel-roboto-bold', 'sans-serif'],
        'ppneuebit-regular': ['PPNeueBit-Regular', 'sans-serif'],
        'ppneueMontreal-bold': ['PPNeueMontreal-Bold', 'sans-serif'],
      },
      colors: {
        'linx-red': '#c80419',
        'linx-white': '#ffffff',
        'linx-yellow': '#f5cf55',
        'linx-green': '#00BFB2',
        'linx-black': '##14110F'
      },
      lineHeight: {
        '11': '0.9',
        '12': '2'
      },
      fontSize: {
        small: '0.85rem'
      },
    },
  },
  plugins: [
    function ({addUtilities}) {
        const extendUnderline = {
            '.underline': {
                'textDecoration': 'underline',
                'text-decoration-color': '#FFbF40',
                'text-decoration-skip': 'ink 0.5rem',
            },
        }
        addUtilities(extendUnderline)
    }
]
}