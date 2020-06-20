const path = require('path');
const withStyles = require('@webdeb/next-styles');
require('dotenv').config();

module.exports = withStyles({
  env: {
    API_URL: process.env.API_URL,
  },
  sass: true,
  modules: true,
  webpack: (config) => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['public'] = path.join(__dirname, 'public');
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
});
