/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        "header-spacing": "0.04em"
      },
      colors: {
        "header-h1": "#9a3412",
        "header-p": "#a39191"
      },
      fontFamily: {
        "header": ["Pacifico", "cursive"]
      },
    },
  },
  plugins: [],
}

