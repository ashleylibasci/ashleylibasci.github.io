"use client";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import TerminalWindow from "../components/TerminalWindow";
import ScrambledLink from "../components/ScrambledLink"; // Import the scramble engine

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "user_profile.sys";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  const [maximizedWindow, setMaximizedWindow] = useState<"profile" | "skills" | null>(null);

  return (
    <>
      {!maximizedWindow && <Navigation />}

      <main className={maximizedWindow 
        ? "fixed inset-0 z-50 bg-cute-bg circuit-bg p-6 flex w-screen h-screen" 
        : "max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8"
      }>
          
          {/* Left Column: Identity Module Frame */}
          <div className={maximizedWindow === "profile" 
            ? "w-full h-full flex" 
            : maximizedWindow === "skills" 
              ? "hidden" 
              : "md:col-span-7 flex"
          }>
            <TerminalWindow 
              color="blue" 
              title={<span>{typedText}<span className="animate-pulse bg-white/40 w-1.5 h-3 inline-block ml-1 align-middle"></span></span>}
              isMaximized={maximizedWindow === "profile"}
              onMaximizeToggle={() => setMaximizedWindow(maximizedWindow === "profile" ? null : "profile")}
            >
                <div className="space-y-4">
                    <span className="text-xs uppercase tracking-widest font-bold text-neon-pink">System Identity Initialized</span>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-sans">
                        Ashley Libasci
                    </h1>
                    <p className="text-sm font-semibold text-neon-blue font-mono">
                        user@uiuc:~$ Mathematics & Computer Science
                    </p>
                    <div className="pt-4 space-y-2 text-zinc-300 text-sm font-sans leading-relaxed">
                        <p className="font-mono text-xs uppercase tracking-wider text-neon-pink/80">// Core Objective</p>
                        <p>I am a student at the University of Illinois at Urbana-Champaign pursuing a dual degree in Mathematics and Computer Science alongside a minor in Data Science. I am deeply driven by the challenge of bridging rigorous theoretical mathematics with practical software engineering—whether that means optimizing a data model, building secure enterprise infrastructure, or engineering end-to-end IoT frameworks.</p>
                        <p className="pt-2">Outside of school, I love running, spending time with my family and 2 dogs, and exploring new things and places.</p>
                    </div>
                </div>

                {/* Replaced with Interactive Cipher Decryption Links */}
                <div className="flex flex-wrap gap-2 text-[11px] font-bold font-mono pt-4 border-t border-white/10 mt-8">
                    <ScrambledLink 
                      href="https://github.com/ashleylibasci" 
                      target="_blank" 
                      text="GITHUB_REPOSITORY" 
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md hover:border-neon-blue text-neon-blue transition w-[160px] text-center"
                    />
                    <ScrambledLink 
                      href="https://linkedin.com/in/ashleylibasci/" 
                      target="_blank" 
                      text="LINKEDIN_SECURE" 
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md hover:border-neon-blue text-neon-blue transition w-[150px] text-center"
                    />
                    <ScrambledLink 
                      href="mailto:ashley@libasci.com" 
                      text="ASHLEY@LIBASCI.COM" 
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md hover:border-neon-pink text-neon-pink transition w-[180px] text-center"
                    />
                </div>
            </TerminalWindow>
          </div>

          {/* Right Column: Skills Terminal */}
          <div className={maximizedWindow === "skills" 
            ? "w-full h-full flex" 
            : maximizedWindow === "profile" 
              ? "hidden" 
              : "md:col-span-5 flex"
          }>
            <TerminalWindow 
              color="pink" 
              title="skills_index.sh"
              isMaximized={maximizedWindow === "skills"}
              onMaximizeToggle={() => setMaximizedWindow(maximizedWindow === "skills" ? null : "skills")}
            >
                <div className="space-y-6 flex-grow">
                    <div className="space-y-1">
                        <h3 className="text-xs font-bold font-mono text-neon-blue uppercase tracking-wider">{"> core_languages/"}</h3>
                        <p className="text-sm font-sans text-zinc-300 pl-4 border-l border-neon-blue/30">Java, Python, C++, Kotlin</p>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-xs font-bold font-mono text-neon-blue uppercase tracking-wider">{"> frameworks_cloud/"}</h3>
                        <p className="text-sm font-sans text-zinc-300 pl-4 border-l border-neon-blue/30">React, Node.js, Next.js, Node-RED, WordPress, Blynk, MQTT</p>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-xs font-bold font-mono text-neon-blue uppercase tracking-wider">{"> systems_tools/"}</h3>
                        <p className="text-sm font-sans text-zinc-300 pl-4 border-l border-neon-blue/30">Git, GitHub, VS Code, Xcode, Linux, Arduino IDE, Wireshark, Anaconda</p>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-xs font-bold font-mono text-neon-blue uppercase tracking-wider">{"> analytics_theory/"}</h3>
                        <p className="text-sm font-sans text-zinc-300 pl-4 border-l border-neon-blue/30">Data analysis, statistical modeling, runtime optimization, discrete mathematical structures</p>
                    </div>
                </div>
                <div className="text-[10px] font-mono text-white/30 text-right pt-2 border-t border-white/5 mt-6">
                    STATUS: SECURE // ENV: PROD
                </div>
            </TerminalWindow>
          </div>

      </main>
    </>
  );
}