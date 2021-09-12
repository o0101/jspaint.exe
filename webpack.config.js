const path = require('path');
const webpack = require('webpack');
const CONFIG = require('./src/config.js');

module.exports = {
  entry: "./src/launcher.js",
  mode: "production",
  output: {
    path: path.resolve('.', 'build'),
    filename: "grader.cjs"
  },
  optimization: {
    minimize: true
  },
  target: "node",
  node: {
    __dirname: false
  },
  plugins: [
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
  ]
};
