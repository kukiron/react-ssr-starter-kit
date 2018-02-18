const path = require("path"),
  merge = require("webpack-merge"),
  baseConfig = require("./webpack.base"),
  webpackNodeExternals = require("webpack-node-externals")

const serverConfig = {
  target: "node",
  entry: "./src/server/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  // To avoid bundling the packages available in node_modules
  externals: [webpackNodeExternals()]
}

module.exports = merge(serverConfig, baseConfig)
