const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const webpack = require('webpack'); // remember to require this, because we DefinePlugin is a webpack plugin

module.exports = withTypescript(withSass({
    cssModules: false,
    assetPrefix: process.env.CDN_PREFIX,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:4]",
      }
  }));
