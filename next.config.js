const { i18n } = require("./next-i18next.config");

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 */
const config = {
  i18n,
  future: { strictPostcssConfiguratio: true },
  pageExtensions: ["page.tsx", "page.ts"],
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
};

module.exports = config;
