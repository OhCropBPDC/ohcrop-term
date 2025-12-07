"use client";

import { motion } from "framer-motion";
import {
  FloatingShape,
  HolographicCard,
  MorphingBlob,
  ParticleField
} from "../components/CreativeEffects";
import VideoBackground from "../components/VideoBackground";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col font-sans overflow-x-hidden -mt-[76px]">
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="w-full min-h-screen relative flex items-center justify-center overflow-hidden">
        <VideoBackground 
          videoSrc="/video/trailer.mp4" 
          fallbackImage="/assets/hero-fallback.jpg"
          overlayOpacity={0.3}
        />
        
        {/* Particle Field Effect */}
        <ParticleField />
        
        
        {/* Floating Shapes - Reduced for performance */}
        <FloatingShape 
          delay={0} 
          duration={25} 
          size={350} 
          color="rgba(99, 102, 241, 0.06)" 
          initialX="10%" 
          initialY="20%" 
        />
        <FloatingShape 
          delay={3} 
          duration={28} 
          size={300} 
          color="rgba(236, 72, 153, 0.05)" 
          initialX="70%" 
          initialY="60%" 
        />
        
        {/* Morphing Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <MorphingBlob />
        </div>
        
        {/* Hero Text Content - Centered and Clean */}
        <div className="relative z-10 w-full h-full flex items-center justify-center px-6 md:px-8">
          <div className="max-w-6xl w-full text-center">
            {/* Small Badge */}
            <motion.div
              className="inline-flex items-center justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-sm md:text-base uppercase tracking-widest text-white font-semibold bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
                BITS Pilani Dubai Campus
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-6"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-4">
                <span className="inline-block" style={{ textShadow: "0 0 40px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6)" }}>
                  OH CROP
                </span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] mx-auto rounded-full" />
            </motion.div>

            {/* Subtitle */}
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/95 mb-8"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.7)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Design Club
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
              style={{ textShadow: "0 2px 15px rgba(0,0,0,0.8)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Where creativity meets innovation. Join our vibrant community of designers, artists, and creative minds.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a href="/eventss">
                <motion.button
                  className="group relative px-10 py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Events
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#EC4899]"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </a>
              
              <a href="/membership">
                <motion.button
                  className="px-10 py-5 bg-black/40 backdrop-blur-md text-white font-bold text-lg rounded-full border-2 border-white/40 hover:bg-black/60 hover:border-white/60 transition-all duration-300 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Community
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-2 h-2 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* WHAT IS OH CROP SECTION */}
      <section className="w-full bg-gradient-to-br from-[#1A1F3A] via-[#2D3561] to-[#1A1F3A] py-32 flex flex-col items-center px-4 md:px-0 relative overflow-hidden">
        {/* Animated background elements */}
        <FloatingShape 
          delay={1} 
          duration={18} 
          size={500} 
          color="rgba(99, 102, 241, 0.08)" 
          initialX="80%" 
          initialY="20%" 
        />
        <FloatingShape 
          delay={3} 
          duration={20} 
          size={400} 
          color="rgba(236, 72, 153, 0.08)" 
          initialX="10%" 
          initialY="70%" 
        />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white text-center cursor-target">
              What is Oh Crop?
            </h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] rounded-full mx-auto mb-12"
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 20px rgba(99, 102, 241, 0.5)",
                  "0 0 40px rgba(236, 72, 153, 0.7)",
                  "0 0 20px rgba(99, 102, 241, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <HolographicCard className="glass-card p-12 rounded-3xl mb-8 backdrop-blur-xl group">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="mb-6 text-2xl md:text-3xl text-gray-200 text-center max-w-4xl mx-auto leading-relaxed font-semibold">
                We are a community of creative minds who are passionate about design, technology, and visual storytelling.
              </p>
              <p className="text-gray-300 text-center font-medium text-xl">
                Join us if you share our passion for creativity and innovation!
              </p>
            </motion.div>
          </HolographicCard>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <a href="/membership" className="inline-block cursor-target group">
              <motion.button 
                className="relative gradient-pink text-white px-16 py-7 rounded-2xl shadow-2xl border border-white/20 transition-all duration-300 font-black text-2xl overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Join Our Community</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#EF4444]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ zIndex: 0 }}
                />
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(236, 72, 153, 0.5)",
                      "0 0 40px rgba(239, 68, 68, 0.7)",
                      "0 0 20px rgba(236, 72, 153, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE HAVE BEEN UP TO SECTION */}
      <section className="bg-gradient-to-br from-[#0A0E27] via-[#1A1F3A] to-[#0A0E27] py-32 flex flex-col items-center relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-white text-center drop-shadow-2xl cursor-target">
              What We've Been Up To
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#06B6D4] via-[#3B82F6] to-[#6366F1] rounded-full mx-auto mb-20" />
          </motion.div>
          
          <div className="flex gap-8 justify-center flex-wrap px-4">
            {/* Card 1 - Workshops */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="cursor-target group w-80 glass-card rounded-3xl shadow-2xl flex flex-col items-center relative overflow-hidden p-6 border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.img
                src="/assets/gallery/event1.jpg"
                alt="Workshops"
                className="mt-4 mb-6 w-full h-48 rounded-2xl object-cover shadow-xl relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
              <div className="w-full flex flex-col mt-2 relative z-10">
                <span className="text-3xl font-black bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-3">Workshops</span>
                <span className="text-lg text-gray-300 leading-relaxed font-medium">
                  Interactive sessions on web development, design tools, and creative technologies
                </span>
              </div>
            </motion.div>

            {/* Card 2 - Events */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="cursor-target group w-80 glass-card rounded-3xl shadow-2xl flex flex-col items-center relative overflow-hidden p-6 border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#EC4899]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.img
                src="/assets/gallery/event11.jpg"
                alt="Community Events"
                className="mt-4 mb-6 w-full h-48 rounded-2xl object-cover shadow-xl relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
              <div className="w-full flex flex-col mt-2 relative z-10">
                <span className="text-3xl font-black bg-gradient-to-r from-[#EC4899] to-[#F97316] bg-clip-text text-transparent mb-3">Events</span>
                <span className="text-lg text-gray-300 leading-relaxed font-medium">
                  Exciting gatherings, networking sessions, and creative collaborations
                </span>
              </div>
            </motion.div>

            {/* Card 3 - Projects */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="cursor-target group w-80 glass-card rounded-3xl shadow-2xl flex flex-col items-center relative overflow-hidden p-6 border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.img
                src="/assets/gallery/event15.jpg"
                alt="Projects"
                className="mt-4 mb-6 w-full h-48 rounded-2xl object-cover shadow-xl relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
              <div className="w-full flex flex-col mt-2 relative z-10">
                <span className="text-3xl font-black bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] bg-clip-text text-transparent mb-3">Projects</span>
                <span className="text-lg text-gray-300 leading-relaxed font-medium">
                  Collaborative creative projects and innovative experiments
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
