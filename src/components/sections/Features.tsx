import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../../contexts/ThemeContext";
import Lottie from "lottie-react";
import leadCaptureAnimation from "../../assets/leadCaptureAnimation.json";
import emailNurturingAnimation from "../../assets/emailNurturingAnimation.json";
import analyticsAnimation from "../../assets/analyticsAnimation.json";
import integrationAnimation from "../../assets/integrationAnimation.json";

const featuresList = [
  {
    title: "Smart Lead Capture",
    description: "Intelligent forms and popups that adapt to user behavior, maximizing your conversion rates.",
    animation: leadCaptureAnimation,
  },
  {
    title: "Automated Nurturing",
    description:
      "Personalized email sequences that guide leads through your funnel, increasing engagement and conversions.",
    animation: emailNurturingAnimation,
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time insights into your lead generation performance, helping you make data-driven decisions.",
    animation: analyticsAnimation,
  },
  {
    title: "Integration Hub",
    description: "Seamlessly connect with your favorite CRM and marketing tools, streamlining your workflow.",
    animation: integrationAnimation,
  },
];

const Features: React.FC = () => {
  const { colors } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="features" className={`py-20 ${colors.background}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${colors.text}`}>Powerful Features</h2>
      <div className="space-y-20">
        {featuresList.map((feature, index) => (
          <motion.div
            key={index}
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
        ))}
      </div>
    </section>
  );
};

export default Features;
