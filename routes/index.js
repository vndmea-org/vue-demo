const path = require("path");
const express = require("express");
const router = express.Router();

router.get("*", (req, res) => {
  if(req.url === '/') {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
  } else if ("/test") {
    res.status(200).send(req.query);
  } else {
    res.status(404).send("Resource Not Found!");
  }
});

module.exports = router;
