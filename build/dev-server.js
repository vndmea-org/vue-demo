const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.dev.js');

const options = {
  contentBase: '../dist',
  hot: true,
  host: 'localhost',
  stats: 'errors-only',
  compress: true,
  quiet: true,
  historyApiFallback: true,
};

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);

server.listen(8000, 'localhost', () => {
  console.log('dev server listening on port 8000');
});
