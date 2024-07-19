"use client";
import React from 'react';

const RiskDetails = ({ riskRanking, impactFrequency, impactSeverity }) => {
  return (
    <div className="flex justify-around my-8">
      <div className="text-center">
        <p className="text-3xl font-bold">{riskRanking}</p>
        <p className="text-xl">Risk Ranking</p>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold">{impactFrequency}/5</p>
        <p className="text-xl">Impact Frequency</p>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold">{impactSeverity}/5</p>
        <p className="text-xl">Impact Severity</p>
      </div>
    </div>
  );
};

export default RiskDetails;
