import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nautichealth.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
