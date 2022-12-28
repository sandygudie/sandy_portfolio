/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content:["./pages/**/*.{js,jsx}", , "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(0deg 84% 60%)",
        secondary: "hsl(220deg 26% 14%)",
        tourquise: "hsl(171deg 47% 63%)",
        dark: "hsl(0deg 0% 0%)",
        white: "hsl(0deg 0% 100%)",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      translate: {
        "2/4": "-50%",
      },

      fontFamily: {
        cursive: "cursive, sans-serif",
      },
      boxShadow: {
        "3xl":
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      },
    },
  },
  plugins: [],
};
