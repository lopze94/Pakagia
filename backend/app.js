const express = require("express");

let app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

module.exports = app;
