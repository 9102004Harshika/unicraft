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
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateY(-50%)", opacity: 0.1 },

          "100%": { transform: "translateY(5%)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
  
}
