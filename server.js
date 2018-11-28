const path = require('path');
const express = require('express');
const resolve = dir => path.join(__dirname, "..", dir);
const isProd = process.env.NODE_ENV === 'production';

const app = express();
const router = express.Router();

router.use('/dist', express.static(resolve('dist')));
router.use('/public', express.static(resolve('public')));

function render(req, res) {
  const s = Date.now();

  res.setHeader('Content-Type', 'text/html');
  const context = {
    title: 'Test',
    url: req.url,
    headers: req.headers,
  };

  res.end(resolve('dist/index.html'));
}

app.use('/', router);

router.get('*', 
  (req, res) => {
    render(req, res);
  },
);

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
