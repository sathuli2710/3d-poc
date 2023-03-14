/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      s: { min: "320px", max: "767px" },
      m: { min: "768px", max: "1023px" },
      l: { min: "1024px", max: "1439px" },
      xl: { min: "1440px" },
    },
    extend: {},
  },
  plugins: [],
};
