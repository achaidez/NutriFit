const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: './client/src/index.js',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".*", ".js", ".jsx"],
    alias: {
      "react-native$": "react-native-web",
    },
  },
  output: {
    path: path.resolve(__dirname, "client/dist/"),
    publicPath: "/client/dist/",
    filename: "bundle.js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};