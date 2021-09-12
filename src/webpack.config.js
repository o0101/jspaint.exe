const path = require('path');
const CONFIG = require('./config.js');

module.exports = {
  entry: CONFIG.entry || "./app.js",
  mode: "production",
  output: {
    path: path.resolve('.', 'build'),
    filename: "service.js"
  },
  optimization: {
    minimize: true
  },
  target: "node",
  node: {
    __dirname: false
  }
};
