// components/ui/textarea/Textarea.js
import React from 'react';

const Textarea = ({ id, placeholder,name, onChange, value }) => {
  return (
    <textarea
      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      id={id}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default Textarea;
