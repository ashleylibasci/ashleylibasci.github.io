"use client";
import { useState } from "react";
import Navigation from "../../components/Navigation";
import TerminalWindow from "../../components/TerminalWindow";

export default function Coursework() {
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <>
      {!isMaximized && <Navigation />}

      <main className={isMaximized 
        ? "fixed inset-0 z-50 bg-cute-bg circuit-bg p-6 flex w-screen h-screen" 
        : "max-w-4xl mx-auto px-6 py-12"
      }>
          <TerminalWindow 
            color="blue" 
            title="course_database.sql"
            isMaximized={isMaximized}
            onMaximizeToggle={() => setIsMaximized(!isMaximized)}
          >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {/* Courses */}
                  <div className="p-5 bg-white/5 border border-white/10 hover:border-neon-blue transition rounded-xl space-y-2">
                      <span className="text-xs font-mono font-bold text-neon-pink">{"> CS | Kotlin"}</span>
                      <h3 className="text-lg font-bold text-white font-sans">Intro to CS I Honors</h3>
                      <p className="text-sm text-zinc-300 font-sans leading-relaxed">Object-oriented paradigms, structured logic layouts, error handling, and system assembly design.</p>
                  </div>
                  <div className="p-5 bg-white/5 border border-white/10 hover:border-neon-blue transition rounded-xl space-y-2">
                      <span className="text-xs font-mono font-bold text-neon-pink">{"> CS | Systems"}</span>
                      <h3 className="text-lg font-bold text-white font-sans">Intro to CS II</h3>
                      <p className="text-sm text-zinc-300 font-sans leading-relaxed">Advanced language paradigms, operational complexity constraints, sorting efficiency, and data encapsulation.</p>
                  </div>
                  <div className="p-5 bg-white/5 border border-white/10 hover:border-neon-blue transition rounded-xl space-y-2">
                      <span className="text-xs font-mono font-bold text-neon-pink">{"> Theory | Math"}</span>
                      <h3 className="text-lg font-bold text-white font-sans">CS 173: Discrete Structures</h3>
                      <p className="text-sm text-zinc-300 font-sans leading-relaxed">Logical induction patterns, function/relation analysis, graph theory principles, combinatorics, and proofs.</p>
                  </div>
                  <div className="p-5 bg-white/5 border border-white/10 hover:border-neon-blue transition rounded-xl space-y-2">
                      <span className="text-xs font-mono font-bold text-neon-pink">{"> Data Science"}</span>
                      <h3 className="text-lg font-bold text-white font-sans">Data Science Discovery</h3>
                      <p className="text-sm text-zinc-300 font-sans leading-relaxed">Data mining patterns, processing large-scale tables, introduction to statistical learning algorithms.</p>
                  </div>
                  <div className="p-5 bg-white/5 border border-white/10 hover:border-neon-blue transition rounded-xl space-y-2">
                      <span className="text-xs font-mono font-bold text-neon-pink">{"> Math Honors"}</span>
                      <h3 className="text-lg font-bold text-white font-sans">Higher Mathematics Honors</h3>
                      <p className="text-sm text-zinc-300 font-sans leading-relaxed">Rigorous logic systems, foundational set definitions, abstract mathematical deduction, and theorem writing.</p>
                  </div>
                  <div className="p-5 bg-white/5 border border-white/10 hover:border-neon-blue transition rounded-xl space-y-2">
                      <span className="text-xs font-mono font-bold text-neon-pink">{"> Calculus Honors"}</span>
                      <h3 className="text-lg font-bold text-white font-sans">Calculus III</h3>
                      <p className="text-sm text-zinc-300 font-sans leading-relaxed">Multivariable systems, partial derivatives, vector structures, and volume integration models over spatial fields.</p>
                  </div>
              </div>
          </TerminalWindow>
      </main>
    </>
  );
}