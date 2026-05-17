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
                  
                  {/* 1. Intro to CS I Honors */}
                  <a 
                    href="https://courses.illinois.edu/schedule/terms/CS/124"
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 bg-white/5 border border-white/10 hover:border-neon-blue hover:bg-white/[0.07] transition rounded-xl space-y-2 block relative group"
                  >
                      <span className="absolute top-4 right-5 text-xs font-mono text-white/20 group-hover:text-neon-blue transition">↗</span>
                      <span className="text-xs font-mono font-bold text-neon-pink">{"> CS | Kotlin"}</span>
                      <h3 className="text-lg font-bold text-white font-sans group-hover:underline decoration-neon-blue">Intro to CS I Honors</h3>
                      <p className="text-sm text-zinc-300 font-sans leading-relaxed">Object-oriented paradigms, structured logic layouts, error handling, and system assembly design.</p>
                  </a>

                  {/* 2. Intro to CS II */}
                  <a 
                    href="https://courses.illinois.edu/schedule/terms/CS/128"
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 bg-white/5 border border-white/10 hover:border-neon-blue hover:bg-white/[0.07] transition rounded-xl space-y-2 block relative group"
                  >
                      <span className="absolute top-4 right-5 text-xs font-mono text-white/20 group-hover:text-neon-blue transition">↗</span>
                      <span className="text-xs font-mono font-bold text-neon-pink">{"> CS | Systems"}</span>
                      <h3 className="text-lg font-bold text-white font-sans group-hover:underline decoration-neon-blue">Intro to CS II</h3>
                      <p className="text-sm text-zinc-300 font-sans leading-relaxed">Advanced language paradigms, operational complexity constraints, sorting efficiency, and data encapsulation.</p>
                  </a>

                  {/* 3. CS 173: Discrete Structures */}
                  <a 
                    href="https://courses.illinois.edu/schedule/terms/CS/173"
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 bg-white/5 border border-white/10 hover:border-neon-blue hover:bg-white/[0.07] transition rounded-xl space-y-2 block relative group"
                  >
                      <span className="absolute top-4 right-5 text-xs font-mono text-white/20 group-hover:text-neon-blue transition">↗</span>
                      <span className="text-xs font-mono font-bold text-neon-pink">{"> Theory | Math"}</span>
                      <h3 className="text-lg font-bold text-white font-sans group-hover:underline decoration-neon-blue">CS 173: Discrete Structures</h3>
                      <p className="text-sm text-zinc-300 font-sans leading-relaxed">Logical induction patterns, function/relation analysis, graph theory principles, combinatorics, and proofs.</p>
                  </a>

                  {/* 4. Data Science Discovery */}
                  <a 
                    href="https://discovery.cs.illinois.edu/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 bg-white/5 border border-white/10 hover:border-neon-blue hover:bg-white/[0.07] transition rounded-xl space-y-2 block relative group"
                  >
                      <span className="absolute top-4 right-5 text-xs font-mono text-white/20 group-hover:text-neon-blue transition">↗</span>
                      <span className="text-xs font-mono font-bold text-neon-pink">{"> Data Science"}</span>
                      <h3 className="text-lg font-bold text-white font-sans group-hover:underline decoration-neon-blue">Data Science Discovery</h3>
                      <p className="text-sm text-zinc-300 font-sans leading-relaxed">Data mining patterns, processing large-scale tables, introduction to statistical learning algorithms.</p>
                  </a>

                  {/* 5. Higher Mathematics Honors */}
                  <a 
                    href="https://courses.illinois.edu/schedule/terms/MATH/347"
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 bg-white/5 border border-white/10 hover:border-neon-blue hover:bg-white/[0.07] transition rounded-xl space-y-2 block relative group"
                  >
                      <span className="absolute top-4 right-5 text-xs font-mono text-white/20 group-hover:text-neon-blue transition">↗</span>
                      <span className="text-xs font-mono font-bold text-neon-pink">{"> Math Honors"}</span>
                      <h3 className="text-lg font-bold text-white font-sans group-hover:underline decoration-neon-blue">Higher Mathematics Honors</h3>
                      <p className="text-sm text-zinc-300 font-sans leading-relaxed">Rigorous logic systems, foundational set definitions, abstract mathematical deduction, and theorem writing.</p>
                  </a>

                  {/* 6. Calculus III */}
                  <a 
                    href="https://courses.illinois.edu/schedule/terms/MATH/241"
                    target="_blank"
                    rel="noreferrer"
                    className="p-5 bg-white/5 border border-white/10 hover:border-neon-blue hover:bg-white/[0.07] transition rounded-xl space-y-2 block relative group"
                  >
                      <span className="absolute top-4 right-5 text-xs font-mono text-white/20 group-hover:text-neon-blue transition">↗</span>
                      <span className="text-xs font-mono font-bold text-neon-pink">{"> Calculus Honors"}</span>
                      <h3 className="text-lg font-bold text-white font-sans group-hover:underline decoration-neon-blue">Calculus III</h3>
                      <p className="text-sm text-zinc-300 font-sans leading-relaxed">Multivariable systems, partial derivatives, vector structures, and volume integration models over spatial fields.</p>
                  </a>

              </div>
          </TerminalWindow>
      </main>
    </>
  );
}