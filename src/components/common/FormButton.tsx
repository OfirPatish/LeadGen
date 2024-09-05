import React from "react";
import { motion } from "framer-motion";

interface FormButtonProps {
  theme: string;
}

const FormButton: React.FC<FormButtonProps> = ({ theme }) => {
  const buttonBg = theme === "light" ? "bg-indigo-600 hover:bg-indigo-700" : "bg-indigo-500 hover:bg-indigo-600";
  const buttonText = "text-white";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type="submit"
      className={`${buttonBg} ${buttonText} px-4 py-2 rounded-md font-semibold w-full transition duration-300 ease-in-out`}
    >
      Start Free Trial
    </motion.button>
  );
};

export default FormButton;
