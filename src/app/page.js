import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import RiskMatrix from "@/components/RiskMatrix";
import MainReport from "@/components/MainReport";
import RiskEntry from "@/components/RiskEntry";

export default function Home() {
  const freqScore = 3; // Example score, replace with actual data
  const sevScore = 5; // Example score, replace with actual data

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="flex float-right justify-end h-[90.3vh] w-3/4 items-center px-8 pt-52 overflow-y-scroll">
        <div className="w-full flex flex-col">
          <p className="text-2xl font-primary font-semibold">3 results found for “cybersecurity”</p>
          <RiskEntry />
          <RiskEntry />
          <RiskEntry />
          <RiskEntry />
        </div>
        {/* <MainReport /> */}
      </main>
    </div>
  );
}
