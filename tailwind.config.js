/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        form: "url('public/form.jpg')",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideUpH1: "slideUp 1.0s ease-out forwards",
        slideUpP: "slideUp 1.2s ease-out forwards",
        slideUpButton: "slideUp 1.4s ease-out forwards",
        slideUpImage: "slideUp 1.3s ease-out forwards",
        slideUpIcons: "slideUp 1.6s ease-out forwards",
        slideRight: "slideRight 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
