/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["better-sqlite3"],
    serverActions: true,
  },
};

module.exports = nextConfig;
