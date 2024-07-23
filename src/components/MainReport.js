"use client";
import React from "react";
import RiskMatrix from "./RiskMatrix";
import RiskDetails from "./RiskDetails";

const MainReport = () => {
  const freqScore = 3; // Example score, replace with actual data
  const sevScore = 5; // Example score, replace with actual data

  return (
    <div className="w-1/2 border bg-white shadow-sm px-4">
      <h1 className="text-4xl font-bold text-center my-4">Risk Title</h1>
      <div className="flex justify-center space-x-2 my-4">
        <span className="bg-blue-500 text-white px-2 py-1 rounded">Theme</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">Theme</span>
        <span className="bg-blue-500 text-white px-2 py-1 rounded">Theme</span>
      </div>
      <RiskDetails
        riskRanking="1"
        impactFrequency={freqScore}
        impactSeverity={sevScore}
      />
      <h2 className="text-2xl font-semibold mt-8">Summary</h2>
      <p className="my-4">Description of Risk</p>
      <div className="flex justify-around mt-8">
        <div className="w-1/2">
          <h3 className="text-xl font-semibold">Affected Regions (Map)</h3>
        </div>
        <div className="w-1/2">
          <h3 className="text-xl font-semibold text-center">Risk Heatmap</h3>
          <RiskMatrix freqScore={freqScore} sevScore={sevScore} />
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-8">Articles Referenced</h2>
      <ol className="list-decimal list-inside my-4 font-primary">
        <li>
          <a
            href="https://example.com/article1"
            className="text-blue-500 underline"
          >
            Healthcare Data Security Breaches: Impacts and Prevention
            Strategies, Journal of Cybersecurity, Vol. 8, No. 2, 2023.
          </a>
        </li>
        <li>
          <a
            href="https://example.com/article2"
            className="text-blue-500 underline"
          >
            National Database Vulnerabilities and Protection Measures, Health IT
            Security, May 2024.
          </a>
        </li>
        <li>
          <a
            href="https://example.com/article3"
            className="text-blue-500 underline"
          >
            Implications of Healthcare Data Compromise on Public Trust,
            International Journal of Medical Informatics, Vol. 95, 2023.
          </a>
        </li>
      </ol>
    </div>
  );
};

export default MainReport;
