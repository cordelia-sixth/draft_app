const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "src/index.jsx"),
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, "dist"),
      // ブラウザ更新に必要
      // output.pathから先の、htmlファイルを配置するpathを記述する
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
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                }
              }
            }
          ]
        },
        {
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
        }
      ]
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