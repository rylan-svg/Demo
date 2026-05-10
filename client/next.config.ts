import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // 这个就是接口重定向
  async rewrites() {
    return [{
      source: '/api',
      destination: 'http://127.0.0.1:8000/api',
    }]
  }
};

export default nextConfig;
