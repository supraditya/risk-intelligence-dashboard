"use client";
import React from 'react';

const RiskDetails = ({ riskRanking, impactFrequency, impactSeverity }) => {
  return (
    <div className="flex justify-around my-8 space-x-4">
      <div className="text-center">
        <p className="text-3xl font-primary font-bold">#{riskRanking}</p>
        <p className="text-xl font-primary">Risk Ranking</p>
      </div>
      <div className="text-center">
        <p className="text-3xl font-primary font-bold">{impactFrequency}/5</p>
        <p className="text-xl font-primary">Impact Frequency</p>
      </div>
      <div className="text-center">
        <p className="text-3xl font-primary font-bold">{impactSeverity}/5</p>
        <p className="text-xl font-primary">Impact Severity</p>
      </div>
    </div>
  );
};

export default RiskDetails;
