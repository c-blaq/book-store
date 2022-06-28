const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    screens: {
      smaller: "500px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
