import React from "react";

interface FormInputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  theme: string;
}

const FormInput: React.FC<FormInputProps> = ({ type, value, onChange, placeholder, theme }) => {
  const inputBg = theme === "light" ? "bg-white" : "bg-gray-700";
  const inputText = theme === "light" ? "text-gray-800" : "text-gray-200";

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-4 py-2 border border-gray-300 rounded-md ${inputBg} ${inputText} w-full`}
      required
    />
  );
};

export default FormInput;
