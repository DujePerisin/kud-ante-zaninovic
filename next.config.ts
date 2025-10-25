import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Google profile photos (covers lh3, lh4, …)
      { protocol: "https", hostname: "*.googleusercontent.com" },
      // keep your Prismic hosts if you use PrismicNextImage
      // { protocol: "https", hostname: "images.prismic.io" },
      // { protocol: "https", hostname: "<your-repo>.cdn.prismic.io" },
    ],
  },
};

export default nextConfig;
