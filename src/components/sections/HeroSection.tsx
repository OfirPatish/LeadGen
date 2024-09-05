import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../../contexts/ThemeContext";
import Lottie from "lottie-react";
import leadGenerationAnimation from "../../assets/leadGenerationAnimation.json";

const HeroSection: React.FC = () => {
  const { colors } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className={`${colors.background} ${colors.text} min-h-screen flex items-center`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left md:w-1/2 md:pr-12 lg:pr-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Supercharge Your Lead Generation</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto md:mx-0">
              LeadGen Pro helps you capture, nurture, and convert leads with powerful tools and automation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${colors.primary} ${colors.text} px-8 py-3 rounded-full text-lg font-semibold`}
            >
              Start Your Free Trial
            </motion.button>
          </motion.div>
          <div className="md:w-1/2 mt-12 md:mt-0 md:pl-12 lg:pl-20">
            <Lottie animationData={leadGenerationAnimation} style={{ width: "100%", height: "auto", maxWidth: 500 }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
