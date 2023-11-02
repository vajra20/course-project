/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      base: "340px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      flex: {
        300: "1 1 300px",
        400: "1 1 400px",
      },
      colors: {
        "purple-blue": "#1C1E53",
        "sky-blue": "#EEF4FA",
        "default-black": "#282938",
        "yellow-glow": "#FCD980",
        "active-tab": "#2405F2",
        "dashboard-user": "#F4F6FC",
      },
      gridTemplateColumns: {
        auto: "58% auto",
      },
      height: {
        100: "400px",
      },
    },
  },
  variants: {},
  plugins: [],
};
