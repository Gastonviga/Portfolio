/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: '#2563EB',
        'accent-dark': '#1d4ed8',
        'slate-accent': '#64748b',
        'slate-accent-dark': '#475569',
        'steel': '#334155',
        'steel-light': '#94a3b8',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'shine': 'shine 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    }
  },
  plugins: [],
}
