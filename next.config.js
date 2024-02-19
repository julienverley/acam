/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpackDevMiddleware: (config) => {
    // Activer le rafraîchissement automatique
    config.watchOptions = {
      poll: 1000, // Vérifier les modifications toutes les secondes
      aggregateTimeout: 300, // Délai avant de considérer que tous les changements ont été apportés
    };
    return config;
  },
};

module.exports = nextConfig;
