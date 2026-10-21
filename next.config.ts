import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    // Pages use <img src={importedJpg}> (Vite-style string URLs), not next/image StaticImageData.
    disableStaticImages: true,
    remotePatterns: [
      { protocol: "https", hostname: "nautichealth.com", pathname: "/**" },
      { protocol: "https", hostname: "www.nautichealth.com", pathname: "/**" },
      { protocol: "https", hostname: "static.legitscript.com", pathname: "/**" },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|avif|ico|bmp)$/i,
      type: "asset/resource",
    });
    return config;
  },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/book", destination: "/wellness-assessment", permanent: true },
      { source: "/assessment", destination: "/wellness-assessment", permanent: true },
    ];
  },
};

export default nextConfig;
