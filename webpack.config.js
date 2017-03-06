var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var child_process = require('child_process')

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['./app/js/app.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js',
    sourceMapFilename: 'bundle.map.js',
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: 'style!css' },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'app/css/global.css' },
      { from: 'app/api', to: 'api' },
      { from: 'app/vendor', to: 'vendor' },
    ]),
    new HtmlWebpackPlugin({
      version: child_process.execSync('git rev-parse HEAD').slice(0, 7),
      template: 'app/index.html',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
}
