import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Reduce main-thread work and bundle size via tree-shaking
  experimental: {
    optimizePackageImports: [
      "@heroicons/react",
      "react-icons",
      "react-icons/fa",
      "react-icons/fa6",
    ],
  },
  // Optimize images to avoid enormous network payloads
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  // Enable compression (helps with payload size)
  compress: true,
};

export default nextConfig;
