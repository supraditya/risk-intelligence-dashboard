"use client";
import { useState } from "react";
import Chip from "./Chip";
import RiskMatrix from "./RiskMatrix";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedRisk } from "@/lib/selectedRiskSlice";
const RiskEntry = ({ data }) => {
  const [hovering, setHovering] = useState(false);
  const selectedRisk = useSelector((state) => state.risk.selected);

  const dispatch = useDispatch();

  return (
    <div
      className={`${
        selectedRisk ? "max-h-80 min-h-60 my-2 mr-1" : "max-h-40 my-8"
      } ${
        selectedRisk && selectedRisk.id === data.id
          ? "bg-primary-blue text-white"
          : ""
      } flex relative flex-col items-end justify-center pr-8 cursor-pointer rounded-lg`}
    >
      {/* Used a niche UTF character for the close button to avoid svg, check if it renders on other machine web pages */}
      {selectedRisk && selectedRisk.id === data.id && (
        <button
          onClick={() => dispatch(setSelectedRisk(null))}
          className="absolute z-50 mb-40"
        >
          ╳
        </button>
      )}
      <div
        className="flex items-center justify-around w-full"
        onClick={() => dispatch(setSelectedRisk(data))}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => {
          setHovering(false);
        }}
      >
        <p className="text-4xl font-primary text-center font-bold">
          {data.risk_ranking}
        </p>
        <div className={selectedRisk ? "w-4/5" : "w-2/3"}>
          <p
            className={`${
              hovering ? "underline" : ""
            } font-primary font-semibold text-3xl mb-1 line-clamp-2`}
          >
            {data.title}
          </p>
          <p className="font-secondary text-base line-clamp-2">
            {data.summary}
          </p>
          {data.tags.map((tag, index) => {
            if (selectedRisk && selectedRisk.id === data.id) {
              return <Chip key={index} text={tag} selected={true} />;
            }
            return <Chip key={index} text={tag} />;
          })}
        </div>
        {!selectedRisk && (
          <div className="mb-5">
            <RiskMatrix freqScore={data.freqScore} sevScore={data.sevScore} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RiskEntry;
