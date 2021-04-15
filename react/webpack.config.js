const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "src/index.jsx"),
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, "dist"),
      // ブラウザ更新に必要
      publicPath: "/",

    },
    devServer: {
        historyApiFallback: true,
        compress: true,
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
    plugins: [
      new HtmlWebpackPlugin({
        template: __dirname + '/src/index.html',
      })
    ]
};