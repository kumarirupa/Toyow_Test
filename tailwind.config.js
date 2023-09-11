/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "6.5vw": "6.5vw",
        "1.75vw": "1.75vw",
        ".875rem": ".875rem",
        "2.75rem": "2.75rem",
        "3.25rem": "3.25rem",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        customBlack: "#151515",
        buttonBg: "#f8ede3",
        customWhite: "#fff",
        customDesc: "rgba(34,34,34,.6)",
        imageBg: "#f9f9f9",
        btnHover: "#2b2b2b",
        card: "#f8f8f8",
      },
      width: {
        "fit-content": "fit-content",
      },
    },
  },
  plugins: [],
  darkMode: "class", // Enable dark mode
};
