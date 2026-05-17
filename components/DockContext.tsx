"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface MinimizedItem {
  id: string;
  title: string;
  color: "pink" | "blue";
  onRestore: () => void;
}

interface DockContextType {
  minimizedItems: MinimizedItem[];
  minimize: (item: MinimizedItem) => void;
  restore: (id: string) => void;
}

const DockContext = createContext<DockContextType | undefined>(undefined);

export function DockProvider({ children }: { children: ReactNode }) {
  const [minimizedItems, setMinimizedItems] = useState<MinimizedItem[]>([]);

  const minimize = (item: MinimizedItem) => {
    // Add to dock slots if not already registered
    setMinimizedItems((prev) => [...prev.filter((i) => i.id !== item.id), item]);
  };

  const restore = (id: string) => {
    // Drop from array queue (CSS Flexbox automatically shifts subsequent items left)
    setMinimizedItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <DockContext.Provider value={{ minimizedItems, minimize, restore }}>
      {children}
      
      {/* Centralized Shared macOS Dock Array */}
      {minimizedItems.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-terminal-dark/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3 shadow-2xl animate-in slide-in-from-bottom-8 duration-300">
          {minimizedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                item.onRestore();
                restore(item.id);
              }}
              className={`px-4 py-2 rounded-xl bg-terminal-dark/50 border border-white/5 flex items-center space-x-3 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 active:scale-95 text-xs font-mono font-bold
                ${item.color === "pink" ? "neon-glow-pink text-neon-pink" : "neon-glow-blue text-neon-blue"}`}
            >
              <div className="flex space-x-1">
                <span className="w-2 h-2 rounded-full bg-[#FF5F56]/30"></span>
                <span className="w-2 h-2 rounded-full bg-[#FFBD2E]"></span>
                <span className="w-2 h-2 rounded-full bg-[#27C93F]/30"></span>
              </div>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      )}
    </DockContext.Provider>
  );
}

export function useDock() {
  const context = useContext(DockContext);
  if (!context) throw new Error("useDock must be used within a DockProvider");
  return context;
}