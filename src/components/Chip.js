import React from "react";
import { useSelector } from "react-redux";

const Chip = ({ text }) => {
  const selectedRisk = useSelector((state) => state.selectedRisk);

  return (
    <div
      className={`${
        selectedRisk ? "text-sm" : ""
      } bg-primary-blue-dark w-fit inline-block mt-1.5 mr-1.5 font-primary text-white py-1 px-2 rounded-lg`}
    >
      {text}
    </div>
  );
};

export default Chip;
