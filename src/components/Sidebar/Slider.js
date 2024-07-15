"use client";

import React, { useState } from "react";

// Slider thumb (selector) styling present in globals.css
const Slider = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="px-4">
      <input
        type="range"
        min={1}
        max={5}
        value={value}
        onChange={handleChange}
        className={`w-full h-2 bg-gradient-to-r from-primary-blue via-primary-blue to-gray-400 rounded-full appearance-none`}
        style={{
          background: `linear-gradient(to right, #006CD0 0%, #006CD0 ${
            (value - 1) * 25
          }%, #d1d5db ${(value - 1) * 25}%, #d1d5db 100%)`,
        }}
      />
      <div className="flex justify-between mt-2">
        <span>1</span>
        <span>5</span>
      </div>
      {/* <div className="mt-2 text-center">{value}</div> */}
    </div>
  );
};

export default Slider;
