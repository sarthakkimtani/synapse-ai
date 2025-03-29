import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "motion"],
  },
  poweredByHeader: false,
};

export default nextConfig;
