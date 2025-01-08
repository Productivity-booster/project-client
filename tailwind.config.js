/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Handleson: ["HandlesonFive", "sans-serif"],
        Nine: ["NineByFive", "sans-serif"],
        SevenExtraTight: ["SevenExtraTight", "san-serif"],
      },
      colors: {
        lightPink: "#d4aadc",
      },
    },
  },
  plugins: [require("daisyui")],
};
