/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4F46E5",
          dark: "#8B5CF6",
        },
        secondary: {
          light: "#F3F4F6",
          dark: "#374151",
        },
        background: {
          light: "#F3F4F6",
          dark: "#1F2937",
        },
        text: {
          light: "#111827",
          dark: "#F3F4F6",
        },
        accent: {
          light: "#FF6B35",
          dark: "#FFA500",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
