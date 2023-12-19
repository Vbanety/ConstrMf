/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx",
    "./src/Components/*/.jsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'kitchen': "url('/src/assets/img/kitchen.png')",
      },
      fontFamily: {
        'sans-condensed': ['"IBM Plex Sans Condensed"', 'sans'],
        'sans': ['"IBM Plex Sans"', 'sans'],
        'serif': ['"IBM Plex Serif"', 'serif'],
        'work': ['"Work Sans"', 'sans'],
      },
      colors: {
        primary: "#ff4b35",
        secundary: '#35aaff',
        neutral900: '#14171F',
        bluelighten: 'rgba(38, 74, 131, .9)',
        bluedark: '#264a83',
        blacklighten: 'rgba(0,0,0,.2)'
      },
    },
  },
  plugins: [],
}

