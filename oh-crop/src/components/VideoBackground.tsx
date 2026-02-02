"use client";

import { memo, useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  videoSrc: string;
  fallbackImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

const VideoBackground = memo(function VideoBackground({
  videoSrc,
  fallbackImage = "",
  overlay = true,
  overlayOpacity = 0.5,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reduced timeout - show content after 1.5 seconds
    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    const handleCanPlay = () => {
      setIsLoaded(true);
      clearTimeout(fallbackTimer);
    };

    const handleLoadedData = () => {
      setIsLoaded(true);
      clearTimeout(fallbackTimer);
    };

    const handleError = () => {
      setIsLoaded(true);
      clearTimeout(fallbackTimer);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    // Try to play immediately
    video.play().catch(() => {
      // Autoplay blocked, continue anyway
    });

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-900">
      {/* Loading placeholder - simplified */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 z-10" />
      )}

      {/* Audio Control Button */}
      {isLoaded && (
        <button
          onClick={toggleMute}
          className="absolute bottom-8 right-8 z-50 bg-black/50 backdrop-blur-md text-white p-3 rounded-full hover:bg-black/70 transition-colors duration-200 border border-white/20"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>
      )}

      {/* Video Element - Optimized */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{ 
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
          zIndex: 1,
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Static Overlays - No animations for better performance */}
      <div className="absolute inset-0 bg-black/30" style={{ zIndex: 2 }} />
      
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"
          style={{ opacity: overlayOpacity, zIndex: 2 }}
        />
      )}

      {/* Static vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.3) 100%)",
          opacity: 0.5,
          zIndex: 2
        }}
      />
    </div>
  );
});

export default VideoBackground;
