"use client";
import { useState, ReactNode } from "react";
import { useDock } from "./DockContext";

interface TerminalWindowProps {
  title: ReactNode;
  color: "pink" | "blue";
  children: ReactNode;
  isMaximized?: boolean;
  onMaximizeToggle?: () => void;
}

export default function TerminalWindow({ title, color, children, isMaximized = false, onMaximizeToggle }: TerminalWindowProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const { minimize } = useDock();

  const glowClass = color === "pink" ? "neon-glow-pink" : "neon-glow-blue";
  const titleColor = color === "pink" ? "text-neon-pink" : "text-neon-blue";
  const borderColor = color === "pink" ? "border-neon-pink/30" : "border-neon-blue/30";
  const hoverBorder = color === "pink" ? "hover:border-neon-pink" : "hover:border-neon-blue";
  
  // Create a clean lookup ID string for the dock slots
  const windowId = typeof title === "string" ? title : "user_profile_sys";

  const handleMinimize = () => {
    setIsMinimized(true);
    if (isMaximized && onMaximizeToggle) onMaximizeToggle();
    
    // Register item to the central dock bar manager
    minimize({
      id: windowId,
      title: typeof title === "string" ? title : "user_profile.sys",
      color,
      onRestore: () => setIsMinimized(false)
    });
  };

  if (!isOpen) {
    return (
      <div 
        onClick={() => setIsOpen(true)}
        className={`flex items-center justify-center border-2 border-dashed ${borderColor} bg-terminal-dark/50 rounded-2xl p-6 cursor-pointer hover:bg-terminal-dark ${hoverBorder} transition group h-32 w-full`}
      >
        <span className={`text-xs font-mono ${titleColor} group-hover:animate-pulse`}>
          {"> ./run system_recovery.sh to restore"}
        </span>
      </div>
    );
  }

  return (
    <section 
      className={`bg-terminal-dark text-white flex flex-col transition-all duration-300 relative overflow-hidden h-full w-full
        ${isMaximized 
          ? 'rounded-none border-none p-8 m-0' 
          : `rounded-2xl p-6 ${glowClass}`
        }
        ${isMinimized ? 'hidden pointer-events-none scale-95 opacity-0' : 'scale-100 opacity-100'}`}
    >
      
      {/* Header Controls */}
      <div className="flex items-center justify-between group/header z-20 border-b border-white/10 pb-4 mb-6">
        <div className="flex space-x-2">
          {/* Close - Red */}
          <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-[#FF5F56] flex items-center justify-center transition-opacity hover:opacity-80" title="Close">
            <span className="text-[8px] leading-none text-[#4c0000] font-black opacity-0 group-hover/header:opacity-100 transition-opacity">✕</span>
          </button>
          
          {/* Minimize - Yellow */}
          <button 
            onClick={handleMinimize} 
            className="w-3 h-3 rounded-full bg-[#FFBD2E] flex items-center justify-center transition-opacity hover:opacity-80" 
            title="Minimize"
          >
            <span className="text-[8px] leading-none text-[#5c4300] font-black opacity-0 group-hover/header:opacity-100 transition-opacity">−</span>
          </button>
          
          {/* Maximize/Toggle Fullscreen - Green */}
          <button 
            onClick={onMaximizeToggle} 
            className="w-3 h-3 rounded-full bg-[#27C93F] flex items-center justify-center transition-opacity hover:opacity-80" 
            title={isMaximized ? "Exit Fullscreen" : "Fullscreen"}
          >
            <span className="text-[8px] leading-[8px] text-[#004d00] font-black opacity-0 group-hover/header:opacity-100 transition-opacity inline-block pb-[1px]">
              {isMaximized ? "⤢" : "＋"}
            </span>
          </button>
        </div>
        <span className={`text-xs font-mono ${titleColor}`}>{title}</span>
      </div>

      {/* Body Content */}
      <div className="animate-in fade-in duration-500 h-full flex flex-col justify-between z-10 relative overflow-y-auto">
        {children}
      </div>
    </section>
  );
}