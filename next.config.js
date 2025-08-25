/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  // Allow cross-origin requests from specific origins
  allowedDevOrigins: ['http://localhost:8000'],
}

module.exports = nextConfig
