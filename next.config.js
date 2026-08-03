/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // sharp (Next's image optimiser) ships native binaries and must not be bundled.
  serverExternalPackages: ['sharp'],
};

module.exports = nextConfig;
