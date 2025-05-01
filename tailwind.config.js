/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          red: '#ff0000',
          blue: '#0077ff',
          green: '#00ff77',
          purple: '#cc00ff',
          pink: '#ff00aa',
          orange: '#ff7700',
          teal: '#00ffcc',
          yellow: '#ffcc00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
        script: ['cursive'],
      },
      boxShadow: {
        neon: '0 0 5px var(--tw-shadow-color), 0 0 20px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [],
};