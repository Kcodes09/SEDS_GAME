"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const modules = [
    { name: "Introduction", link: "/modules/intro" },
    { name: "Team Artemis", link: "/modules/artemis" },
    { name: "Team Janus", link: "/modules/janus" },
    { name: "Team Hyperion", link: "/modules/hyperion" },
    { name: "Team Archangel", link: "/modules/archangel" }
  ];

  return (
    <main className="flex flex-col items-center text-center p-6">
      
      {/* CENTERED HEADER WITH LOGO */}
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/seds_logo_w.png"
          alt="SEDS Logo"
          width={120}
          height={120}
          className="mb-4"
        />
        <h1 className="text-4xl font-bold">SEDS Archive</h1>
      </div>

      <p className="text-gray-300 mb-6">Choose a module to begin:</p>

      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
        {modules.map((mod, idx) => (
          <button
            key={idx}
            onClick={() => router.push(mod.link)}
            className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700 transition"
          >
            {mod.name}
          </button>
        ))}
      </div>
    </main>
  );
}
