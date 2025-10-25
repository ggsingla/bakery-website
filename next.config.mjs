/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Disable webpack cache warnings in development
    if (dev) {
      config.cache = false;
    }
    
    return config;
  },
};

export default nextConfig;
