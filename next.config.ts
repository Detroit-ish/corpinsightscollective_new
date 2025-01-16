import type { NextConfig } from 'next'
import withPWA from 'next-pwa'

const config: NextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})({
  reactStrictMode: true,
  images: {
    domains: [], // Add any image domains you'll use
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  webpack: (config) => {
    config.externals = config.externals || [];
    config.externals.push({
      'sharp': 'commonjs sharp'
    });
    return config;
  }
});

export default config