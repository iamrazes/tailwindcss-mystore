module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        base: "#212121",
        "base-light": "#323232",
        "base-light-2": "#575757",
        "base-dark": "#0A0A0A",
        accent: {
          yellow: "#FFB800",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
