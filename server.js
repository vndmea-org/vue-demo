const path = require("path");
const express = require("express");
const app = express();
const router = require("./routes");

app.use("/api", router);

app.use(express.static(path.resolve(__dirname, "./dist")));
app.use("/", router);

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
