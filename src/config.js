module.exports = {
  name: "MyGraderApp",
  entry: "./app.js",
  author: {
    name: "my name",
    url: "https://github.com/my-github-username",
  },
  desiredPort: 49666,
  version: "0.0.1",
  description: "Gorgeous",
  source: "https://github.com/my-github-username/MyGraderApp",
  organization: {
    name: "My Org",
    url: "https://github.com/my-github-org-name"
  },
  apiOrigins: [],                   // exact origins allowed to call Service API via grader global,
  DEBUG: false
}
