/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Neutral near-black for text (Gato Dumas uses black/near-black type)
        ink: {
          950: '#0A0A0A',
          900: '#1A1A1A',
          800: '#212529',
          700: '#3A3F44',
          600: '#565B60',
          500: '#777777',
          400: '#9CA1A5',
          300: '#C9CCCE',
          200: '#E4E6E7',
          100: '#F0F0F0',
          50:  '#F9F9F9',
        },
        // Institutional teal/verdigris scale (from pilar.gatodumas.com.ar)
        brand: {
          50:  '#E6F2F1',
          100: '#C7E4E0',
          200: '#9BD0C9',
          300: '#75C2B8', // mint — buttons/accents
          400: '#45A898', // medium teal — hover
          500: '#0E8A88',
          600: '#00707C', // signature teal
          700: '#005A63',
        },
        // Aliases so legacy utility names resolve to the teal system
        gold: {
          light: '#75C2B8',
          DEFAULT: '#00707C',
          deep: '#005A63',
        },
      },
      fontFamily: {
        // Raleway everywhere, matching the institutional site
        sans: ['Raleway', 'Verdana', 'Arial', 'sans-serif'],
        serif: ['Raleway', 'Verdana', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px 0 rgba(0, 112, 124, 0.08)',
        card: '0 12px 40px -12px rgba(0, 112, 124, 0.20)',
        gold: '0 8px 26px -8px rgba(0, 112, 124, 0.40)',
        float: '0 30px 60px -20px rgba(0, 90, 99, 0.35)',
      },
      backgroundImage: {
        'gold-grad': 'linear-gradient(135deg, #75C2B8 0%, #45A898 55%, #00707C 100%)',
        'ink-grad': 'linear-gradient(160deg, #00707C 0%, #005A63 70%, #00464D 100%)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        meshdrift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, -3%) scale(1.08)' },
          '66%': { transform: 'translate(-3%, 4%) scale(0.96)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        meshdrift: 'meshdrift 18s ease-in-out infinite',
        'meshdrift-slow': 'meshdrift 26s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
