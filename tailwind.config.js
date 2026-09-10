/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020617",
          900: "#071428",
          850: "#0A1930",
          800: "#0F2342",
          750: "#112A4D",
          700: "#14325E",
          600: "#1E3A5F",
          500: "#1E4B7A",
        },
        cyan: {
          400: "#22D3EE",
          500: "#06B6D4",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'glow': '0 0 40px rgba(34, 211, 238, 0.15)',
        'glow-strong': '0 0 60px rgba(34, 211, 238, 0.25)',
        'card': '0 8px 32px rgba(2, 6, 23, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
