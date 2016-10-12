var webpack = require('webpack')
var path = require('path')

/*
module.exports = {
  context: __dirname + '/app',
  entry: [
    'webpack/hot/only-dev-server',
    './js/app.js'
  ],
  output: {
    path: __dirname + '/app/build',
    filename: 'bundle.js',
    publicPath : './app/'
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: 'style!css' }
    ]
  }
}
*/

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
