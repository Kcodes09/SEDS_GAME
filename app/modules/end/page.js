"use client";

import Link from "next/link";

export default function EndModule() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 max-w-xl w-full shadow-lg">
        
        <div className="text-6xl mb-4">🚀</div>

        <h1 className="text-3xl font-bold mb-4">Congratulations!</h1>

        <p className="text-gray-300 mb-6 leading-relaxed">
          You have successfully completed the entire SEDS Publicity Game.
          <br /><br />
          You've learned about the club’s history, our rocket missions,
          satellite teams, research & development work, and the collaborative 
          spirit that drives SEDS forward.
        </p>

       
        <div className="bg-gray-700 p-4 rounded-lg border border-gray-600 mb-6">
          <p className="text-lg font-semibold mb-2">Badges Earned:</p>
          <ul className="space-y-1">
            <li>🏅 SEDS Initiate</li>
            <li>🏅 Launch Architect</li>
            <li>🏅 Propulsion Innovator</li>
            <li>🏅 Orbital Researcher</li>
            <li>🏅 Mission Systems Engineer</li>
          </ul>
        </div>

     
        <div className="bg-gray-900 p-5 rounded-lg border border-gray-700 mb-6">
          <h2 className="text-xl font-semibold mb-2">Join SEDS!</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Interested in rockets, satellites, aerospace engineering, or building 
            hands-on technical projects?  
            <br /><br />
            SEDS is open to students from all departments — Mechanical, CS, ECE, 
            Physics, Biology, and more. Whether you're a beginner or experienced, 
            there’s always a place for you here.  
            <br /><br />
            Join us, learn real engineering, build exciting projects, and work 
            with one of the most active technical teams on campus.
          </p>
        </div>

  
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-5 py-2 bg-blue-600 rounded hover:bg-blue-500"
          >
            Return to Home
          </Link>

          <Link
            href="/modules/intro"
            className="px-5 py-2 bg-gray-700 border border-gray-500 rounded hover:bg-gray-600"
          >
            Play Again
          </Link>
        </div>

      </div>
    </div>
  );
}
