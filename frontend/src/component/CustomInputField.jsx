import React from "react";

const CustomInputField = ({type,placeholder}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="px-5 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white/50 flex-1"
    />
  );
};

export default CustomInputField;
