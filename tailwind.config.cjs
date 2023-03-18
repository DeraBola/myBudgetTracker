/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          main: "#1E1E1E",
        },
        blue: {
          100: "#00ffff", //active
        },
      yellow:{
        100:"#FFE600"
      },
        white:{
          primary:"#fff",
          secondary:"#ffffff80",
        }
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        "6xl": "3.5rem",
        "7xl": "64px",
      }
    }
  },
  plugins: [],
}
