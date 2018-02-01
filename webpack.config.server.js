const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, 'mysite/templates/home.js'),
  output: {
    path: path.resolve(__dirname, 'mysite/ssr-build/'),
    publicPath: '/static/build/',
    filename: 'home.js',
    libraryTarget: 'commonjs2',
    libraryExport: 'default',
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: 'css-loader/locals',
        },
      },
    }],
  },
};
