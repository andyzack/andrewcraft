module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      ptserif: ['"PT Serif"', 'sans-serif'],
      'body': ['"PT Serif"', 'sans-serif'],
      'display': ['"PT Serif"', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        default: '0',
        sm: '1rem',
        lg: '2rem',
        xl: '4rem',
        '2xl': '5rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#b4b4b4', /**/
        600: '#9B9B9B', /**/
        700: '#4a5568',
        800: '#272525', /**/
        900: '#222020', /**/
      },
      yellow: {
        100: '#fffff0',
        200: '#fefcbf',
        300: '#fac825', /**/
        400: '#f6e05e',
        500: '#ecc94b',
        600: '#d69e2e',
        700: '#b7791f',
        800: '#975a16',
        900: '#8B572A', /**/
      },
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.2em',
      widest: '0.5em',
    },
  },
  variants: {},
  plugins: []
}
