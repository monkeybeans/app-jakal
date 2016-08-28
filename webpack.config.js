module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + '/web/assets/scripts',
    filename: "app-jakal.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
};
