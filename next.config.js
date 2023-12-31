const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
      "@/components": path.resolve(__dirname, "components"),
      "@/contents": path.resolve(__dirname, "contents"),
      "@/lib": path.resolve(__dirname, "lib"),
      "@/slice": path.resolve(__dirname, "slice"),
      "@/api": path.resolve(__dirname, "api"),
    };
    return config;
  },
};
