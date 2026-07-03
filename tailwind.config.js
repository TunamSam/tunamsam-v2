/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#026937',
          light: '#00bf63',
          dark: '#004d28',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Roboto Slab', 'serif'],
      },
      maxWidth: {
        '8xl': '1440px',
      },
      animation: {
        'slider-progress': 'slider-progress 5s linear forwards',
      },
      keyframes: {
        'slider-progress': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
