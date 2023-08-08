/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      primaryBlue: "#1D4ED8",
      secondaryBlue: "#93c5fd",
      primaryBg: "#FFFFFF",
      primaryGray: "#9CA3AF",
      secondaryGray: "#E5E7EB",
      primaryDark: "#000",
      secondaryDark: "#020617",
      primalYellow: "#fbbf24",
      primalLightYellow: "#fef9c3",
    },
    extend: {},
  },
  plugins: [],
};
