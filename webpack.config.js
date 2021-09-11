import path from 'path';
import webpack from 'webpack';
import {APP_ROOT, DEBUG} from './src/lib/common.js';
import CONFIG from './src/config.js';

export default {
  entry: "./src/launcher.js",
  mode: "development",
  output: {
    path: path.resolve(APP_ROOT, 'build'),
    filename: "grader.js",
    chunkFormat: "module"
  },
  experiments: {
    outputModule: true
  },
  optimization: {
    minimize: DEBUG ? false : true
  },
  target: "node",
  node: {
    __dirname: false
  },
  plugins: [
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
  ]
};
