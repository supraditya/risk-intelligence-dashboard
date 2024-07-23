"use client";
import React from "react";
import RiskMatrix from "./RiskMatrix";
import Chip from "./Chip";

const MainReport = () => {
  const freqScore = 3; // Example score, replace with actual data
  const sevScore = 5; // Example score, replace with actual data

  return (
    <div className="w-1/2 border h-[90.3vh] overflow-y-scroll px-8 bg-white shadow-sm pt-12">
      <h1 className="text-4xl font-primary font-medium my-2">
        National healthcare databases are compromised
      </h1>
      <div className="flex space-x-2 my-2">
        <Chip key="1" text="Cybersecurity" />
        <Chip key="2" text="Healthcare" />
        <Chip key="3" text="Data Breach" />
      </div>
      <div className="flex justify-around my-8 space-x-6">
        <div className="text-center">
          <p className="text-5xl font-primary">#1</p>
          <p className="text-xl font-primary">Risk Ranking</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-primary">
            3<span className="text-3xl">/5</span>
          </p>
          <p className="text-xl font-primary">Impact Frequency</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-primary">
            5<span className="text-3xl">/5</span>
          </p>
          <p className="text-xl font-primary">Impact Severity</p>
        </div>
      </div>
      <h2 className="text-2xl font-primary font-semibold">Summary</h2>
      <p className="my-2 font-secondary text-lg">
        This is a very long, if not unnecessarily long description of what this
        issue means exactly. If it were to be realized, healthcare would be
        inaccessible to many people, and the world would be a much sadder.
      </p>
      <div className="flex justify-around mt-8">
        <div className="w-1/2">
          <h3 className="text-xl font-primary font-semibold">Affected Regions</h3>
        </div>
        <div className="w-1/2">
          <h3 className="text-xl font-primary font-semibold">Risk Heatmap</h3>
          <div className="w-fit pl-12">
            <RiskMatrix freqScore={freqScore} sevScore={sevScore} scaleUp={true} />
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold font-primary mt-8">Articles Referenced</h2>
      <ol className="list-decimal text-base list-inside my-4 font-secondary">
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
