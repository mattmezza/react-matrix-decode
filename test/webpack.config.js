module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: './'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      }
    ]
  }
}
