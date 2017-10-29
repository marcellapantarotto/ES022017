'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model('Test', TestSchema);
