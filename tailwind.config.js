module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-1": "#5AB4B1",
        "brand-2": "#3D706E",
        "brand-3": "#EFF8F7",
        "brand-4": "#34938F",
      },
      minHeight: {
        "screen-12": "calc( 100vh - 12rem )",
        "screen-18": "calc( 100vh - 18rem )",
      },
      width: {
        26: "6.5rem",
        30: "7.5rem",
      },
      gridTemplateColumns: {
        "auto-6": "repeat(6, auto)",
      },
    },
  },
  plugins: [],
};
