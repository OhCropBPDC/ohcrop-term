import type { Metadata } from "next";
import React, { Suspense } from "react";
import Footer from "../components/Footer";
import InitialLoader from "../components/InitialLoader";
import "./globals.css";
const BubbleMenu = React.lazy(() => import("../components/BubbleMenu"));

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
        <Suspense fallback={null}>
          <BubbleMenu
            logo={<img src="/assets/ohcrop.png" alt="OhCrop Logo" style={{ width: 48, height: 48, borderRadius: '50%' }} />}
            items={[
              { label: "Home", href: "/", ariaLabel: "Home", rotation: -8, hoverStyles: { bgColor: "#6366F1", textColor: "#fff" } },
              { label: "About", href: "/about", ariaLabel: "About", rotation: 8, hoverStyles: { bgColor: "#ea4b19", textColor: "#fff" } },
              { label: "Events", href: "/eventss", ariaLabel: "Events", rotation: 8, hoverStyles: { bgColor: "#efca72", textColor: "#fff" } },
              { label: "Membership", href: "/membership", ariaLabel: "Membership", rotation: -8, hoverStyles: { bgColor: "#7b97ad", textColor: "#fff" } },
              { label: "Gallery", href: "/gallery", ariaLabel: "Gallery", rotation: 8, hoverStyles: { bgColor: "#8B5CF6", textColor: "#fff" } },
            ]}
            useFixedPosition={true}
            menuBg="#1A1F3A"
            menuContentColor="#fff"
          />
        </Suspense>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
