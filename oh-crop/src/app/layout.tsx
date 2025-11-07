import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TargetCursor from "../components/TargetCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oh Crop",
  description: "Connecting Our Community - Oh Crop Club",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#F6E0B5] min-h-screen flex flex-col">
        <TargetCursor targetSelector=".cursor-target" />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
