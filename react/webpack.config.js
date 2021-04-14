const path = require("path");
const HtmlWebpakcPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "src/index.jsx"),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, "dist")
  },
  devServer: {
      historyApiFallback: true,
      compress: true,
      // サーバーが見に行くindex.htmlの場所
      contentBase: path.join(__dirname, "dist"),
      watchContentBase: true,
      hot: true,
      port: 8080,
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/react"
          ]
        }
      }
    }]
  },
  target: ["web", "es5"],
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // plugins: [
  //   new HtmlWebpakcPlugin({
  //     template: __dirname + '/src/index.html',
  //     // title: 'Html Webpack Plugin sample',
  //   })
  // ]
};