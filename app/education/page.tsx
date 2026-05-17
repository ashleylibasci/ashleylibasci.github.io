"use client";
import { useState } from "react";
import Navigation from "../../components/Navigation";
import TerminalWindow from "../../components/TerminalWindow";

export default function Education() {
  // Track layout state: null, "university", or "highschool"
  const [maximizedWindow, setMaximizedWindow] = useState<"university" | "highschool" | null>(null);

  return (
    <>
      {/* Hide navigation menu when maximized */}
      {!maximizedWindow && <Navigation />}

      <main className={maximizedWindow 
        ? "fixed inset-0 z-50 bg-cute-bg circuit-bg p-6 flex w-screen h-screen" 
        : "max-w-4xl mx-auto px-6 py-12 space-y-8"
      }>
          
          {/* University Container */}
          <div className={maximizedWindow === "university" 
            ? "w-full h-full flex" 
            : maximizedWindow === "highschool" 
              ? "hidden" 
              : "w-full"
          }>
            <TerminalWindow 
              color="blue" 
              title="university_data.sys"
              isMaximized={maximizedWindow === "university"}
              onMaximizeToggle={() => setMaximizedWindow(maximizedWindow === "university" ? null : "university")}
            >
                <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                        <h2 className="text-2xl font-extrabold text-white font-sans">University of Illinois at Urbana-Champaign</h2>
                        <span className="text-xs font-mono text-neon-blue">Aug. 2025 — May 2029</span>
                    </div>
                    <p className="text-sm text-neon-pink font-bold font-mono">{"> Dual Degree in Math and Computer Science, Minor in Data Science"}</p>
                    
                    <div className="space-y-4 text-sm text-zinc-300 font-sans leading-relaxed">
                        <p><span className="font-bold text-white">Activities:</span> Delta Delta Delta Sorority member.</p>
                        <div className="pt-2">
                            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue block mb-1">// Academic Timeline & Goals</span>
                            <p>Currently accelerating standard course tracks with the objective of completing both undergraduate degrees and the Data Science minor requirements within a compressed three-year window (graduating May 2028). Planning to transition directly into an advanced Master of Science in Computer Science (MCS) program during the fourth academic year.</p>
                        </div>
                    </div>
                </div>
            </TerminalWindow>
          </div>

          {/* High School Container */}
          <div className={maximizedWindow === "highschool" 
            ? "w-full h-full flex" 
            : maximizedWindow === "university" 
              ? "hidden" 
              : "w-full"
          }>
            <TerminalWindow 
              color="pink" 
              title="secondary_edu.sys"
              isMaximized={maximizedWindow === "highschool"}
              onMaximizeToggle={() => setMaximizedWindow(maximizedWindow === "highschool" ? null : "highschool")}
            >
                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                        <h2 className="text-2xl font-extrabold text-white font-sans">Glenbrook South High School</h2>
                        <span className="text-xs font-mono text-white/50">Graduated 2025</span>
                    </div>
                    
                    <div className="space-y-6 text-sm text-zinc-300 font-sans leading-relaxed">
                        <div className="border-l border-neon-pink/40 pl-4 space-y-1">
                            <h3 className="font-bold text-white">Science Engineering Learning Community</h3>
                            <p className="text-xs font-mono text-neon-pink">Project Lead and Lab Aid | Jan 2022 — May 2025 (Glenview, IL)</p>
                            <ul className="list-disc list-inside space-y-1 pt-2">
                                <li>Oversaw and guided peer engineering teams through four consecutive annual hardware installations.</li>
                                <li>Diagnosed and resolved critical technical design friction within student firmware, software, and electronic setups.</li>
                            </ul>
                        </div>

                        <div className="border-l border-neon-pink/40 pl-4 space-y-1">
                            <h3 className="font-bold text-white">High School Athletics</h3>
                            <p>Track & Field & Cross Country competing member for 4 consecutive years. Elected Varsity Team Captain.</p>
                        </div>
                    </div>
                </div>
            </TerminalWindow>
          </div>
      </main>
    </>
  );
}