#!/usr/bin/env node

var MONGO_URL,
    BACKEND_API_PORT,
    BACKEND_API_DNS,
    BACKEND_API_URL,
    BACKEND_API_IP_BIND;

if(process.env.NODE_ENV == "production"){
  MONGO_URL = process.env.MONGO_URL;
  BACKEND_API_PORT = process.env.BACKEND_API_PORT;
  BACKEND_API_DNS = process.env.BACKEND_API_DNS;
  BACKEND_API_URL = process.env.BACKEND_API_URL;
  BACKEND_API_IP_BIND = process.env.BACKEND_API_IP_BIND;
}else{
  MONGO_URL = 'mongodb://127.0.0.1:27017/headshot';
  BACKEND_API_PORT = 3000;
  BACKEND_API_DNS = 'localhost';
  BACKEND_API_URL = 'http://' + BACKEND_API_DNS + ':' + BACKEND_API_PORT;
  BACKEND_API_IP_BIND = '127.0.0.1'
}

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  response = {
    status: 200
  };
  res.send(JSON.stringify(response));
});

app.listen(Number.parseInt(BACKEND_API_PORT), BACKEND_API_IP_BIND, function () {
  console.log('Backend listening on ' + BACKEND_API_URL);
});
