const { nextI18NextRewrites } = require('next-i18next/rewrites');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const localeSubpaths = { tr: 'tr' };

module.exports = withBundleAnalyzer({
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
});