/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgba(139, 92, 246, 0.5)',
          DEFAULT: '#8B5CF6',
          dark: '#7C3AED',
          hover: 'rgba(139, 92, 246, 0.7)',
        },
        background: {
          light: '#D4D4D4',
          dark: '#1C1C1C',
        },
        surface: {
          light: 'rgba(240, 240, 240, 0.85)',
          dark: 'rgba(42, 42, 42, 0.85)',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      }
    },
  },
  plugins: [],
}