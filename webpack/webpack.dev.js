const webpack = require("webpack");
const { EnvironmentPlugin } = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("devMode"),
    }),
    new EnvironmentPlugin({
      baseUrl: "http://92.204.170.218/jdb/index.php/api/en/",
      imageUrl: "http://188.138.33.11/jdb",
      userNames: "jBizUserApp",
      password: "Zu18nMpD2k",
    }),
  ],
};
