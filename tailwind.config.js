/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Adding the JAARC brand colors from your design
        brand: {
          green: '#4ade80',    // Bright green from page 2
          dark: '#064e3b',     // Dark forest green
          light: '#f0fdf4',    // Very light background green
        }
      },
      borderRadius: {
        '4xl': '2rem',         // For those smooth service cards
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) translateX(45%)' },
          '50%': { transform: 'translateY(-20px) translateX(45%)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
