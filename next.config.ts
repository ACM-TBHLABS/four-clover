import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Sanity's image CDN
        port: "",                  // Leave empty for default HTTPS port
        pathname: "/**",           // Allow all image paths
      },
    ],
  },
};

export default nextConfig;
