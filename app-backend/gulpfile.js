const gulp = require('gulp');
const MongoInMemory = require('mongo-in-memory');
const spawn = require('child_process').spawn;
var node;
var mongoServerInstance;

gulp.task('startMongoInMemory', ['stopMongoInMemory'], function() {
  mongoServerInstance = new MongoInMemory(); //DEFAULT PORT is 27017
  mongoServerInstance.start(function(error, config){
      if(error){
          console.error(error);
      }else{
          var mongouri = mongoServerInstance.getMongouri("headshot");
          console.log('Started MongoInMemory');
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

gulp.task('backend', function(){
  if(node) node.kill();
  node = spawn('node', ['index.js'], {stdio: 'inherit'})
  node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
});


gulp.task('watchBackend', ['backend'], function(){
  gulp.watch(['./index.js', './**/*.js'], ['backend', 'startMongoInMemory']);
});

process.on('exit', function() {
    if (node) node.kill()
});

gulp.task('default', ['startMongoInMemory', 'watchBackend']);
