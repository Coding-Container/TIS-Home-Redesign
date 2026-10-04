/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 900: '#0B1B3F', 800: '#12285A', 700: '#1B3A7A' },
        saffron: { 400: '#F7B733', 500: '#F2A71B' },
        mist: '#F3F6FC',
        ink: '#10172A',
        night: { DEFAULT: '#0B1B3F', card: '#12285A' },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      keyframes: { marquee: { to: { transform: 'translateX(-50%)' } } },
      animation: { marquee: 'marquee 28s linear infinite' },
    },
  },
  plugins: [],
}
