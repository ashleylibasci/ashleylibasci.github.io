import type { Metadata } from "next";
import "./globals.css";
import { DockProvider } from "../components/DockContext";
import TerminalCLI from "../components/TerminalCLI"; // Import the overlay

export const metadata: Metadata = {
  title: "Ashley Libasci Portfolio",
  description: "Math & CS Dual Degree Portfolio",
  verification: {
    google: "qkCUAXmsCO2W3VbPlkEwXn5R2ZOc2pV6fNUIE6n2-gI",
  },
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