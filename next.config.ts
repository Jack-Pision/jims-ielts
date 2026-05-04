import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: 'export',
  // Only use custom distDir for production builds
  // Dev server uses default .next/ to avoid file watcher loops
  distDir: isDev ? '.next' : 'dist',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ignore dist folder to prevent watcher from triggering on its own output
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/dist/**', '**/.git/**', '**/node_modules/**'],
    };
    return config;
  },
};

export default nextConfig;
