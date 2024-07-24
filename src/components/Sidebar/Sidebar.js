"use client";
import React, { useState } from "react";
import Slider from "./Slider";

const topicsList = [
  "2023: Top Risks",
  "2024: Top Risks",
  "AI",
  "Compliance",
  "Coronavirus",
  "Crisis Management",
  "Cryptocurrency",
  "Culture",
  "Cybersecurity",
  "Data Privacy",
  "Emerging",
  "ESG",
  "Geopolitical",
  "Mental Health",
];

const Sidebar = ({ selectedTopics, setSelectedTopics }) => {
  const handleCheckboxChange = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((item) => item !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  return (
    <div className="fixed overflow-y-scroll h-[90.3vh] w-1/4 border bg-white shadow-sm px-4 py-2">
      <h1 className="text-lg font-primary font-bold mt-2">Impact Severity</h1>
      <Slider />
      <h1 className="text-lg font-primary font-bold mt-2">Impact Frequency</h1>
      <Slider />
      <h1 className="text-lg font-primary font-bold mt-2">Topics</h1>
      <div className="mt-2">
        {topicsList.map((topic, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={topic}
              checked={selectedTopics.includes(topic)}
              onChange={() => handleCheckboxChange(topic)}
              className="mr-2"
            />
            <label htmlFor={topic} className="font-primary text-sm">
              {topic}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
