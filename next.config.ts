import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Enables static export (generates 'out' folder)
  basePath: "/argenta/v1", // Prefixes all asset paths with this subdir
  trailingSlash: true,
  images: {
    domains: ["images.unsplash.com"], // Add Unsplash domain for images
    unoptimized: true,
  },
};

export default nextConfig;
