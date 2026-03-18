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
      }
    },
  },
  plugins: [],
}
