"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim() === "") return;
    router.push(`/${search}`);
  };

  return (
    <form
      className="w-50 flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            type="submit"
        >
            Search
        </button>
    </form>
  );
}
