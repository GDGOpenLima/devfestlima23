/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/schedule': { page: '/schedule' },
      '/code-conduct': { page: '/code-conduct' },
      '/rules': { page: '/rules' },
      '/privacy': { page: '/privacy' },
      '/faq': { page: '/faq' },
      '/sponsors/mitocode': { page: '/sponsors/mitocode' },
      '/sponsors/leonidas-esteban': { page: '/sponsors/leonidas-esteban' },
      '/sponsors/google': { page: '/sponsors/google' },
      '/sponsors/systematic': { page: '/sponsors/systematic' },
      '/winners': { page: '/winners' },
      '/mentors': { page: '/mentors' },
    };
  },
};

module.exports = nextConfig;
