/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6600", // Orange
        dark: "#000000"     // Black
      },
    },
  },
  plugins: [],
};
