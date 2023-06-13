/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
module.exports = {
    images: {
     domains: ['lh3.googleusercontent.com'],

      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'localhost:8000',
          port: '8000',
          pathname: '/auth/**',
        },
      ],
    },
  }

  /**
   * images: {
    domains: ['lh3.googleusercontent.com'],
  },8
   */