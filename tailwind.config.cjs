/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'lora': ['Lora', 'sans-serif'],
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "color-scheme": "light",
          primary: "#4b6bfb",
          secondary: "#7b92b2",
          accent: "#67cba0",
          neutral: "#181a2a",
          "neutral-content": "#edf2f7",
          "base-100": "#ffffff",
          "base-content": "#181a2a",
          "--rounded-box": "0.25rem",
          "--rounded-btn": ".125rem",
          "--rounded-badge": ".125rem",
          "--animation-btn": "0",
          "--animation-input": "0",
          "--btn-focus-scale": "1",
        },
      },
    ],
  },
  plugins: [
    require('tailwind-scrollbar'),
    require("daisyui"),
  ],
};
