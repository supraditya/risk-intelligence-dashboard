"use client";
import { useState } from "react";
import Chip from "./Chip";
import RiskMatrix from "./RiskMatrix";
const RiskEntry = ({ resultClicked = false }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
      }}
      className={`${
        resultClicked ? "max-h-80" : "max-h-40"
      } flex my-8 pr-8 items-center justify-around cursor-pointer`}
    >
      <p className="text-4xl font-primary text-center font-bold">1</p>
      <div className="w-2/3">
        <p
          className={`${
            hovering ? "underline" : ""
          } font-primary font-semibold text-3xl mb-1 line-clamp-2`}
        >
          National healthcare databases are compromised
        </p>
        <p className="font-secondary text-base line-clamp-2">
          This is a very long, if not unnecessarily long description of what
          this issue means exactly. If it were to be realized, healthcare would
          be inaccessible to many people, and the world would be a much sadder.
        </p>
        <Chip key="1" text="Cybersecurity" resultClicked={resultClicked} />
        <Chip key="2" text="Healthcare" resultClicked={resultClicked} />
        <Chip key="3" text="Data Breach" resultClicked={resultClicked} />
      </div>
      {!resultClicked && (
        <div className="mb-5">
          <RiskMatrix freqScore={3} sevScore={5} />
        </div>
      )}
    </div>
  );
};

export default RiskEntry;
