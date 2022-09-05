/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "index.html"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    backgroundImage: {
      "desktop-dark": "url(./src/assets/bg-desktop-dark.jpg)",
      "desktop-light": "url(./src/assets/bg-desktop-light.jpg)",
      "mobile-dark": "url(./src/assets/bg-mobile-dark.jpg)",
      "mobile-light": "url(./src/assets/bg-mobile-light.jpg)",
    },
    colors: {
      // Defaults
      white: "#ffffff",

      // Primary
      brightBlue: "hsl(220, 98%, 61%)",
      checkBackground:
        "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",

      // Dark theme
      veryDarkBlue: "hsl(235, 21%, 11%)",
      veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
      lightGrayishBlue: "hsl(234, 39%, 85%)",
      lightGrayishBlueHover: "hsl(236, 33%, 92%)",
      darkGrayishBlue: "hsl(234, 11%, 52%)",
      veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
      veryDarkGrayishBlue: "hsl(237, 14%, 26%)",

      // Light theme
      veryLightGray: "hsl(0, 0%, 98%)",
      veryLightGrayishBlue: "hsl(236, 33%, 92%)",
      lightGrayishBlue: "hsl(233, 11%, 84%)",
      darkGrayishBlue: "hsl(236, 9%, 61%)",
      veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
    },
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};
