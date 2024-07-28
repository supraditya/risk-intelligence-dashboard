"use client";
import { useState } from "react";
import Chip from "./Chip";
import RiskMatrix from "./RiskMatrix";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedRisk } from "@/lib/selectedRiskSlice";
const RiskEntry = ({ data }) => {
  const [hovering, setHovering] = useState(false);
  const selectedRisk = useSelector((state) => state.selectedRisk);

  const dispatch = useDispatch();

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
      }}
      className={`${
        selectedRisk ? "max-h-80" : "max-h-40"
      } flex my-8 pr-8 items-center justify-around cursor-pointer`}
      onClick={() => dispatch(setSelectedRisk(data))}
    >
      <p className="text-4xl font-primary text-center font-bold">{data.risk_ranking}</p>
      <div className={selectedRisk ? "w-4/5" : "w-2/3"}>
        <p
          className={`${
            hovering ? "underline" : ""
          } font-primary font-semibold text-3xl mb-1 line-clamp-2`}
        >
          {data.title}
        </p>
        <p className="font-secondary text-base line-clamp-2">{data.summary}</p>
        {data.tags.map((tag, index) => (
          <Chip key={index} text={tag} />
        ))}
      </div>
      {!selectedRisk && (
        <div className="mb-5">
          <RiskMatrix freqScore={data.freqScore} sevScore={data.sevScore} />
        </div>
      )}
    </div>
  );
};

export default RiskEntry;
