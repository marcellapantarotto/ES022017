'use strict';

describe('Testing routes', function () {
  const request = require('supertest');
  var server;
  beforeEach(function () {
    server = require('./index');
  });
  afterEach(function () {
    server.close();
  });
  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect('Nothing here yet!\n\n')
    .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});

describe('Testing models', function(){
  const mongoose = require('mongoose');
  const chai = require('chai');
  const dbURI = 'mongodb://localhost/test';

  mongoose.Promise = global.Promise;
  var clearDB  = require('mocha-mongoose')(dbURI)
  var Test = require('./schemas/test.model');
  var expect = chai.expect;
  var assert = chai.assert;
  chai.should();

  beforeEach(function(done){
    if (mongoose.connection.db) return done();
    mongoose.connect(clearDB, donen);
  });

  it('tests Test model insertion on database', function testTestInsertion(done){
    var test = new Test({name: "testname", age: 10});
    test.save(function(err, res){
      if(err) console.error(err);
      done();
    });
    // done();
  });
});
