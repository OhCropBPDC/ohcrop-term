"use client";

import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Membership", href: "/membership" }
];

export default function Navbar() {
  return (
    <nav className="w-full bg-[#2D2D2D] text-white flex items-center px-6 py-3 justify-between">
      <div className="flex items-center gap-2">
        <Image src="/assets/ohcrop.png" alt="OhCrop Logo" width={32} height={32} />
        <span className="font-bold text-lg">OhCrop</span>
      </div>
      <div className="flex gap-6">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="hover:underline">
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
