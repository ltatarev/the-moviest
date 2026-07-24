/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
  // sharp (used by plaiceholder) ships native binaries and must not be bundled.
  serverExternalPackages: ['sharp'],
};

module.exports = nextConfig;
