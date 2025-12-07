"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function CreativeBackground() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate consistent random positions for dots
  const dotPositions = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      left: ((i * 37) % 100),
      top: ((i * 73) % 100),
      duration: 3 + ((i * 19) % 40) / 10,
      delay: ((i * 23) % 50) / 10,
    }));
  }, []);

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Floating geometric shapes
  const shapes = [
    // Triangles
    { type: "triangle", color: "border-purple-400/20", size: 80, top: "10%", left: "5%", delay: 0 },
    { type: "triangle", color: "border-pink-400/20", size: 60, top: "70%", right: "10%", delay: 2 },
    { type: "triangle", color: "border-blue-400/20", size: 100, top: "40%", left: "85%", delay: 4 },
    
    // Squares
    { type: "square", color: "bg-orange-500/10", size: 70, top: "25%", right: "15%", delay: 1 },
    { type: "square", color: "bg-purple-500/10", size: 90, top: "60%", left: "12%", delay: 3 },
    { type: "square", color: "bg-pink-500/10", size: 50, top: "85%", right: "25%", delay: 5 },
    
    // Circles
    { type: "circle", color: "border-cyan-400/20", size: 120, top: "15%", left: "75%", delay: 1.5 },
    { type: "circle", color: "border-yellow-400/20", size: 80, top: "50%", right: "5%", delay: 2.5 },
    { type: "circle", color: "border-green-400/20", size: 60, top: "80%", left: "40%", delay: 4.5 },
    
    // Lines
    { type: "line", color: "bg-indigo-400/30", top: "30%", left: "20%", delay: 0.5 },
    { type: "line", color: "bg-rose-400/30", top: "65%", right: "30%", delay: 3.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,105,180,0.15),transparent_50%),radial-gradient(circle_at_40%_60%,rgba(59,130,246,0.1),transparent_50%)]" />

      {/* Dynamic gradient orbs with mouse parallax */}
      <motion.div
        className="absolute top-20 left-20 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
          willChange: 'transform'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)",
          x: mousePosition.x * -1.5,
          y: mousePosition.y * -1.5,
          willChange: 'transform'
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating geometric shapes */}
      {shapes.map((shape, i) => {
        const baseStyle: any = {
          position: "absolute",
          ...(shape.top && { top: shape.top }),
          ...(shape.left && { left: shape.left }),
          ...(shape.right && { right: shape.right }),
        };

        if (shape.type === "triangle") {
          return (
            <motion.div
              key={i}
              style={baseStyle}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 15 + shape.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: shape.delay,
              }}
            >
              <div
                className={`border-4 ${shape.color}`}
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: `${(shape.size ?? 40) / 2}px solid transparent`,
                  borderRight: `${(shape.size ?? 40) / 2}px solid transparent`,
                  borderBottom: `${shape.size ?? 40}px solid currentColor`,
                }}
              />
            </motion.div>
          );
        }

        if (shape.type === "square") {
          return (
            <motion.div
              key={i}
              className={`${shape.color} backdrop-blur-sm`}
              style={{
                ...baseStyle,
                width: shape.size,
                height: shape.size,
                borderRadius: "20%",
                willChange: 'transform'
              }}
              initial={{ opacity: 0, rotate: 0 }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, 90, 0],
                scale: [1, 1.2, 1],
                x: [-10, 10, -10],
              }}
              transition={{
                duration: 12 + shape.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: shape.delay,
              }}
            />
          );
        }

        if (shape.type === "circle") {
          return (
            <motion.div
              key={i}
              className={`border-4 ${shape.color} rounded-full backdrop-blur-sm`}
              style={{
                ...baseStyle,
                width: shape.size,
                height: shape.size,
                willChange: 'transform'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.15, 1],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 14 + shape.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: shape.delay,
              }}
            />
          );
        }

        if (shape.type === "line") {
          return (
            <motion.div
              key={i}
              className={`${shape.color} rounded-full`}
              style={{
                ...baseStyle,
                width: "150px",
                height: "4px",
                willChange: 'transform'
              }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scaleX: [0.5, 1.2, 0.5],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 10 + shape.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: shape.delay,
              }}
            />
          );
        }

        return null;
      })}

      {/* Animated grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          y: y1,
        }}
      />

      {/* Flowing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M 0 300 Q 400 200 800 300 T 1600 300"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.5, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.path
          d="M 0 600 Q 600 500 1200 600 T 2400 600"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.5, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </svg>

      {/* Scattered dots with consistent positions */}
      {isMounted && dotPositions.map((dot, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            willChange: 'transform'
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.6, 0],
            y: [-20, 20],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}

      {/* Rotating rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ rotate }}
      >
        <div className="relative w-[800px] h-[800px] max-sm:w-[400px] max-sm:h-[400px]">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute inset-0 rounded-full border border-white/5"
              style={{
                width: `${100 - i * 15}%`,
                height: `${100 - i * 15}%`,
                margin: "auto",
                willChange: 'transform'
              }}
              animate={{
                rotate: i % 2 === 0 ? 360 : -360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Corner accents */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-500/50 to-transparent" />
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-pink-500/50 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-1 bg-gradient-to-t from-pink-500/50 to-transparent" />
      </motion.div>
    </div>
  );
}
