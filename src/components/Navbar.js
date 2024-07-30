// import Link from "next/link";
import { repopulateDb } from "@/helpers/MaizeyApiCall";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center sticky top-0 z-50 p-4 bg-primary-blue text-white">
      <p className="text-3xl font-primary text-white font-semibold">Risk Intelligence Dashboard</p>
      <button className="border px-2 py-1 rounded-md" onClick={()=>repopulateDb()}>Repopulate Database</button>
    </nav>
  );
}
