"use client";
import { useState, useEffect, useRef } from "react";

interface ScrambledLinkProps {
  href: string;
  text: string;
  className?: string;
  target?: string;
}

export default function ScrambledLink({ href, text, className = "", target }: ScrambledLinkProps) {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789@#$%&+={}/<>*_";
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScramble = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((letter, index) => {
            // If the letter is a space, keep it as a space
            if (letter === " ") return " ";
            // Gradually lock in the correct letters from left to right
            if (index < iteration) return text[index];
            // Otherwise, spit out a random cipher character
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current!);
      }

      iteration += 1 / 2; // Controls the speed of the decryption reveal
    }, 25);
  };

  const stopScramble = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  // Clean up timers if the user switches pages rapidly
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  return (
    <a
      href={href}
      target={target}
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
      className={className}
    >
      {displayText}
    </a>
  );
}