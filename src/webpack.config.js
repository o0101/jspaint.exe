const path = require('path');
const CONFIG = require('./config.js');

module.exports = {
  entry: CONFIG.entry || "./app.js",
  output: {
    path: path.resolve('.', 'build'),
    filename: "service.js"
  },
  optimization: {
    minimize: false
  },
  target: "node",
  node: {
    __dirname: false
  }
};
