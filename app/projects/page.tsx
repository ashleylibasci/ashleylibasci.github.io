"use client";
import { useState } from "react";
import Navigation from "../../components/Navigation";
import TerminalWindow from "../../components/TerminalWindow";

export default function Projects() {
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <>
      {!isMaximized && <Navigation />}

      <main className={isMaximized 
        ? "fixed inset-0 z-50 bg-cute-bg circuit-bg p-6 flex w-screen h-screen" 
        : "max-w-4xl mx-auto px-6 py-12"
      }>
          <TerminalWindow 
            color="pink" 
            title="ls repositories/"
            isMaximized={isMaximized}
            onMaximizeToggle={() => setIsMaximized(!isMaximized)}
          >
              {/* Enforces readable, clean width spacing when maximized */}
              <div className="max-w-3xl mx-auto w-full py-4 space-y-8 flex-grow">
                  <div className="space-y-8 pt-4">
                      
                      {/* AI Engine */}
                      <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-3 relative hover:border-neon-pink transition">
                          <span className="absolute top-4 right-6 text-xs font-mono text-neon-blue cursor-pointer hover:underline">[view source]</span>
                          <p className="text-xs font-mono font-bold text-neon-pink">{"> Course Project | CS I Honors"}</p>
                          <h3 className="text-xl font-extrabold text-white font-sans">AI Stock Recommendation Engine</h3>
                          <p className="text-sm text-zinc-300 font-sans leading-relaxed pt-2">
                              Developed a full-stack automated engine utilizing predictive data arrays to output asset recommendations based on customizable risk boundaries and financial market sectors. Built using Next.js framework architectures. Validated statistical accuracy using historic back-testing scripts and presented optimization workflows to faculty panels.
                          </p>
                          <div className="flex gap-2 text-xs font-mono font-bold text-neon-blue pt-3">
                              <span className="px-2 py-1 bg-neon-blue/10 rounded border border-neon-blue/30">Next.js</span>
                              <span className="px-2 py-1 bg-neon-blue/10 rounded border border-neon-blue/30">Predictive Modeling</span>
                          </div>
                      </div>

                      {/* Empty State */}
                      <div className="p-12 border border-dashed border-white/20 rounded-xl text-center space-y-3">
                          <h4 className="text-lg font-bold text-white font-sans">System Awaiting Upload...</h4>
                          <p className="text-sm text-zinc-400 font-sans max-w-sm mx-auto leading-relaxed">Currently assembling code structures from algorithmic optimizations, memory matrices, and system security scripts.</p>
                      </div>
                      
                  </div>
              </div>
          </TerminalWindow>
      </main>
    </>
  );
}