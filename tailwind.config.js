/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class", // <-- enable class-based dark mode
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FE6807",
        secondary: "#191BDF",
        dark: "#09080D",
        hover: "#F4EFCA",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Garet", "sans-serif"],
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2.25rem",
      },
    },
  },
  plugins: [],
};
export default config;