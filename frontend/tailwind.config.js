/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      green: {
        ...colors.green,
        1: "#1aac83",
      },
      red: {
        ...colors.red,
        1: "#e7195a",
      },
    },
  },
  plugins: [],
};
