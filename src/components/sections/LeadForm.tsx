import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import formAnimation from "../../assets/formAnimation.json";
import { useTheme } from "../../contexts/ThemeContext";
import FormInput from "../common/FormInput";
import FormButton from "../common/FormButton";

const LeadForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { colors, theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with:", { name, email });
    setEmail("");
    setName("");
  };

  const formBg = theme === "light" ? "bg-indigo-100" : "bg-gray-800";

  return (
    <section ref={ref} id="contact" className={`py-16 ${formBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <Lottie animationData={formAnimation} style={{ width: 300, height: 300 }} />
          </motion.div>
          <div className="md:w-1/2">
            <h3 className={`text-2xl font-bold mb-4 text-center ${colors.text}`}>Get Started Today</h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <FormInput
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                theme={theme}
              />
              <FormInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                theme={theme}
              />
              <FormButton theme={theme} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
