'use client';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
      {/* Simplified background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-6 z-10">
        {/* Logo with subtle animation */}
        <motion.div
          className="relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ willChange: 'transform' }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-50" />
          
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-2xl border-4 border-white/20">
            <span className="text-4xl font-bold text-white">OC</span>
          </div>
        </motion.div>

        {/* Loading text */}
        <p className="text-white text-xl font-semibold">Loading Experience</p>

        {/* Bouncing dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-white"
              animate={{
                y: [0, -12, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.12,
                ease: "easeInOut"
              }}
              style={{ willChange: 'transform, opacity' }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-56 h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 rounded-full"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ width: "50%", willChange: 'transform' }}
          />
        </div>
      </div>
    </div>
  );
}
