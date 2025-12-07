"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

interface SocialLinks {
  instagram?: string;
  linkedin?: string;
  github?: string;
}

interface CouncilMemberCardProps {
  name: string;
  info: string;
  color?: "orange" | "blue";
  videoSrc?: string;
  imageSrc?: string;
  socialLinks?: SocialLinks;
  objectPosition?: string;
  objectFit?: "cover" | "contain"; // Add object-fit option
  videoScale?: number; // Add custom scale for each video
}

export default function CouncilMemberCard({
  name,
  info,
  color,
  videoSrc,
  imageSrc,
  socialLinks = {},
  objectPosition = "center",
  objectFit = "cover",
  videoScale = 1.0, // Default to no scaling
}: CouncilMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Start as false for SSR
  const [isMounted, setIsMounted] = useState(false); // Track client-side mount
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Autoplay video when component mounts on client
  useEffect(() => {
    if (isMounted && videoRef.current && videoSrc) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      }).then(() => {
        setIsPlaying(true);
      });
    }
  }, [videoSrc, isMounted]);

  const togglePlayPause = (e: React.MouseEvent) => {
    e.preventDefault();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  return (
    <motion.div
      className="relative group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Main card container */}
      <motion.div
        className="relative w-80 h-[560px] rounded-3xl overflow-hidden shadow-2xl
          max-sm:w-[90vw] max-sm:max-w-[380px] max-sm:h-[580px]"
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ willChange: 'transform' }}
        onClick={videoSrc ? togglePlayPause : undefined}
      >
        {/* Video/Image container */}
        <div className="absolute inset-0">
          {videoSrc ? (
            <>
              {/* Show image first, then video after mount */}
              {!isMounted && imageSrc && (
                <img
                  src={imageSrc}
                  alt={`${name} photo`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition }}
                />
              )}
              {isMounted && (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  style={{ 
                    objectPosition: objectPosition,
                    transform: `scale(${videoScale})`,
                  }}
                  loop
                  muted
                  playsInline
                  poster={imageSrc}
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              )}
            </>
          ) : imageSrc ? (
            <img
              src={imageSrc}
              alt={`${name} photo`}
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ objectPosition }}
            />
          ) : null}
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          {/* Animated overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Corner accent lines */}
        <motion.div
          className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/60 rounded-tl-xl"
          animate={{
            scale: isHovered ? 1.1 : 1,
            borderColor: isHovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.6)",
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/60 rounded-br-xl"
          animate={{
            scale: isHovered ? 1.1 : 1,
            borderColor: isHovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.6)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
          {/* Role badge */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/30 rounded-full">
              <p className="text-xs font-bold text-white tracking-widest uppercase">
                {info}
              </p>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h3
            className="font-black text-4xl text-white mb-1 drop-shadow-2xl tracking-tight max-sm:text-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {name}
          </motion.h3>

          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mb-6"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : "60px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          {/* Social links */}
          {Boolean(
            socialLinks.instagram || socialLinks.linkedin || socialLinks.github
          ) && (
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {socialLinks.instagram && (
                <motion.a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group/icon relative"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl blur opacity-0 group-hover/icon:opacity-70 transition-opacity duration-300" />
                  <div className="relative bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 
                    group-hover/icon:bg-white/20 group-hover/icon:border-white/40 transition-all duration-300">
                    <FaInstagram size={20} className="text-white" />
                  </div>
                </motion.a>
              )}
              {socialLinks.linkedin && (
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group/icon relative"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl blur opacity-0 group-hover/icon:opacity-70 transition-opacity duration-300" />
                  <div className="relative bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 
                    group-hover/icon:bg-white/20 group-hover/icon:border-white/40 transition-all duration-300">
                    <FaLinkedin size={20} className="text-white" />
                  </div>
                </motion.a>
              )}
              {socialLinks.github && (
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group/icon relative"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl blur opacity-0 group-hover/icon:opacity-70 transition-opacity duration-300" />
                  <div className="relative bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 
                    group-hover/icon:bg-white/20 group-hover/icon:border-white/40 transition-all duration-300">
                    <FaGithub size={20} className="text-white" />
                  </div>
                </motion.a>
              )}
            </motion.div>
          )}
        </div>

        {/* Play/Pause indicator */}
        {videoSrc && (
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isPlaying ? 0 : 1, scale: isPlaying ? 0.8 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border-2 border-white/40">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {isPlaying ? (
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                ) : (
                  <path d="M8 5v14l11-7z" />
                )}
              </svg>
            </div>
          </motion.div>
        )}

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-white/20 pointer-events-none"
          animate={{
            borderColor: isHovered ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)",
            boxShadow: isHovered
              ? "0 0 30px rgba(139,92,246,0.3), 0 0 60px rgba(236,72,153,0.2)"
              : "0 0 0px rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
