const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  // entry: "./src/index.js",
  entry: {
    "single-spa-config": "./config/single-spa-config.js",
  },
  output: {
    path: path.resolve(__dirname, "../build/"),
    // filename: "bundle.js",
    filename: "[name].js",
    publicPath: '/build/',
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
    // new HtmlWebpackPlugin({
    //   template: "./public/index.html",
    // }),
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
    }),
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "config/single-spa-config.js",
    //       to:  "asset-co",
    //     },
    //   ],
    // }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css", ".less"],
  },
  node: {
    fs: 'empty'
  },
  externals: {},
  devServer: {
    historyApiFallback: true
  }
};
