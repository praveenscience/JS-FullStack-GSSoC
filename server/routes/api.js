const express = require("express");
const api = express.Router();

api.get("/users", (req, res) => {
  const Users = ["Alpha", "Beta", "Gamma", "Delta"];
  res.json(Users);
});

api.get("/sayHello", (req, res) => {
  res.json("Hello, GSSoC!");
});

module.exports = api;
