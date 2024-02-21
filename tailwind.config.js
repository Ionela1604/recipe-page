/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        roseWhiteColor: "hsl(330, 100%, 98%)",
        whiteColor: "hsl(0, 0%, 100%)",
        eeggshellColor: "hsl(30, 54%, 90%)",
        lightGreyColor: "hsl(30, 18%, 87%)",
        wengeBrownColor: "hsl(30, 10%, 34%)",
        darkCharcoalColor: "hsl(24, 5%, 18%)",
        nutmegColor: "hsl(14, 45%, 36%)",
        darkRaspberryColor: "hsl(332, 51%, 32%)",
      },

      fontFamily: {
        outfit: ["Outfit"],
        youngserif: ["Young Serif"],
      },

      screens: {
        mobile: { max: "500px" },
        // => @media (max-width: 500px) { ... }

        mobileMD: { max: "768px" },
        // => @media (max-width: 768px) { ... }

        desktop: { min: "769px" },
        // => @media (min-width: 769px) { ... }
      },
    },
  },
  plugins: [],
};
