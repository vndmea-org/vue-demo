const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const isProd = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  mode: 'production',
  devtool: isProd ? false : '#cheap-module-source-map',
  entry: resolve('../src/entry.js'),
  output: {
    path: resolve('../dist'),
    filename: 'app.[hash].js',
  },
  resolve: {
    alias: {
      public: resolve('../public'),
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('../src'),
    },
    extensions: ['.js', '.json', '.vue'],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.[chunkhash].css',
    }),
    new HtmlWebpackPlugin({
      template: resolve('../src/index.template.html'),
      filename: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
      },
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ],
    // splitChunks: {
    //   chunks: 'all'
    // }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: isProd,
          preserveWhitespace: false,
          postcss: [
            autoprefixer({
              browsers: ['last 3 versions'],
            }),
          ],
        },
      },
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
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!less-loader"
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
      },
    ],
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false,
  },
};
