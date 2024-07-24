// page.js
"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import MainReport from "@/components/MainReport";
import RiskEntry from "@/components/RiskEntry";
import { useState } from "react";

export default function Home() {
  const [resultClicked, setResultClicked] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Perform search logic here and update searchResults state
    const results = [
      // Example data, replace with your actual data
      { id: 1, title: "National healthcare databases are compromised" },
      { id: 2, title: "Electromagnetic pulse weapons become mainstream" },
      { id: 3, title: "Payroll suffers from ransomware attack" }
    ].filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
  };

  const handleClear = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <div>
      <Navbar />
      <Sidebar onSearch={handleSearch} onClear={handleClear} />
      <main className="flex float-right justify-end h-[90.3vh] w-3/4 items-center overflow-y-scroll">
        <div className={`${resultClicked ? 'w-1/2 h-[90.3vh] pt-6 overflow-y-scroll':'w-full pt-[21rem]'} flex pl-8 flex-col`}>
          <p className="text-2xl font-primary font-semibold">
            {searchResults.length} results found for “{searchQuery}”
          </p>
          {searchResults.map(result => (
            <RiskEntry key={result.id} resultClicked={resultClicked} />
          ))}
        </div>
        {resultClicked && <MainReport />}
      </main>
    </div>
  );
}
