"use client";

import { useRouter } from "next/navigation";

import ModuleHeader from "../../components/ModuleHeader";
import SectionBox from "../../components/SectionBox";
import TriviaList from "../../components/TriviaList";
import CompletionBox from "../../components/CompletionBox";

import data from "../../data/archangel.json";

export default function Archangel() {
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
  badge="Propulsion Innovator"
  nextModule="/modules/hyperion"
/>
      </SectionBox>

     

    </main>
  );
}
