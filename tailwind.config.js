/** @typedef { import('tailwindcss/defaultConfig') } DefaultConfig */
/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */
/** @typedef { DefaultConfig & { theme: { extend: DefaultTheme } } } TailwindConfig */

/** @type {TailwindConfig} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {},
    extend: {
      fontFamily: {
        montse: ['montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#8E9882',
        white: '#ffffff',
        navSelected: '#C69F66',
        lightText: '#615F5B',
        borderProduct: '#E7E3D9',
        bgProduct: '#E7E3D9',
        arabic: '#CD4C15',
        bgLayout: '#FBFAF8',
        bgTitles: '#32332E',
        footerBrand: '#8A8370',
        tagsArabica: '#CD4C15',
        tagsRobusta: '#758266',
      },
      borderRadius: {
        input: '0.625rem',
      },
      textColor: {
        black: 'black',
        primary: 'black',
        secondary: 'black',
        grey: '#44403C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
