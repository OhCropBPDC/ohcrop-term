'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Faster loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 20; // Faster increments
      });
    }, 100); // Faster interval

    // Shorter loader duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Reduced from 2000ms to 1000ms

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Static background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          <div className="relative flex flex-col items-center gap-8 z-10">
            {/* Simplified animated logo */}
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Simplified glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />

              {/* Logo */}
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-2xl border-4 border-white/30">
                <img
                  src="/assets/ohcrop.png"
                  alt="OhCrop Logo"
                  className="w-16 h-16 object-contain drop-shadow-lg"
                  style={{ filter: 'brightness(1.1) contrast(1.1)' }}
                />
              </div>
            </motion.div>

            {/* Brand name */}
            <motion.div
              className="text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold text-white mb-2">Oh Crop</h1>
              <p className="text-white/70 text-sm">Design Club</p>
            </motion.div>

            {/* Progress bar */}
            <div className="w-64">
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <motion.p
                className="text-white/60 text-xs text-center mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {progress}%
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
