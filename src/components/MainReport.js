"use client";
import React from "react";
import RiskMatrix from "./RiskMatrix";
import Chip from "./Chip";
import WorldMap from "react-svg-worldmap";
import { useSelector } from "react-redux";

const MainReport = () => {
  const freqScore = 3; // Example score, replace with actual data
  const sevScore = 5; // Example score, replace with actual data

  const selectedRisk = useSelector((state) => state.selectedRisk);

  // region data formatted to fit WorldMap component
  const regionData = selectedRisk.regions.map((region) => {
    return { country: region, value: "" };
  });

  // const regionData = [
  //   { country: "cn", value:"" }, // china
  //   { country: "in", value:"" }, // india
  //   { country: "us", value:"" }, // united states
  //   { country: "id", value:"" }, // indonesia
  //   { country: "pk", value:"" }, // pakistan
  //   { country: "br", value:"" }, // brazil
  //   { country: "ng", value:"" }, // nigeria
  //   { country: "bd", value:"" }, // bangladesh
  //   { country: "ru", value:"" }, // russia
  //   { country: "mx", value:"" }, // mexico
  // ];

  return (
    <div className="w-1/2 border h-[90.3vh] overflow-y-scroll px-8 bg-white shadow-sm pt-12">
      <h1 className="text-4xl font-primary font-medium my-2">
        {selectedRisk.title}
      </h1>
      <div className="flex my-2">
        {selectedRisk.tags.map((tag, index) => (
          <Chip key={index} text={tag} />
        ))}
      </div>
      <div className="flex justify-around my-8 space-x-6">
        <div className="text-center">
          <p className="text-5xl font-primary">#{selectedRisk.risk_ranking}</p>
          <p className="text-xl font-primary">Risk Ranking</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-primary">
            {selectedRisk.freqScore}
            <span className="text-3xl">/5</span>
          </p>
          <p className="text-xl font-primary">Impact Frequency</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-primary">
            {selectedRisk.sevScore}
            <span className="text-3xl">/5</span>
          </p>
          <p className="text-xl font-primary">Impact Severity</p>
        </div>
      </div>
      <h2 className="text-2xl font-primary font-semibold">Summary</h2>
      <p className="my-2 font-secondary text-lg">{selectedRisk.summary}</p>
      <div className="flex flex-wrap justify-around mt-8">
        <div className="w-1/2">
          <h3 className="text-xl font-primary font-semibold">
            Affected Regions
          </h3>
          <WorldMap
            borderColor="#000000"
            strokeOpacity="0.9"
            color="#006CD0"
            value-suffix="people"
            size="sm"
            data={regionData}
          />
        </div>
        <div className="w-1/2">
          <h3 className="text-xl font-primary font-semibold">Risk Heatmap</h3>
          <div className="w-fit pl-12">
            <RiskMatrix
              freqScore={selectedRisk.freqScore}
              sevScore={selectedRisk.sevScore}
              scaleUp={true}
            />
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold font-primary mt-8">
        Articles Referenced
      </h2>
      <ol className="list-decimal text-base list-inside my-4 font-secondary">
        {selectedRisk.references.map((reference, index) => (
          <li key={index}>
            <a
              href={reference.link}
              className="text-blue-500 underline"
              target="_blank"
              rel="noreferrer"
            >
              {reference.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MainReport;
