"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import RiskMatrix from "@/components/RiskMatrix";
import MainReport from "@/components/MainReport";
import RiskEntry from "@/components/RiskEntry";
import { useState } from "react";

export default function Home() {
  const freqScore = 3; // Example score, replace with actual data
  const sevScore = 5; // Example score, replace with actual data
  const [resultClicked, setresultClicked] = useState(true);
  const [selectedTopics, setSelectedTopics] = useState([]);

  return (
    <div>
      <Navbar />
      <Sidebar selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics} />
      <main className="flex float-right justify-end h-[90.3vh] w-3/4 items-center  overflow-y-scroll">
        <div className={`${resultClicked ? 'w-1/2':'w-full'} h-[90.3vh] overflow-y-scroll pt-6 flex pl-8 flex-col`}>
          <p className="text-2xl font-primary font-semibold">
            {selectedTopics.length > 0 ? (
              <span>Selected topics: {selectedTopics.join(', ')}</span>
            ) : (
              <span>3 results found for “cybersecurity”</span>
            )}
          </p>
          <RiskEntry resultClicked={resultClicked} />
          <RiskEntry resultClicked={resultClicked} />
          <RiskEntry resultClicked={resultClicked} />
          <RiskEntry resultClicked={resultClicked} />
        </div>
        {resultClicked && <MainReport />}
      </main>
    </div>
  );
}
