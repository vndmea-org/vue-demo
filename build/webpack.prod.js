const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
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
    // splitChunks: {
    //   chunks: 'all'
    // }
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: 'warning',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader',
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },
});
