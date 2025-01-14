/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        foreground: "#e4e4e7",
        background: "#27272a",
      },
    },
  },
  plugins: [],
};
