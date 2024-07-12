// create a nextjs navbar component
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-start p-4 bg-primary-blue text-white">
      <p className="text-3xl font-primary text-white font-semibold">Risk Intelligence Dashboard</p>
    </nav>
  );
}
