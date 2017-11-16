'use strict';

describe('Testing routes', function () {
  var chai = require('chai');
  var chaiHttp = require('chai-http');

  var expect = chai.expect;
  var assert = chai.assert;
  var should = chai.should();
  var server;

  chai.use(chaiHttp);

  beforeEach(function () {
    server = require('./index');
  });

  afterEach(function () {
    server.close();
  });

  it('responds to /', function testSlash(done) {
    chai.request(server)
    .get('/')
    .end(function(err, res){
      assert(res, 'Nothing here yet!\n\n');
      res.should.have.status(200);
      done();
    });
  });

  it('Tests user creation.', function testUserCreation(done){
    chai.request(server)
    .post('/createuser')
    .send({
      username: "testuser",
      name: "Fulano de Tal"
    })
    .end(function(err, res){
      res.should.have.status(200);
      res.body.should.be.a('Object');
      done();
    });
  });

  it('404 everything else', function testPath(done) {
    chai.request(server)
    .get('/foo/bar')
    .end(function(err, res){
      res.should.have.status(404);
      done();
    });
  });
});

describe('Testing models', function(){
  var mongoose = require('mongoose');
  mongoose.Promise = global.Promise;
  var chai = require('chai');
  var MongoInMemory = require('mongo-in-memory');
  var mongoUri;
  var mongo;

  var Test = require('./schemas/test.model');
  var User = require('./schemas/user.model');
  var expect = chai.expect;
  var assert = chai.assert;
  chai.should();

  beforeEach(function(done){
    var mongoTestPort = 8000;
    mongo = new MongoInMemory(mongoTestPort);
    mongo.start(function(error, config){
      if(error){
        console.error(error);
      }else{
        mongoUri = mongo.getMongouri("headshot");
        mongoose.connect(mongoUri, {useMongoClient: true});
        done();
      }
    });
  });

  afterEach(function(done){
    mongoose.connection.close();
    mongo.stop(function(error){
      if(error){
        console.error(error);
      }
      done();
    });
  });

  it('Tests Test model insertion on database.', function testTestInsert(done){
    var test = new Test({
      name: "testname",
      age: 10
    });
    test.save(function(err, res){
      if(err) console.error(err);
      done();
    });
  });

  it('Tests Test model find on database.', function testTestFind(done){
    var test = new Test({
      name: "testname",
      age: 10
    });
    test.save(function(err, res){
      if(err) console.error(err);
      Test.findOne({
        age: 10
      }, function(err, singleDoc){
        if(err) console.error(err);
        done();
      });
    });
  });

  it('tests Test wrong format protection.', function testTestWrongFormat(done){
    var test = new Test({
      name: "testname",
      age: 10,
      invalidAttribute: true
    });
    var id = test._id;
    test.save(function(err, res){
      if(err){
        console.error(err);
      }
      Test.findOne({
        _id: id
      }, function(err, singleDoc){
        if(err) console.error(err);
        // A protecao de formato oferecida pelo mongoose somente retira atributos nao declarados no schema.
        expect(singleDoc).to.not.have.property('invalidAttribute');
        done();
      });
    });
  });

  it('Tests Test delete from database.', function testTestRemove(done){
    var id;
    var test = new Test({
      name: "testname",
      age: 10
    });
    id = test._id;
    Test.remove({
      _id: id
    }, function(err){
      if(err) console.error(err);
      done();
    });
  });

  it('Tests User model insertion on database.', function testUserInsert(done){
    var user = new User({
      username: "TestUser",
      admin: true,
      name: "Usuario fulano de tal",
      img: new Buffer("test")
    });
    user.save(function(err, res){
      if(err) console.error(err);
      done();
    });
  });
});
