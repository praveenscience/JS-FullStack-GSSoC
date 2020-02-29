const express = require("express");
const app = express();
const root = require("./routes/root");
const api = require("./routes/api");

app.use("/", root);
app.use("/api", api);

app.listen(3100, () => {
  console.log("API Server Started in port 3100!");
});
