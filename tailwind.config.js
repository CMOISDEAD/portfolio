/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // TODO: add more colors like `hover` `borders` `focus` etc.
        foreground: "#e4e4e7",
        background: "#27272a",
        inactive: "#a1a1aa",
      },
    },
  },
  plugins: [],
};
