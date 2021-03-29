const path = require("path");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "src/index.jsx"),
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, "dist")
    },
    devServer: {
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
    }
};