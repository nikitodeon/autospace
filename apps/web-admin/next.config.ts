import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */ /* config options here */ images: {
    remotePatterns: [
      { hostname: 'api.mapbox.com' },
      { hostname: 'res.cloudinary.com' },
      { hostname: 'lh3.googleusercontent.com' },
    ],
  },
}

export default nextConfig
