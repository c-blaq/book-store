import React from "react";

const Button = ({ className, text, type, onClick, onSubmit }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {text}
    </button>
  );
};

export default Button;
