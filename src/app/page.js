import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      </main>
    </div>
  );
}
