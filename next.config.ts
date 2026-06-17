import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 default is [75]; raise this so the hero image can render
    // at a higher quality for its large, full-bleed display.
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
