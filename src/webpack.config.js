import path from 'path';
import CONFIG from './config.js';
import {DEBUG} from './lib/common.js';

export default {
  entry: CONFIG.entry || "./app.js",
  mode: "development",
  output: {
    path: path.resolve('.', 'build'),
    filename: "service.js",
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
  }
};
