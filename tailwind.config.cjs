/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: "slide 2.5s linear ",
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateY(-50%)", opacity: 0.1 },

          "100%": { transform: "translateY(5%)", opacity: 1 },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
  
}
