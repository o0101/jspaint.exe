import path from 'path';
import CONFIG from './config.js';

export default {
  entry: CONFIG.entry || "./app.js",
  output: {
    path: path.resolve('.', 'build'),
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
