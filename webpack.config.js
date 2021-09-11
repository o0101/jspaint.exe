import path from 'path';
import webpack from 'webpack';
import {APP_ROOT} from './src/lib/common.js';
import CONFIG from './src/config.js';

export default {
  entry: "./src/launcher.js",
  output: {
    path: path.resolve(APP_ROOT, 'build'),
    filename: "grader.cjs"
  },
  optimization: {
    minimize: CONFIG.DEBUG ? false : true
  },
  target: "node",
  node: {
    __dirname: false
  },
  plugins: [
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
  ]
};
