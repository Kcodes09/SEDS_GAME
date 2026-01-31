"use client";

export default function CompletionBox({ title, badge, onNext }) {
  return (
    <div className="p-6 bg-gray-800 border border-gray-700 rounded-xl text-center max-w-md mx-auto mt-10 shadow-lg">
      
      {/* Badge Icon */}
      <div className="text-5xl mb-4">🏆</div>

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-2">Module Completed!</h2>
      <p className="text-gray-300 mb-4">
        You finished: <span className="font-semibold">{title}</span>
      </p>

      {/* Earned Badge */}
      <div className="bg-gray-700 text-gray-200 py-3 rounded-lg mb-6 border border-gray-600">
        <p className="text-lg font-semibold">Badge Earned:</p>
        <p className="text-xl mt-1">{badge}</p>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium"
      >
        Continue
      </button>
    </div>
  );
}

