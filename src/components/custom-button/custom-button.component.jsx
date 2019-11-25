import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, ...customProps }) => {
  return (
    <button className="custom-button" {...customProps}>
      {children}
    </button>
  );
};

export default CustomButton;
