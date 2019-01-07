const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  entry: resolve('../src/entry.js'),
  output: {
    path: resolve('../dist'),
    filename: 'app.[hash:5].js',
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('../src'),
    },
    extensions: ['.js', '.json', '.vue'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../src/index.template.html'),
      filename: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
      },
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
};
