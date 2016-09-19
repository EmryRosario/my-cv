module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: './public',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
