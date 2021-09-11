import path from 'path';
import CONFIG from './config.js';
import {APP_ROOT} from './lib/common.js';

export default {
  entry: CONFIG.entry || "./app.js",
  output: {
    path: path.resolve(APP_ROOT, 'build'),
    filename: "service.js"
  },
  optimization: {
    minimize: CONFIG.DEBUG ? false : true
  },
  target: "node",
  node: {
    __dirname: false
  }
};
