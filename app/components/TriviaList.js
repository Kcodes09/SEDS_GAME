"use client";

import { useState } from "react";
import CompletionBox from "../components/CompletionBox"; // adjust path

export default function TriviaList({ questions, title, badge, nextModule }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [completed, setCompleted] = useState(false);

  const current = questions[index];

  const handleSelect = (optIndex) => {
    setSelected(optIndex);
    setIsCorrect(optIndex === current.answer);
  };

  const nextQuestion = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
      setSelected(null);
      setIsCorrect(null);
      setShowHint(false);
    } else {
      setCompleted(true);
    }
  };

  if (completed) {
    return (
      <CompletionBox
        title={title}
        badge={badge}
        onNext={() => {
          if (nextModule) window.location.href = nextModule;
        }}
      />
    );
  }

  return (
    <div className="p-4 bg-gray-700 rounded-lg border border-gray-600 max-w-xl mx-auto">
      <p className="font-semibold mb-3">
        Question {index + 1} of {questions.length}
      </p>

      <p className="text-lg">{current.question}</p>

      <ul className="mt-4 space-y-2">
        {current.options.map((opt, i) => {
          const isSelected = i === selected;
          let bg = "bg-gray-600";

          if (isSelected && isCorrect) bg = "bg-green-600";
          if (isSelected && isCorrect === false) bg = "bg-red-600";

          return (
            <li
              key={i}
              onClick={() => handleSelect(i)}
              className={`p-3 rounded cursor-pointer transition ${bg}`}
            >
              {opt}
            </li>
          );
        })}
      </ul>

      {/* Hint Button */}
      <button
        onClick={() => setShowHint(!showHint)}
        className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
      >
        {showHint ? "Hide Hint" : "Show Hint"}
      </button>

      {showHint && (
        <p className="mt-3 text-sm text-gray-300">
          <span className="font-semibold">Hint:</span> {current.hint}
        </p>
      )}

      {/* Next Button */}
      {selected !== null && (
        <button
          onClick={nextQuestion}
          className="mt-4 ml-2 px-4 py-2 bg-gray-800 rounded border border-gray-600 hover:bg-gray-600"
        >
          Next
        </button>
      )}
    </div>
  );
}
