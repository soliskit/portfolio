/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  env: {
    // Baked in at build time so the prerendered footer and the browser agree.
    BUILD_YEAR: String(new Date().getFullYear())
  }
}

module.exports = nextConfig
