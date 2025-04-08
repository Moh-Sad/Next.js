import Link from "next/link";

export default function About() {
  return (
    <>
    <h1 className="flex items-center justify-center h-[100vh] text-3xl">
      Hello World!
    </h1>
    <Link href="/about">Go to About Page</Link>
    </>
  );
}
