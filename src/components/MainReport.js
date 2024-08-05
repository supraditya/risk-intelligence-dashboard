"use client";
import React from "react";
import RiskMatrix from "./RiskMatrix";
import Chip from "./Chip";
import WorldMap, { regions } from "react-svg-worldmap";
import { useSelector } from "react-redux";

const MainReport = () => {
  const selectedRisk = useSelector((state) => state.risk.selected);
  let regionData = [];
  if (selectedRisk.regions) {
    // region data formatted to fit WorldMap component
    regionData = selectedRisk.regions.map((region) => {
      return { country: region, value: "" };
    });
  }

  return (
    <div className="w-1/2 border h-[90.3vh] overflow-y-scroll px-8 bg-white shadow-sm pt-12">
      <h1 className="text-4xl font-primary font-medium my-2">
        {selectedRisk.title}
      </h1>
      {selectedRisk.industries && (
        <div className="flex flex-wrap my-2">
          {selectedRisk.industries.map((tag, index) => (
            <Chip key={index} text={tag} />
          ))}
        </div>
      )}
      <div className="flex justify-around my-8 space-x-6">
        <div className="text-center">
          <p className="text-5xl font-primary">#{selectedRisk.likelihood}</p>
          <p className="text-xl font-primary">Risk Ranking</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-primary">
            {selectedRisk.likelihood}
            <span className="text-3xl">/5</span>
          </p>
          <p className="text-xl font-primary">Impact Likelihood</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-primary">
            {selectedRisk.severity}
            <span className="text-3xl">/5</span>
          </p>
          <p className="text-xl font-primary">Impact Severity</p>
        </div>
      </div>
      <h2 className="text-2xl font-primary font-semibold">Summary</h2>
      <p className="my-2 font-secondary text-lg">{selectedRisk.summary}</p>
      {selectedRisk.regions && (
        <div>
          <h3 className="text-2xl font-primary font-semibold">
            Affected Regions
          </h3>
          <WorldMap
            borderColor="#000000"
            strokeOpacity="0.9"
            color="#006CD0"
            value-suffix="people"
            size="lg"
            data={regionData}
          />
        </div>
      )}
      <h3 className="text-2xl font-primary font-semibold">Risk Heatmap</h3>
      <div className="w-fit mx-auto mt-4 mb-20">
        <RiskMatrix
          freqScore={selectedRisk.likelihood}
          sevScore={selectedRisk.severity}
          scaleUp={true}
        />
      </div>
      <h2 className="text-2xl font-semibold font-primary mt-8">
        Articles Referenced
      </h2>
      <p className="font-secondary italic">
        (Titles match Knowledge Base Articles in Google Drive)
      </p>
      <ol className="list-decimal text-base list-inside mt-2 mb-4 font-secondary">
        {selectedRisk.data_sources &&
          selectedRisk.data_sources.map((reference, index) => (
            <li key={index}>{reference}</li>
          ))}
      </ol>
    </div>
  );
};

export default MainReport;
