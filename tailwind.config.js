// Create new plugin to add individual color to individual border
let flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        gray200: '#F9F9F9',
        gray300: '#C4C4C4',
        gray400: '#9B9B9B',
        gray500: '#777676',
        gray600: '#535252',
        gray700: '#2F2E2E',
        yellow200: '#FFD271',
        yellow300: '#FEB20E',
        yellow400: '#DF9800',
        red200: '#FF634B',
        red300: '#F43518',
        red400: '#B71800',
        green200: '#E6FEED',
        green300: '#069154',
        green400: '#01703F',
        blue200: '#6979BE',
        blue300: '#1F307C',
        blue400: '#0B1A5C',
        cream200: '#FFF2EB',
        cream300: '#FFEADF',
        cream400: '#F5D5C4',
        pink200: '#FEE9E6',
        pink300: '#E28281',
        pink400: '#C86564'
      },
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        varela: ["Varela-Round", "sans-serif"],
        helvatica: ["Helvatica", "sans-serif"],
      },
      keyframes: {
        toastSlideUp: {
          '0%': { transform: 'translateY(200%)' },
        },
        toastSlideDown: {
          '0%': { transform: 'translateY(-200%)' },
        },
        toastSlideLeft: {
          '0%': { transform: 'translateX(200%)' },
        },
        toastSlideRight: {
          '0%': { transform: 'translateX(-200%)' },
        }
      },
      animation: {
        toastSlideUp: 'toastSlideUp 1s',
        toastSlideDown: 'toastSlideDown 1s',
        toastSlideLeft: 'toastSlideLeft 1s',
        toastSlideRight: 'toastSlideRight 1s',
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'),
    ({ addUtilities, e, theme, variants }) => {
      let colors = flattenColorPalette(theme('borderColor'))
      delete colors['default']

      // Replace or Add custom colors
      if (this.theme?.extend?.colors !== undefined) {
        colors = Object.assign(colors, this.theme.extend.colors)
      }

      const colorMap = Object.keys(colors)
        .map(color => ({
          [`.border-t-${color}`]: { borderTopColor: colors[color] },
          [`.border-r-${color}`]: { borderRightColor: colors[color] },
          [`.border-b-${color}`]: { borderBottomColor: colors[color] },
          [`.border-l-${color}`]: { borderLeftColor: colors[color] }
        }))
      const utilities = Object.assign({}, ...colorMap)

      addUtilities(utilities, variants('borderColor'))
    }
  ]
}
