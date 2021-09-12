module.exports = {
  name: "JSPaint",
  entry: "./app.js",
  author: {
    name: "Cris Stringfellow",
    url: "https://github.com/i5ik",
  },
  desiredPort: 49666,
  version: "0.0.1",
  description: "Classic JS Paint",
  source: "https://github.com/i5ik/jspaint.exe",
  organization: {
    name: "Dosyago",
    url: "https://github.com/dosyago"
  },
  apiOrigins: [],                   // exact origins allowed to call Service API via grader global,
  DEBUG: (process.env.GR_DEBUG && (process.env.GR_DEBUG === "false" ? false : true)) || false
};
