import type { Metadata } from "next";
import "./globals.css";
import { DockProvider } from "../components/DockContext";
import TerminalCLI from "../components/TerminalCLI"; // Import the overlay

export const metadata: Metadata = {
  title: "Ashley Libasci Portfolio",
  description: "Math & CS Dual Degree Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DockProvider>
          <TerminalCLI /> {/* Injected globally here */}
          {children}
        </DockProvider>
      </body>
    </html>
  );
}