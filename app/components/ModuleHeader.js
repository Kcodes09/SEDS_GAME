"use client";

export default function ModuleHeader({ title, onBack }) {
  return (
    <header className="relative mb-6 flex items-center px-2 py-3">

     
      <button
        onClick={onBack}
        className="text-sky-400 hover:underline text-base sm:text-lg px-2 py-1"
      >
        ← Back
      </button>

      
      <h2 className="
        absolute left-1/2 -translate-x-1/2 
        text-xl sm:text-3xl font-bold
        whitespace-nowrap text-center
      ">
        {title}
      </h2>

      
      <div className="w-12 sm:w-16"></div>
    </header>
  );
}
