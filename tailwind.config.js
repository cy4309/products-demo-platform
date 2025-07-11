/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // 啟用 class 模式
  theme: {
    extend: {
      fontFamily: {
        custom: ["Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        primary: "#010127",
        secondary: "#CCFF00",
      },
      spacing: {
        layoutPadding: "6rem",
      },
    },
  },
  plugins: [],
  // plugins: [
  //   plugin(function ({ addBase, theme }) {
  //     addBase({
  //       html: {
  //         '--layout-padding': theme('spacing.layoutPadding'),
  //       },
  //     });
  //   }),
  // ],
};
