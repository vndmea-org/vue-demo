const path = require("path");
const express = require("express");
const app = express();
const proxy = require("http-proxy-middleware");
const isDev = process.env.NODE_ENV === "development";
const router = require("./routes");

app.use("/api", router);

if (isDev) {
  app.use(
    "/",
    proxy("/", {
      target: "http://localhost:8000",
      changeOrigin: true
    })
  );
} else {
  app.use(express.static(path.resolve(__dirname, "./dist")));
  app.use("/", router);
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
