import { Inter } from "next/font/google";
import "./globals.css";
import Particles from "./components/Particles";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "SEDS_ARCHIVE GAME",
  description: "A game on the history of SEDS-BPHC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-gray-950 text-slate-200 antialiased relative min-h-screen`}
      >

        {/* FULLSCREEN PARTICLES */}
        <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
          <Particles
            particleCount={570}
            particleSpread={12}
            speed={1.04}
            particleColors={["#ffffff", "#ffffff", "#ffffff"]}
            moveParticlesOnHover={true}
            particleHoverFactor={1.4}
            alphaParticles
            particleBaseSize={270}
            sizeRandomness={0.5}
            cameraDistance={8}
            disableRotation
          />
        </div>

        {/* PAGE CONTENT */}
        <main className="relative z-10 min-h-screen pb-10">
          {children}
        </main>

      </body>
    </html>
  );
}
