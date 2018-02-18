const path = require("path"),
  merge = require("webpack-merge"),
  baseConfig = require("./webpack.base")

const clientConfig = {
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  }
}

module.exports = merge(clientConfig, baseConfig)
