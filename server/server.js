const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Hello, GSSoC!");
});

app.get("/api/users", (req, res) => {
  const Users = ["Alpha", "Beta", "Gamma", "Delta"];
  res.json(Users);
});

app.get("/api/sayHello", (req, res) => {
  res.json("Hello, GSSoC!");
});

app.listen(3100, () => {
  console.log("API Server Started in port 3100!");
});
