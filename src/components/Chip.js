import React from "react";

const Chip = ({ text, resultClicked = false }) => {
  return (
    <div
      className={`${
        resultClicked ? "text-sm" : ""
      } bg-primary-blue-dark w-fit inline-block mt-1.5 mr-1.5 font-primary text-white py-1 px-2 rounded-lg`}
    >
      {text}
    </div>
  );
};

export default Chip;
