#!/usr/bin/env node

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  response = {
    status: 200
  };
  res.send(JSON.stringify(response));
});

app.listen(3000, '127.0.0.1', function () {
  console.log('Example app listening on port 3000!');
});
