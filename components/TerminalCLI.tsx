"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function TerminalCLI() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "AshleyOS v2.0.0 initialized.",
    "Type 'help' for a list of available systemic vectors.",
    ""
  ]);
  
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // 1. Global Key Listener for the Backtick (`) toggle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-focus input line when CLI mounts
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keep terminal container scrolled to the bottom line
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = input.trim().toLowerCase();
    if (!cleanInput) return;

    const newHistory = [...history, `user@ashley:~$ ${input}`];

    // 2. Command Processing Matrix
    switch (cleanInput) {
      case "help":
        newHistory.push(
          "Available Commands:",
          "  ls             - List available structural paths / view directories",
          "  cd <page>      - Navigate (e.g., 'cd education', 'cd projects', 'cd home')",
          "  cat resume     - Force-open current PDF resume configuration",
          "  clear          - Flush terminal logs and lines",
          "  exit           - Close the global system console overlay"
        );
        break;
      case "ls":
        newHistory.push("directories/  home/  education/  experience/  coursework/  projects/");
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "exit":
        setIsOpen(false);
        setInput("");
        return;
      case "cat resume":
        newHistory.push("Opening secure transport thread to resume.pdf...");
        window.open("/resume.pdf", "_blank");
        break;
      case "cd home":
      case "cd /":
        router.push("/");
        setIsOpen(false);
        break;
      case "cd education":
        router.push("/education");
        setIsOpen(false);
        break;
      case "cd experience":
        router.push("/experience");
        setIsOpen(false);
        break;
      case "cd coursework":
        router.push("/coursework");
        setIsOpen(false);
        break;
      case "cd projects":
        router.push("/projects");
        setIsOpen(false);
        break;
      default:
        newHistory.push(`bash: command not found: ${input}. Type 'help' for configurations.`);
    }

    setHistory(newHistory);
    setInput("");
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-x-0 top-0 h-80 bg-terminal-dark/95 backdrop-blur-lg border-b-2 border-neon-blue/40 z-[9999] p-6 font-mono text-xs text-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-top duration-300"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Console Display Screen */}
      <div className="overflow-y-auto space-y-1 flex-grow pr-2 custom-scrollbar">
        {history.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap leading-relaxed text-zinc-300">
            {line}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Prompt Execution Line */}
      <form onSubmit={handleCommandSubmit} className="flex items-center pt-4 border-t border-white/10 mt-2">
        <span className="text-neon-blue font-bold mr-2">user@ashley:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent text-white outline-none flex-grow border-none focus:ring-0 p-0 font-mono text-xs"
          placeholder="type commands here... (or press ` to exit)"
          maxLength={50}
        />
      </form>
    </div>
  );
}