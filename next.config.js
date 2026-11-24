/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // sharp (Next's image optimiser) ships native binaries and must not be bundled.
  serverExternalPackages: ['sharp'],
  // Reviews and watchlists held only showcase data and are gone. Old links
  // land on the pages that replace them.
  async redirects() {
    return [
      { source: '/watchlists', destination: '/moods', permanent: true },
      { source: '/watchlists/:id', destination: '/moods', permanent: true },
      { source: '/reviews', destination: '/discover', permanent: true },
      { source: '/reviews/:id', destination: '/discover', permanent: true },
    ];
  },
  experimental: {
    agentUpgrade: 'security',
  },
};

module.exports = nextConfig;
