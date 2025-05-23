/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/blocks/**/*.scss",
    "./src/styles/global/*.scss",
    "./src/styles/plugins/plugins-rewrite.scss",
    "./src/styles/*.scss",
    "./src/blocks/**/*.js",
    "./src/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      'sans': ['\'Space Grotesk\'', 'sans-serif'],
      'inter': ['\'Inter\'', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#0B152A',
        secondary: '#E9EFF3',
        dark: '#0D1A35',
        dark2: '#192237',
        dark3: '#172647',
        dark4: '#182133',
        dark5: '#1D293B',
        light: '#E9EFF3',
        light2: '#FAFDFF',
        light3: '#F0F5F9',
        gray: '#707682',
        blue: '#3177f3',
        blue2: '#329dd5',
      }
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
      'smMax': {'max': '575.98px'},
      // => @media (max-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'mdMax': {'max': '767.98px'},
      // => @media (max-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }
      'lgMax': {'max': '991.98px'},
      // => @media (max-width: 992px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xlMax': {'max': '1023.98px'},
      // => @media (max-width: 1024px) { ... }

      '2xl': '1170px',
      // => @media (min-width: 1280px) { ... }
      '2xlMax': {'max': '1169.98px'},
      // => @media (max-width: 1280px) { ... }

      '3xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '3xlMax': {'max': '1279.98px'},
      // => @media (max-width: 1280px) { ... }

      '4xl': '1440px',
      '4xlMax': {'max': '1439.98px'},
      
      '5xl': '1600px',
      '5xlMax': {'max': '1599.98px'},
    }
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('tailwind-bootstrap-grid')({
      containerMaxWidths: { sm: '100%', md: '100%', lg: '100%', xl: '1376px', '2xl': '1376px', '3xl': '1376px', '4xl': '1376px', '5xl': '1376px' },
      gridGutterWidth: '24px',
      gridColumns: 12
    }),
  ],
  safelist: [
    'flex',
  ]
  /*safelist: [
    {
      pattern: /.*!/
    }
  ]*/
}
