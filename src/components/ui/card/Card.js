// components/ui/card/Card.js
import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      {children}
    </div>
  );
};

export default Card;
