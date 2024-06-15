/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1a1a1a",
        gray: "#282828",
        secondary:'#eff2f699',
        orange:'#fea116'
      },
    },
  },
  plugins: [],
};
