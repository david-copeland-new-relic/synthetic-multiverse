var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    app: ['./app/js/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'app', 'assets'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: 'style!css' }
    ]
  }
};
