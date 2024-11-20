/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#fb923c",
      },
      fontFamily: {
        sans: "'Poppins', sans-serif",
        serif: "'Playfair', serif",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#fb923c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
