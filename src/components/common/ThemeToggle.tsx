import React from "react";

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className={`p-2 rounded-full ${
      theme === "light" ? "bg-gray-200 text-gray-800" : "bg-gray-700 text-white"
    } hover:bg-opacity-80 transition-colors`}
  >
    {theme === "dark" ? "🌞" : "🌙"}
  </button>
);

export default ThemeToggle;
