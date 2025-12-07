"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/eventss" },
  { label: "Membership", href: "/membership" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 w-full text-white flex items-center px-8 py-4 justify-between z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#1A1F3A]/95 backdrop-blur-xl shadow-2xl border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      {/* Gradient overlay - only visible when scrolled */}
      <div className={`absolute inset-0 bg-gradient-to-r from-[#6366F1]/10 via-transparent to-[#EC4899]/10 transition-opacity duration-300 ${
        scrolled ? "opacity-100" : "opacity-0"
      }`} />
      
      <Link href="/" className="relative z-10 flex items-center gap-3 cursor-target group">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[#6366F1] rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
          <Image src="/assets/ohcrop.png" alt="OhCrop Logo" width={45} height={45} className="drop-shadow-2xl relative z-10" />
        </motion.div>
        <motion.span 
          className="font-black text-2xl tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          OhCrop
        </motion.span>
      </Link>
      
      <div className="relative z-10 flex gap-8">
        {navItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link 
              href={item.href} 
              className="cursor-target relative font-semibold text-base group"
            >
              <motion.span
                className="relative inline-block text-gray-200 group-hover:text-white transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] group-hover:w-full transition-all duration-300 ease-out" />
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}
