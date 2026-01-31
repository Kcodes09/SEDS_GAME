"use client";

import { useRouter } from "next/navigation";

import ModuleHeader from "../../components/ModuleHeader";
import SectionBox from "../../components/SectionBox";
import TriviaList from "../../components/TriviaList";
import CompletionBox from "../../components/CompletionBox";

import data from "../../data/hyperion.json";

export default function Hyperion() {
  const router = useRouter();

  return (
    <main className="flex flex-col justify-center text-center p-6">
      <ModuleHeader
        title={data.title}
        onBack={() => router.push("/")}
      />

      <SectionBox title="Story">
        <p className="text-gray-300">{data.story}</p>
      </SectionBox>

      <SectionBox title="Trivia">
         <TriviaList
  questions={data.questions}
  title={data.title}
  badge="Orbital Researcher"
  nextModule="/modules/janus"
/>
      </SectionBox>

  

    </main>
  );
}
