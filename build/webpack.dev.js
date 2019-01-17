const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = merge(common, {
  mode: 'development',
  devtool: '#cheap-module-source-map',
  output: {
    path: resolve('../dist'),
    filename: '[name].[hash:5].js', // for the dev-server
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  performance: {
    maxEntrypointSize: 300000,
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: false,
          preserveWhitespace: false,
          postcss: [
            autoprefixer({
              browsers: ['last 3 versions'],
            }),
          ],
        },
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
