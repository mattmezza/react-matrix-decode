module.exports = {
  entry: './index.js',
  output: {
    filename: 'matrix-decode.js',
    path: './dist'
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
