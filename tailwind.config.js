/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#EBEDEF",
        red: "#FF1E1C",
        greytext: "#959596",
      },
    },
  },
  plugins: [],
};
