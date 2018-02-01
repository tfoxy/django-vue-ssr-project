const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'mysite/templates/home.js'),
  output: {
    path: path.resolve(__dirname, 'mysite/static/build/'),
    publicPath: '/static/build/',
    filename: 'home.js',
    library: 'app',
    libraryTarget: 'window',
    libraryExport: 'default',
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        extractCSS: true,
      },
    }],
  },
  plugins: [
    new ExtractTextPlugin('home.css'),
  ],
};
