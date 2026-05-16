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
        glow: '0 22px 70px rgba(48,127,226,0.18)',
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
      },
      colors: {
        brand: {
          50: '#f5f9ff',
          100: '#e6f1ff',
          200: '#c8dfff',
          300: '#96c3f7',
          400: '#5d9bed',
          500: '#307fe2',
          600: '#2468c5',
          700: '#1b55a3',
          800: '#0a0a5f',
          900: '#1a0b54',
        },
        tata: {
          blue: '#307fe2',
          navy: '#0a0a5f',
          ink: '#1a0b54',
          mist: '#f5f9ff',
        },
      },
    },
  },
  plugins: [],
};
