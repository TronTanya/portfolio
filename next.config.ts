import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/resume.pdf", destination: "/api/resume" }]
  },
};

export default nextConfig;
