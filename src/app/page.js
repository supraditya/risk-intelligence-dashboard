import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import RiskMatrix from "@/components/RiskMatrix";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <RiskMatrix freqScore={1} sevScore={5}/>
      </main>
    </div>
  );
}
