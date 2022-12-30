const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodConfig = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/template.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
