"use client";
import { useEffect, useState } from "react";

const RiskMatrix = ({ freqScore, sevScore }) => {
  const [freqColor, setFreqColor] = useState("green");
  const [sevColor, setSevColor] = useState("green");

  useEffect(() => {
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

    if (row === 5 - freqScore && column < sevScore - 1) {
      return `${freqColor} opacity-40`;
    }

    if (column === sevScore - 1 && row > 5 - freqScore) {
      return `${sevColor} opacity-40`;
    }

    if (row === 5 - freqScore && column === sevScore - 1) {
      return freqScore > sevScore ? `${freqColor}` : `${sevColor}`;
    }
    return "bg-gray-400";
  };

  return (
    <div className="relative">
      <h2 className="font-primary font-bold text-xl text-center mb-2">
        Risk Heatmap
      </h2>
      <div className="relative flex justify-start">
        <div className="mr-2">
          <p className="font-primary font-medium text-sm text-center -rotate-90 translate-x-8 translate-y-4">
            Frequency
          </p>
        </div>
        <div className="grid grid-cols-5 gap-1 -translate-y-6 translate-x-2">
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
      </div>
      <p className="font-primary font-medium text-sm text-center mt-1 translate-x-6">
        Severity
      </p>
    </div>
  );
};

export default RiskMatrix;
