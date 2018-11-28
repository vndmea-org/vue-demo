const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();
const resolve = (dir) => path.resolve(__dirname, dir);

router.use('/dist', express.static(resolve('dist')));
app.use('/', (req, res) => {
  if (req.url == "/") {
    res.sendFile(path.resolve(__dirname, "./dist/index.html"));
  } else if (/[.js|.css]$/.test(req.url)) {
    res.sendFile(path.resolve(__dirname, `./dist${req.url}`));
  } else {
    res.status(404).send("Resource Not Found!");
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
