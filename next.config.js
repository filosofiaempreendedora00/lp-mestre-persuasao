/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'filosofiaempreendedora.com',
      },
    ],
  },
}

module.exports = nextConfig
