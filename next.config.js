/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // outputStandalone: true
  },
  images: {
    domains: ['buscopensiones.com'],
  },
}

module.exports = nextConfig
