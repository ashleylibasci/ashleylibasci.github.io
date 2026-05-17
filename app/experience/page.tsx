"use client";
import { useState } from "react";
import Navigation from "../../components/Navigation";
import TerminalWindow from "../../components/TerminalWindow";

export default function Experience() {
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
            title="work_history.log"
            isMaximized={isMaximized}
            onMaximizeToggle={() => setIsMaximized(!isMaximized)}
          >
              {/* Internal container to enforce readable spacing in full screen */}
              <div className="max-w-3xl mx-auto w-full py-4 space-y-8 flex-grow">
                  
                  {/* MIT Beaver Works */}
                  <div className="relative pl-6 border-l border-neon-pink/40 group">
                      <div className="absolute w-2 h-2 bg-neon-pink rounded-full -left-[4.5px] top-1.5"></div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                          <h3 className="text-xl font-extrabold text-white font-sans">MIT Beaver Works Summer Institute</h3>
                          <span className="text-xs font-mono text-neon-blue">June 2024 — July 2024</span>
                      </div>
                      <p className="text-sm text-neon-pink font-bold font-mono mt-1">{"> Student Intern (Remote)"}</p>
                      <ul className="text-sm text-zinc-300 mt-4 list-disc list-outside pl-4 space-y-2 leading-relaxed font-sans">
                          <li>Selected for a highly competitive cybersecurity tract centering on applied security modeling, defensive configurations, and binaries engineering.</li>
                          <li>Operated packet analysis software (Wireshark) alongside binary exploitation tools (Ghidra, AFL fuzz testing) and data steganography wrappers (OpenStego).</li>
                          <li>Evaluated vector footprints for cross-site scripting (XSS), interactive credential phishing, and hardware side-channel analysis exploiting AES leakage functions.</li>
                          <li>Analyzed vulnerabilities in industrial Internet of Things ecosystems and studied deep learning deployments within corporate threat recognition systems.</li>
                      </ul>
                  </div>

                  {/* Northwestern IoT */}
                  <div className="relative pl-6 border-l border-neon-blue/40 group pt-6">
                      <div className="absolute w-2 h-2 bg-neon-blue rounded-full -left-[4.5px] top-[30px]"></div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                          <h3 className="text-xl font-extrabold text-white font-sans">Northwestern Internet of Things</h3>
                          <span className="text-xs font-mono text-neon-pink">June 2023 — July 2023</span>
                      </div>
                      <p className="text-sm text-neon-blue font-bold font-mono mt-1">{"> Computer Engineer (Chicago, IL)"}</p>
                      <ul className="text-sm text-zinc-300 mt-4 list-disc list-outside pl-4 space-y-2 leading-relaxed font-sans">
                          <li>Built functional, integrated IoT devices encompassing mechanical prototype assembly, custom hardware integration, and cloud broker interfaces.</li>
                          <li>Drafted wiring flow schematics and developed native firmware environments for Particle Argon microcontrollers in C++.</li>
                          <li>Programmed secure socket transport connections over cellular, Wi-Fi, Bluetooth Low Energy (BLE), and lightweight MQTT client queues.</li>
                          <li>Constructed localized physical sensor matrices delivering sub-second real-time metrics map updates to custom data storage APIs.</li>
                          <li>Appointed Capstone Team Lead to coordinate five technical peers, distributing logic and assembly benchmarks to fulfill final operational criteria.</li>
                      </ul>
                  </div>

              </div>
          </TerminalWindow>
      </main>
    </>
  );
}