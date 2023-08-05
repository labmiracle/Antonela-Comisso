const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 4567;

const logCurrentURL = (req, res, next) => {
  console.log("URL actual:", req.url);
  next();
};

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/yo", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "yo.html"));
});

app.use(logCurrentURL);

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
