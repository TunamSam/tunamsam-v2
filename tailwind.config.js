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
        'floating': 'floating 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        'slider-progress': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'floating': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}
