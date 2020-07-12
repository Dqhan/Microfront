const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./index.js",
    // store: "./store.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "app-react",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css", ".less"],
  },
  node: {
    fs: "empty",
  },
  externals: {},
};
