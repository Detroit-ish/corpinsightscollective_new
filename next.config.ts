import type { NextConfig } from 'next'
import withPWA from 'next-pwa'

const config: NextConfig = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    manifest: {
      name: 'CorpInsights Collective',
      short_name: 'CIC',
      description: 'Building systems that help SMBs grow without guesswork',
      display: 'standalone',
      start_url: '/',
      background_color: '#FFFFFF',
      theme_color: '#1E40AF',
      icons: [
        {
          src: '/brand/icon.svg',
          sizes: '512x512',
          type: 'image/svg+xml',
          purpose: 'any maskable'
        }
      ]
    }
  },
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