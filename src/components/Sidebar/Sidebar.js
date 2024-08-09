"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setMinLikelihood,
  setMinSeverity,
  addTopic,
  addAllTopics,
  removeAllTopics,
  removeTopic,
  clearFilters,
} from "@/lib/filtersSlice";
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
  "NIL",
  "Physical Security Threat",
  "Policy",
  "Prop 2",
  "Residential Life",
  "Safety",
  "Sexual Misconduct",
  "Succession Planning",
  "Third Parties",
  "Title IX",
  "Workforce Management",
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const [selectAllState, setSelectAllState] = useState(false);

  const handleCheckboxChange = (topic) => {
    if (!filters.topics.includes(topic)) {
      // Add topic to list
      dispatch(addTopic(topic));
    } else {
      // Remove topic from list
      dispatch(removeTopic(topic));
    }
  };

  const handleSelectAll = () => {
    if (selectAllState) {
      dispatch(removeAllTopics());
      setSelectAllState(false);
    } else {
      dispatch(addAllTopics(topicsList));
      setSelectAllState(true);
    }
  };

  const handleClearFilters = () => {
    setSelectAllState(false);
    dispatch(clearFilters());
  };

  return (
    <div className="fixed overflow-y-scroll h-[90.3vh] w-1/4 border bg-white shadow-sm px-4 py-2">
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-lg font-primary font-bold">Filters</h1>
        <button
          onClick={handleClearFilters}
          className="border rounded-md border-matrix-yellow text-matrix-yellow px-2 py-1 hover:bg-matrix-yellow hover:text-white duration-75"
        >
          Reset Filters
        </button>
      </div>
      <h1 className="text-base font-primary mt-2">Minimum Impact Severity</h1>
      <Slider value={filters.minSeverity} valueUpdateAction={setMinSeverity} />
      <h1 className="text-base font-primary mt-2">Minimum Impact Likelihood</h1>
      <Slider
        value={filters.minLikelihood}
        valueUpdateAction={setMinLikelihood}
      />
      <h1 className="text-lg font-primary font-bold mt-2">Topics</h1>
      <div className="mt-2">
        <div key="Select all" className="flex items-center mb-4">
          <input
            type="checkbox"
            id="Select All"
            checked={selectAllState}
            onChange={handleSelectAll}
            className="mr-2"
          />
          <label
            htmlFor="Select All"
            className="font-primary font-semibold text-sm"
          >
            Select All
          </label>
        </div>
        {topicsList.map((topic, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={topic}
              checked={filters.topics.includes(topic)}
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
