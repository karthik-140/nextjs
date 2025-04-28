"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div className="p-6">
      <h1>About</h1>
      <button
        className="p-2 font-bold text-white bg-amber-600 rounded"
        onClick={() => router.push("/")}
      >
        Go Home
      </button>
    </div>
  );
}
