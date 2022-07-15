module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        base: "#212121",
        "base-light": "#323232",
        "base-dark": "#0A0A0A",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
