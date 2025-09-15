import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // autres options si besoin…

  eslint: {
    // 🚀 ignore les erreurs ESLint pendant la phase de build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
