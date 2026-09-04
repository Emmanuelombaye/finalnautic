import type { NextConfig } from "next";

const longCache = "public, max-age=31536000, immutable";

const nextConfig: NextConfig = {
  images: {
    // Already-compressed public WebP/JPG — skip optimizer to avoid blank/broken
    // renders on Vercel and serve files directly (faster + reliable).
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nautichealth.com",
        pathname: "/**",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: longCache }],
      },
      {
        source: "/favicon.png",
        headers: [{ key: "Cache-Control", value: longCache }],
      },
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: longCache }],
      },
      {
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
