import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useTheme } from "../contexts/ThemeContext";

interface FeatureItemProps {
  feature: {
    title: string;
    description: string;
    animation: any;
  };
  index: number;
  inView: boolean;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature, index, inView }) => {
  const { colors } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`w-full ${colors.background} py-16`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center justify-center`}
        >
          <div className="md:w-1/2 flex justify-center">
            <Lottie animationData={feature.animation} style={{ width: "100%", height: "auto", maxWidth: 400 }} />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:px-12">
            <h3 className={`text-2xl md:text-3xl font-semibold mb-4 ${colors.text} text-center md:text-left`}>
              {feature.title}
            </h3>
            <p className={`text-lg ${colors.text} opacity-80 text-center md:text-left`}>{feature.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureItem;
