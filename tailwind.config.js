/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik",
      },
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      "theme-blue": "#5457b6",
      "light-theme-blue": "#c3c4ef",
      "dark-blue": "#324152",
      "grayish-blue": "#67727e",
      "error-red": "#ed6468",
      "pale-red": " #ffb8bb",
      "very-light-gray": "#eaecf1",
      "background-gray": "#f5f6fa",
    },
  },
  plugins: [],
};
