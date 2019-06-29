const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.[chunkhash:5].css',
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
    ],
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: 'warning',
  },
  module: {
    rules: [
    ],
  },
});
