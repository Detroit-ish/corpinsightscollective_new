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
  }
});

export default config