import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import NavLinks from "./NavLinks";
import ThemeToggle from "../common/ThemeToggle";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <header
      className={`${colors.header.background} ${colors.header.text} py-4 fixed top-0 left-0 right-0 z-10 shadow-md`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          LeadGen Pro
        </motion.h1>
        <nav className="hidden md:flex items-center space-x-4">
          <NavLinks />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </nav>
        <div className="md:hidden flex items-center">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            className={`ml-4 ${colors.header.text} focus:outline-none`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden ${colors.header.background} mt-2`}
        >
          <NavLinks onClick={() => setIsMenuOpen(false)} />
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
