/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      opensans: ["OpenSans", "sans-serif"],
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      xlx: { max: "1132px" },

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      mdx: { max: "886px" },

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xm: { max: "480px" },
      // => @media (max-width: 480px) { ... }

      xlmin: { min: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lgmin: { min: "1023px" },
      // => @media (max-width: 1023px) { ... }

      mdmin: { min: "767px" },
      // => @media (max-width: 767px) { ... }

      smmin: { min: "639px" },
      // => @media (max-width: 639px) { ... }

      xm: { max: "480px" },
      // => @media (min-width: 480px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
