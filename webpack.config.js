const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/web/assets/scripts'),
    filename: 'app-jakal.js',
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-3', 'react'],
          plugins: [],
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

  devtool: '#inline-source-map',
};
