import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
    header: {
      background: string;
      text: string;
    };
  };
}

const lightColors = {
  background: "bg-gray-100",
  text: "text-gray-900",
  primary: "bg-indigo-600",
  secondary: "bg-gray-200",
  accent: "text-orange-500",
  header: {
    background: "bg-white",
    text: "text-gray-900",
  },
};

const darkColors = {
  background: "bg-gray-800",
  text: "text-gray-100",
  primary: "bg-purple-600",
  secondary: "bg-gray-700",
  accent: "text-orange-400",
  header: {
    background: "bg-gray-900",
    text: "text-white",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if there's a theme stored in sessionStorage
    const storedTheme = sessionStorage.getItem("theme") as Theme | null;
    return storedTheme || "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      // Store the new theme in sessionStorage
      sessionStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    // Apply the theme to the body element
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const colors = theme === "light" ? lightColors : darkColors;

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
