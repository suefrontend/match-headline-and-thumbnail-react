/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#d20404",
        pink: "#ffa3a3",
        btnpink: "#fdb4b4",
        grey: "#919191",
        blackrgba: "rgba(0, 0, 0, 0.54)",
      },
    },
  },
  plugins: [],
};
