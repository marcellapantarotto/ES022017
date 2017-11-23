'use strict';


describe('Testing models', function(){
  var mongoose = require('mongoose');

  mongoose.Promise = global.Promise;
  var chai = require('chai');
  var MongoInMemory = require('mongo-in-memory');
  var mongoUri;
  var mongo;
  var db;

  var Test = require('./schemas/test.model');
  var User = require('./schemas/user.model');
  var Game = require('./schemas/game.model');
  var Review = require('./schemas/review.model');

  var expect = chai.expect;
  var assert = chai.assert;
  chai.should();
  mongoose.Promise = global.Promise;

  beforeEach(function(done){
    var mongoTestPort = 7777;
    mongo = new MongoInMemory(mongoTestPort);
    mongo.start(function(error, config){
      if(error){
        console.error(error);
      }else{
        mongoUri = mongo.getMongouri("headshot");
        db = mongoose.connect(mongoUri, {useMongoClient: true});
        console.log('Mongo UP mongoURI ' + mongoUri);
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
      console.log('Mongo Down');
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
    var id = test._id
    test.save(function(err, res){
      if(err){
        console.error(err);
      };
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

//----------------------------- USER TESTS ------------------------------------
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

  it('Tests User delete from database.', function testUserRemove(done){
    var id;
    var user = new User({
      username: "TestUser",
      admin: true,
      name: "Usuario fulano de tal",
      img: new Buffer("test")
    });
    id = user._id;
    user.remove({
      _id: id
    }, function(err){
      if(err) console.error(err);
      done();
    });
  });

//----------------------------- GAME TESTS ------------------------------------
  it('Tests Game model insertion on database.', function testGameInsert(done){
    var game = new Game({
      title: "TestGame"
    });
    game.save(function(err, res){
      if(err) console.error(err);
      done();
    });
  });

  it('Tests Game delete from database.', function testGameRemove(done){
    var id;
    var game = new Game({
      title: "TestGame"
    });
    id = game._id;
    game.remove({
      _id: id
    }, function(err){
      if(err) console.error(err);
      done();
    });
  });

//----------------------------- REVIEW TESTS ------------------------------------
  it('Tests Review model insertion on database.', function testReviewInsert(done){
    var review = new Review({
      content: "TestReview"
    });
    review.save(function(err, res){
      if(err) console.error(err);
      done();
    });
  });

  it('Tests Review delete from database.', function testReviewRemove(done){
    var id;
    var review = new Review({
      title: "TestReview"
    });
    id = review._id;
    review.remove({
      _id: id
    }, function(err){
      if(err) console.error(err);
      done();
    });
  });
});

describe('Testing routes', function () {
  var chai = require('chai');
  var chaiHttp = require('chai-http');
  var MongoInMemory = require('mongo-in-memory');
  var mongoUri;
  var mongo;

  var expect = chai.expect;
  var assert = chai.assert;
  var should = chai.should();
  var server;
  var User = require('./schemas/user.model');
  chai.use(chaiHttp);

  beforeEach(function(done){
    var mongoTestPort = 8888;
    mongo = new MongoInMemory(mongoTestPort);
    mongo.start(function(error, config){
      if(error){
        console.error(error);
      }else{
        mongoUri = mongo.getMongouri("headshot");
        server = require('./index');
        console.log("Server UP");
        done();
      }
    });
  });

  afterEach(function(done){
    server.close();
    console.log('server down')
    mongo.stop(function(error){
      if(error){
        console.error(error);
      }
      console.log('mongo down')
      done();
    });
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

  it('Tests user creation(get).', function testUserCreation(done){
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

  it('Tests user retrieval(get)', function testsUserRetrieval(done){
    var testUser = new User({
      username: "TestUser",
      admin: true,
      name: "Usuario fulano de tal",
      img: new Buffer("test")
    });
    testUser.save(function(err, doc){
      assert.isNotOk(err);
      chai.request(server)
      .get('/user/' + doc._id)
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('Object');
        done();
      });
    });
  });

  it('Tests user update(put)', function testsUserUpdate(done){
    var testUser = new User({
      username: "TestUser",
      admin: true,
      name: "Usuario fulano de tal",
      img: new Buffer("test")
    });
    testUser.save(function(err, doc){
      assert.isNotOk(err);
      chai.request(server)
        .put('/user/' + doc._id)
        .send({username: "NewUserName"})
        .end(function(err, res){
          res.should.have.status(200);
          res.body.should.be.a('Object');
          User.findOne({_id : doc._id}, function(err, newDoc){
            assert.isNotOk(err);
            assert.equal(newDoc.username, "NewUserName");
            done();
          });
        });
    });
  });

  it('Tests user removal(delete)', function testsUserRemoval(done){
    var testUser = new User({
      username: "TestUser",
      admin: true,
      name: "Usuario qualquer",
      img: new Buffer("test")
    });
    testUser.save(function(err, doc){
      assert.isNotOk(err);
      chai.request(server)
      .delete('/user/' + doc._id)
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
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
