import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', 'busy-monster-needed.ngrok-free.app'],
};

export default nextConfig;
