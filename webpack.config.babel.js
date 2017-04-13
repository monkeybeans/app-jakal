const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/web/assets/scripts'),
    filename: 'app-jakal.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
    ],
  },
  devtool: '#inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'web'), // static content
    watchContentBase: false,
    publicPath: '/dist', // bundle file path
    compress: true,
    port: 9000,
    proxy: {
      '/api/v1': 'http://localhost:8085',
    },
  },
};
