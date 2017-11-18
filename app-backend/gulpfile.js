const gulp = require('gulp');
const mocha = require('gulp-mocha');
const MongoInMemory = require('mongo-in-memory');
const spawn = require('child_process').spawn;
var node;
var mongoServerInstance;

gulp.task('startMongoInMemory', ['stopMongoInMemory'], function() {
  var mongoDevPort = 27017;
  mongoServerInstance = new MongoInMemory(mongoDevPort); //DEFAULT PORT is 27017
  mongoServerInstance.start(function(error, config){
      if(error){
          console.error(error);
      }else{
          var mongouri = mongoServerInstance.getMongouri("headshot");
          console.log('Started devMode MongoInMemory');
          console.log('Monggo URI: ' + mongouri);
      }
  });
});

gulp.task('stopMongoInMemory', function(){
  if(mongoServerInstance){
    mongoServerInstance.stop(function(error){
      if(error){
        console.error(error);
      }
      console.log('Stoped MongoInMemory');
    });
  }
});

gulp.task('tests', function(){
  gulp.src('tests.js')
  .pipe(mocha())
});

gulp.task('backend', ['tests'], function(){
  if(node) node.kill();
  node = spawn('node', ['index.js'], {stdio: 'inherit'})
  node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
});


gulp.task('watchBackend', ['backend'], function(){
  // gulp.watch(['./index.js', './**/*.js'], ['backend', 'startMongoInMemory']);
  gulp.watch(['./index.js', './**/*.js'], ['backend']);
});

process.on('exit', function() {
    if (node) node.kill()
});

gulp.task('default', ['startMongoInMemory', 'watchBackend']);
