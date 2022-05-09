module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        graphik: ["Graphik", "sans-serif"],
        "graphik-bold": ["Graphik Bold", "sans-serif"],
        "graphik-light": ["Graphik Light", "sans-serif"],
        "graphik-medium": ["Graphik Medium", "sans-serif"],
        "graphik-semibold": ["Graphik Semibold", "sans-serif"],
      },
      boxShadow: {
        cardBoxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1);",
      },
      borderWidth: {
        3: "3px",
      },
      dropShadow: {
        navDropShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        shiftLeft: {
          "0%": { opacity: 0, transform: "translateX(-400px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        shiftLeft: "shiftLeft 0.4s ease-in-out",
      },
    },
  },
  variants: {
    scrollbar: ["rounded"],
  },
  plugins: [require("tailwind-scrollbar")],
};
