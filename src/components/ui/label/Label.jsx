// components/ui/label/Label.js
import React from 'react';

const Label = ({ htmlFor, children }) => {
  return (
    <label
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;
