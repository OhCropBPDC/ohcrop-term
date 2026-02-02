"use client";

import { motion } from "framer-motion";
import { memo, useMemo } from "react";

interface FloatingShapeProps {
  delay?: number;
  duration?: number;
  size?: number;
  color?: string;
  initialX?: string;
  initialY?: string;
}

// Memoized and optimized FloatingShape
export const FloatingShape = memo(function FloatingShape({
  delay = 0,
  duration = 25,
  size = 200,
  color = "rgba(99, 102, 241, 0.1)",
  initialX = "0%",
  initialY = "0%",
}: FloatingShapeProps) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={{
        width: size,
        height: size,
        background: color,
        left: initialX,
        top: initialY,
      }}
      animate={{
        x: [0, 50, -50, 0],
        y: [0, -50, 50, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    />
  );
});

// Heavily optimized ParticleField - reduced to 8 particles
export const ParticleField = memo(function ParticleField() {
  const particles = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

export function GlitchText({ children, className = "" }: { children: string; className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute top-0 left-0 text-[#6366F1] opacity-70"
        animate={{
          x: [-2, 2, -2],
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 text-[#EC4899] opacity-70"
        animate={{
          x: [2, -2, 2],
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatType: "mirror",
          delay: 0.2,
        }}
      >
        {children}
      </motion.span>
    </div>
  );
}

// Simplified and optimized MorphingBlob
export const MorphingBlob = memo(function MorphingBlob() {
  return (
    <motion.div
      className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-15 pointer-events-none"
      style={{
        background: "linear-gradient(45deg, #6366F1, #8B5CF6, #EC4899)",
      }}
      animate={{
        scale: [1, 1.08, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
});

export function ScanLine() {
  return (
    <motion.div
      className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#6366F1] to-transparent pointer-events-none z-50"
      style={{ boxShadow: "0 0 20px #6366F1" }}
      animate={{
        top: ["-2px", "100%"],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 3,
      }}
    />
  );
}

// Simplified and optimized HolographicCard
export const HolographicCard = memo(function HolographicCard({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string 
}) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
});
