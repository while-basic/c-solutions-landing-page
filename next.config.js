/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false,
  },
  // Enable static exports for better performance
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig 