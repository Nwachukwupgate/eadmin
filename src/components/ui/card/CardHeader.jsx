// components/ui/card/CardHeader.js
import React from 'react';

const CardHeader = ({ children }) => {
  return <div className="flex flex-col space-y-1.5 p-6">{children}</div>;
};

export default CardHeader;
