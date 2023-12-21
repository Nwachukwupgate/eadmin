// components/ui/button/Button.js
import React from 'react';


const Button = ({ children, className, onClick, disabled }) => {
  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };
  return (
    <button className={`inline-flex items-center justify-center rounded-md text-sm font-medium ${className}`} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
