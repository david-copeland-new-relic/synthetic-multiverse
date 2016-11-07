var webpack = require('webpack')
var path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['./app/js/app.js'],
  },
  output: {
    path: path.resolve(__dirname, 'app', 'assets'),
    publicPath: '/assets/',
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
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
}
