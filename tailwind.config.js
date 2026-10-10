/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: "#FBF3F4",
        dustyRose: "#C98F9B",
        deepBurgundy: "#5E2938",
        champagneGold: "#C5A059"
      }
    },
  },
  plugins: [],
}
