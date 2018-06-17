const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const path = require("path")

const resolve = _ => path.resolve(process.cwd(), _ || "")

module.exports = {
  mode: "production",
  entry: resolve("src/index.js"),
  output: {
    path: resolve("build"),
    filename: "static/js/[name].[hash:4].js",
    publicPath: "/"
  },
  resolve: {
    alias: {
      "@": resolve("src/components/"),
      "&": resolve("src/assets"),
      react: "preact-compat"
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve("public/index.html"),
      favicon: resolve("public/favicon.png"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new CleanWebpackPlugin(["build"], {
      root: resolve(),
      exclude: ["icon.png"]
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "static/img/[name].[hash:4].[ext]"
            }
          },
          {
            loader: "file-loader",
            exclude: /\.(js|html|json)$/,
            options: {
              name: "static/media/[name].[hash:4].[ext]"
            }
          }
        ]
      }
    ]
  },
  node: {
    setImmediate: false,
    process: "mock",
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
}
