/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
      colors: {
        base: '#050505',
        surface: '#0d0d0d',
        card: '#141414',
        gold: {
          DEFAULT: '#d4af37',
          light: '#fcf6ba',
          dark: '#aa8222',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        unbounded: ['Unbounded', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.32em',
      },
      backgroundImage: {
        'gold-metallic':
          'linear-gradient(135deg, #bf953f 0%, #fcf6ba 25%, #b38728 50%, #fbf5b7 75%, #aa771c 100%)',
        'gold-subtle':
          'linear-gradient(217deg, #8d5d3b 0%, #d4af37 100%)',
        'hero-glow':
          'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
      },
      boxShadow: {
        'gold-glow': '0 0 60px 0 rgba(212, 175, 55, 0.25)',
        'gold-cta': '0 0 15px rgba(212, 175, 55, 0.2)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 2rem))' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
