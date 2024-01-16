/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#EBEDEF",
        red: "#FF1E1C",
        greytext: "#959596",
        pink: "#F6CFCE",
        textred: "#FF1E1C",
        statusActiveBg: " #D3FBE9",
        statusActive: "#00CD73",
        statusInactiveBg: "#006ED4",
        statusInactive: "#06067a",
        statusIdleBg: "#ED9436",
        statusIdle: "#BC6810",
        statusOutOfServiceBg: "#FF493E",
        statusOutOfService: "#BB2E25",
      },
    },
    fontFamily: {
      gotham: ["Gotham", "sans-serif"],
    },
  },
  plugins: [],
};
