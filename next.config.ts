import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  turbopack: {},
};

export default withContentlayer(nextConfig);
