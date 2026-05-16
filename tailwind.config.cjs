/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 22px 70px rgba(27,20,100,0.24)',
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
      },
      colors: {
        brand: {
          50: '#f3f2fb',
          100: '#e6e4f7',
          200: '#c7c2eb',
          300: '#a79fdf',
          400: '#6a61b8',
          500: '#1b1464',
          600: '#171156',
          700: '#130e48',
          800: '#0f0b3b',
          900: '#0b082e',
        },
        tata: {
          blue: '#1b1464',
          navy: '#1b1464',
          ink: '#130e48',
          mist: '#f3f2fb',
        },
      },
    },
  },
  plugins: [],
};
