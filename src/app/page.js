"use client";
import Image from "next/image";
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

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="flex float-right justify-end h-[90.3vh] w-3/4 items-center  overflow-y-scroll">
        <div className={`${resultClicked ? 'w-1/2 h-[90.3vh] pt-6 overflow-y-scroll':'w-full pt-[21rem]'} flex pl-8 flex-col`}>
          <p className="text-2xl font-primary font-semibold">
            3 results found for “cybersecurity”
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
