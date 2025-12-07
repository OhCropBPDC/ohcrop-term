"use client";

import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  videoSrc: string;
  fallbackImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

export default function VideoBackground({
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

    // Fallback timeout - show content after 3 seconds even if video hasn't loaded
    const fallbackTimer = setTimeout(() => {
      console.log('Video timeout - showing content anyway');
      setIsLoaded(true);
    }, 3000);

    const handleCanPlay = () => {
      setIsLoaded(true);
      clearTimeout(fallbackTimer);
      console.log('Video can play');
    };

    const handleLoadedData = () => {
      setIsLoaded(true);
      clearTimeout(fallbackTimer);
      console.log('Video loaded data');
    };

    const handleError = (e: any) => {
      console.error('Video error:', e);
      setIsLoaded(true); // Show content even if video fails
      clearTimeout(fallbackTimer);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    // Force video to start loading
    video.load();

    // Try to play after a short delay
    const playTimer = setTimeout(() => {
      video.play().catch((err) => {
        console.log('Autoplay prevented:', err);
      });
    }, 100);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      clearTimeout(playTimer);
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
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
            <p className="text-white text-sm">Loading video...</p>
          </div>
        </div>
      )}

      {/* Audio Control Button - Simplified */}
      {isLoaded && (
        <button
          onClick={toggleMute}
          className="absolute bottom-8 right-8 z-50 bg-black/50 backdrop-blur-md text-white p-3 rounded-full hover:bg-black/70 transition-colors duration-200 border border-white/20"
          style={{ willChange: 'transform' }}
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
        preload="auto"
        style={{ 
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
          zIndex: 1,
          willChange: 'opacity'
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Simplified Overlays - Static for better performance */}
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
}
