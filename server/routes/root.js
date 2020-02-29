const express = require("express");
const root = express.Router();

root.get("/", (req, res) => {
  res.json("Hello, GSSoC!");
});

module.exports = root;
