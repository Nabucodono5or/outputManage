const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: { import: "./src/index.js", dependOn: "shared" },
    print: { import: "./src/print.js", dependOn: "shared" },
    shared: "lodash",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  optimization: {
    runtimeChunk: "single",
  },
};
