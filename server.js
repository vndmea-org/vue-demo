const path = require('path');
const express = require('express');
const proxy = require('http-proxy-middleware');
const router = require('./routes');
const history = require('connect-history-api-fallback');
const app = express();
const isDev = process.env.NODE_ENV === 'development';

app.use(history());
app.use('/api', router);

if (isDev) {
  app.use(
    '/',
    proxy('/', {
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );
} else {
  app.use(express.static(path.resolve(__dirname, './dist')));
  app.use('/', router);
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
