#!/usr/bin/env node
'use strict';
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
}else if(process.env.NODE_ENV == "test"){
  MONGO_URL = 'mongodb://127.0.0.1:8888/headshot';
  BACKEND_API_PORT = 4000;
  BACKEND_API_DNS = 'localhost';
  BACKEND_API_URL = 'http://' + BACKEND_API_DNS + ':' + BACKEND_API_PORT;
  BACKEND_API_IP_BIND = '127.0.0.1'
}else{
  MONGO_URL = 'mongodb://headshot:headshot@127.0.0.1:27017/headshot';
  BACKEND_API_PORT = 3000;
  BACKEND_API_DNS = 'localhost';
  BACKEND_API_URL = 'http://' + BACKEND_API_DNS + ':' + BACKEND_API_PORT;
  BACKEND_API_IP_BIND = '127.0.0.1'
}

var mongoose = require('mongoose');

var bodyParser = require('body-parser');
var express = require('express');
var app = express();

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL, {useMongoClient: true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/user')(app);

app.get('/', function (req, res) {
  var response = 'Nothing here yet!\n\n';
  res.status(200).send(response);
});

module.exports = app.listen(Number.parseInt(BACKEND_API_PORT), BACKEND_API_IP_BIND, function () {
  // console.log('Backend listening on ' + BACKEND_API_URL);
});
