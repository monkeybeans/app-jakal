module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/web/assets/scripts',
    filename: 'app-jakal.js',
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
