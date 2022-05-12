import React from "react";

const Button = ({ className, text, type }) => {
  return (
    <button className={className} type={type}>
      {text}
    </button>
  );
};

export default Button;
