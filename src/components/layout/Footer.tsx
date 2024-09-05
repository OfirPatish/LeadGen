import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../../contexts/ThemeContext";

const Footer: React.FC = () => {
  const { colors } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer ref={ref} className={`${colors.background} ${colors.text} py-12`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">LeadGen Pro</h3>
            <p className="text-sm mb-4">Empowering businesses with smart lead generation solutions.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => (window.location.href = "valid-url")}>Link Text</button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "valid-url")}>Link Text</button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "valid-url")}>Link Text</button>
              </li>
              <li>
                <button onClick={() => (window.location.href = "valid-url")}>Link Text</button>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <button onClick={() => (window.location.href = "valid-url")}>Facebook</button>
              <button onClick={() => (window.location.href = "valid-url")}>Twitter</button>
              <button onClick={() => (window.location.href = "valid-url")}>LinkedIn</button>
              <button onClick={() => (window.location.href = "valid-url")}>Instagram</button>
            </div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className={`${colors.accent} px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors duration-300`}
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-700 text-center"
        >
          <p>&copy; {new Date().getFullYear()} LeadGen Pro. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
