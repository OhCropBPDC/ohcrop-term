"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/eventss" },
  { label: "Membership", href: "/membership" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-[#2D2D2D] text-white flex items-center px-8 py-4 justify-between shadow-2xl relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EA4B19]/5 to-transparent"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <Link href="/" className="relative z-10 flex items-center gap-3 cursor-target group">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Image src="/assets/ohcrop.png" alt="OhCrop Logo" width={45} height={45} className="drop-shadow-lg" />
        </motion.div>
        <motion.span 
          className="font-black text-2xl tracking-tight"
          whileHover={{ scale: 1.05, color: "#F6C05C" }}
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
              className="cursor-target relative font-bold text-base group"
            >
              <motion.span
                className="relative inline-block"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-[#EA4B19] to-[#F6C05C] group-hover:w-full transition-all duration-300 ease-out" />
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}
