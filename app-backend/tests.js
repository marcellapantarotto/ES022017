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
  var mongoose = require('mongoose');
  var chai = require('chai');
  var MongoInMemory = require('mongo-in-memory');
  var mongoUri;
  var mongo;

  var Test = require('./schemas/test.model');
  var expect = chai.expect;
  var assert = chai.assert;
  chai.should();
  mongoose.Promise = global.Promise;

  beforeEach(function(done){
    var mongoTestPort = 8000;
    mongo = new MongoInMemory(mongoTestPort);
    mongo.start(function(error, config){
      if(error){
        console.error(error);
      }else{
        mongoUri = mongo.getMongouri("headshot");
        mongoose.connect(mongoUri);
      }
    });
    done();
  });

  afterEach(function(){
    mongoose.connection.close();
    mongo.stop(function(error){
      if(error){
        console.error(error);
      }
      console.log('Stoped MongoInMemory');
    });
  });

  it('tests Test model insertion on database', function testTestInsertion(done){
    var test = new Test({name: "testname", age: 10});
    test.save(function(err, res){
      if(err) console.error(err);
      done();
    });
  });
});
