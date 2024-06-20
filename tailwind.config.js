/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nazanin: ["nazanin", "sans-serif"],
        ziba: ["ziba", "sans-serif"],
        mitra: ["mitra", "sans-serif"],
        titrbd: ["titrbd", "sans-serif"],
        titrdf: ["titrdf", "sans-serif"],
        titrtge: ["titrtge", "sans-serif"],
        yekan: ["yekan", "sans-serif"],
      },

      rotate: {
        15: "15deg",
        30: "30deg",
        60: "60deg",
        75: "75deg",
        90: "90deg",
      },

      keyframes: {
        "slide-down": {
          "0%": { maxHeight: "0", display: "none" },
          "100%": { maxHeight: "300px", display: 'block'},
        },
        "slide-up": {
          "0%": { maxHeight: "300px", },
          "100%": { maxHeight: "0", display: "none" },
        },
        "rotate-down": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(90deg)" },
        },
        "rotate-up": {
          "0%": { transform: "rotate(90deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "down": "slide-down 0.8s ease-out forwards",
        "up": "slide-up 0.8s ease-out forwards",
        "rotate-down": "rotate-down 0.3s ease-out forwards",
        "rotate-up": "rotate-up 0.3s ease-out forwards",
      },

      height: {
        50: "50px",
        100: "100px"
      }
    },
  },
  plugins: [],
};
