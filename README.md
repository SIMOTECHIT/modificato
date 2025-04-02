/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6200ea",
        secondary: "#3700b3",
        darkBg: "#121212",
        darkText: "#ffffff",
        lightBg: "#ffffff",
        lightText: "#000000",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  darkMode: "class", // Permette di gestire il tema scuro con 'class'
  plugins: [],
}
