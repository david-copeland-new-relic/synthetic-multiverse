var webpack = require('webpack')

module.exports = {
  context: __dirname + '/app',
  entry: [
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
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}
