import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Optimize bundle for better performance
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Disable source maps in production for faster builds
  productionBrowserSourceMaps: false,
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Turbopack configuration (empty to acknowledge migration from webpack)
  turbopack: {},
  // Handle Node.js modules in browser
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
      stream: false,
      buffer: false,
      encoding: false,
    };
    return config;
  },
};

export default nextConfig;
