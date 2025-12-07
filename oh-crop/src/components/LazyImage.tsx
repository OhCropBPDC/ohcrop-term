'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

export default function LazyImage({ src, alt, className = '', width, height, style }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    const element = document.getElementById(`lazy-${src}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [src]);

  return (
    <div 
      id={`lazy-${src}`}
      className={`relative ${className}`}
      style={style}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
      )}
      {isInView && (
        width && height ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
        ) : (
          <img
            src={src}
            alt={alt}
            className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
        )
      )}
    </div>
  );
}
