"use client";
import { useEffect, useState } from "react";
const RiskMatrix = ({ freqScore, sevScore, scaleUp = false }) => {
  const [freqColor, setFreqColor] = useState("green");
  const [sevColor, setSevColor] = useState("green");

  useEffect(() => {
    // Set colors based on scores
    if (freqScore >= 1 && freqScore <= 2) {
      setFreqColor("bg-matrix-green");
    } else if (freqScore === 3) {
      setFreqColor("bg-matrix-yellow");
    } else {
      setFreqColor("bg-matrix-red");
    }

    if (sevScore >= 1 && sevScore <= 2) {
      setSevColor("bg-matrix-green");
    } else if (sevScore === 3) {
      setSevColor("bg-matrix-yellow");
    } else {
      setSevColor("bg-matrix-red");
    }
  }, [freqScore, sevScore]);

  const cellShader = (index) => {
    let column = index % 5;
    let row = Math.floor(index / 5);
    // Shades all cells in correct row
    if (row === 5 - freqScore && column < sevScore - 1) {
      return `${freqColor} opacity-40`;
    }

    // Shades all cells in correct column
    if (column === sevScore - 1 && row > 5 - freqScore) {
      return `${sevColor} opacity-40`;
    }

    // Shades the correct cell with opacity at 1
    if (row === 5 - freqScore && column === sevScore - 1) {
      return freqScore > sevScore ? `${freqColor}` : `${sevColor}`;
    }
    return "bg-gray-400";
  };
  return (
    <div className={scaleUp ? "scale-150 " : ""}>
      <p className="font-primary font-medium text-sm w-min -translate-x-14 translate-y-16 pr-6 pb-4 text-center -rotate-90">
        Frequency
      </p>
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: 25 }).map((_, index) => (
          <div
            key={index}
            className={
              "rounded-sm h-5 w-8 flex items-center justify-center " +
              cellShader(index)
            }
          ></div>
        ))}
      </div>
      <p className="font-primary font-medium text-sm text-center mt-1">
        Severity
      </p>
    </div>
  );
};

export default RiskMatrix;
