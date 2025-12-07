import type { Metadata } from "next";
import Footer from "../components/Footer";
import InitialLoader from "../components/InitialLoader";
import Navbar from "../components/Navbar";
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
      <body className="bg-[#0A0E27] min-h-screen flex flex-col antialiased">
        <InitialLoader />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
