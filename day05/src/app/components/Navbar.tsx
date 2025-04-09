import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6">
      <h1 className="text-3xl font-bold text-slate-200">
        <Link href="/">WikiRocket!</Link>
      </h1>
      <Search />
    </nav>
  );
}
