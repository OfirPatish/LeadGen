import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

interface NavLinksProps {
  onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ onClick }) => {
  const { colors } = useTheme();

  return (
    <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
      <li>
        <a href="#features" className={`hover:${colors.accent}`} onClick={onClick}>
          Features
        </a>
      </li>
      <li>
        <a href="#testimonials" className={`hover:${colors.accent}`} onClick={onClick}>
          Testimonials
        </a>
      </li>
      <li>
        <a href="#contact" className={`hover:${colors.accent}`} onClick={onClick}>
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
