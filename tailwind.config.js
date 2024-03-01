/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content:["./pages/**/*.{js,jsx}", , "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9D5431",
        secondary: "hsl(213.33deg 14.29% 12.35%)",
        "primary-light":"#9D5431",
        dark: "hsl(0deg 0% 0%)",
        white: "hsl(0deg 0% 100%)",
       gray: "rgba(45, 52, 63, 0.4)",
        "gray-100": "rgba(255,255,255,.5)",
        "secondary-white": "hsl(0deg 9.18% 87.86%)",
      },
      screens: {
        sm: "480px",
        md: "790px",
       lg: "1025px",
        xl: "1500px",
      },
      translate: {
        "2/4": "-50%",
      },

      fontFamily: {
  
      },
      boxShadow: {
        "3xl":
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      },
    },
  },
  plugins: [],
};
