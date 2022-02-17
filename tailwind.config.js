module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-1": "#5AB4B1",
        "brand-2": "#3D706E",
        "brand-3": "#EFF8F7",
        "brand-4": "#34938F",
        "brand-5": "#03D0BC",
        littleblack: "rgba(0, 0, 0, 0.5)",
      },
      height: {
        4.5: "1.125rem",
        38: "9.5rem",
      },
      minHeight: {
        "screen-48": "calc( 100vh - 12rem )",
        "screen-54": "calc( 100vh - 13.5rem )",
        "screen-72": "calc( 100vh - 18rem )",
      },
      width: {
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
      },
      gridTemplateColumns: {
        "auto-6": "repeat(6, auto)",
      },
    },
  },
  plugins: [],
};
