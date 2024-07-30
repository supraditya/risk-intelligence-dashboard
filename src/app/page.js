"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import MainReport from "@/components/MainReport";
import RiskEntry from "@/components/RiskEntry";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRiskData } from "@/lib/selectedRiskSlice";

export default function Home() {
  const { items, loading, error, selected } = useSelector((state) => state.risk);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRiskData());
  }, [dispatch]);

  const sampleRiskData = [
    {
      id: "1",
      title: "National healthcare databases are compromised",
      tags: ["Cybersecurity", "Healthcare", "Data Breach"],
      risk_ranking: "1",
      sevScore: 3,
      freqScore: 5,
      summary:
        "This is a very long, if not unnecessarily long description of what this issue means exactly. If it were to be realized, healthcare would be inaccessible to many people, and the world would be a much sadder.",
      regions: [
        "cn",
        "in",
        "us",
        "id",
        "pk",
        "br",
        "ng",
        "bd",
        "ru",
        "mx",
      ],
      references: [
        {
          title: "Cybersecurity and Infrastructure Security Agency",
          link: "https://www.cisa.gov/",
        },
        {
          title: "Healthcare and Public Health Sector",
          link: "https://www.cisa.gov/healthcare-public-health-sector",
        },
      ],
    },
    {
      id: "2",
      title: "Sample Risk Entry 2",
      tags: ["Tag1", "Tag2", "Tag3"],
      risk_ranking: "2",
      sevScore: 4,
      freqScore: 2,
      summary: "This is a sample summary for risk entry 2.",
      regions: ["us", "ca", "uk"],
      references: [
        {
          title: "Reference 1",
          link: "https://www.example.com/reference1",
        },
        {
          title: "Reference 2",
          link: "https://www.example.com/reference2",
        },
      ],
    },
    {
      id: "3",
      title: "Sample Risk Entry 3",
      tags: ["Tag4", "Tag5", "Tag6"],
      risk_ranking: "3",
      sevScore: 1,
      freqScore: 3,
      summary: "This is a sample summary for risk entry 3.",
      regions: ["au", "nz", "jp"],
      references: [
        {
          title: "Reference 3",
          link: "https://www.example.com/reference3",
        },
        {
          title: "Reference 4",
          link: "https://www.example.com/reference4",
        },
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <Sidebar
        selectedTopics={selectedTopics}
        setSelectedTopics={setSelectedTopics}
      />
      <main className="flex float-right justify-end h-[90.3vh] w-3/4 items-center overflow-y-hidden">
        <div
          className={`${
            selected ? "w-1/2 px-4" : "w-full pl-8"
          } h-[90.3vh] overflow-y-scroll pt-6 flex  flex-col`}
        >
          <p className="text-2xl font-primary font-semibold">
            {selectedTopics.length > 0 ? (
              <span>Selected topics: {selectedTopics.join(", ")}</span>
            ) : (
              <span>3 results found for “cybersecurity”</span>
            )}
          </p>
            {sampleRiskData.map((data, index) => (
              <RiskEntry key={index} data={data} />
            ))}
        </div>
        {selected && <MainReport />}
      </main>
    </div>
  );
}
