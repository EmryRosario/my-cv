let config = {
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: './public/',
    filename: '[name].js'
  }
}

module.exports = {
  entry: config.entry,
  output: config.output,
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader' },
      { test: /\.json?$/, loader: 'json-loader' },
    ]
  }
}
