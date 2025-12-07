import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  // Optimize bundle for better performance
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Disable source maps in production for faster builds
  productionBrowserSourceMaps: false,
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
