const MongoInMemory = require('mongo-in-memory');

var port = 27017;
var mongoServerInstance = new MongoInMemory(port);

mongoServerInstance.start(function(error, config){
    if(error){
        console.error(error);
    }else{
        console.log("HOST " + config.host);
        console.log("PORT " + config.port);
        var mongouri = mongoServerInstance.getMongouri("myDatabaseName");
    }
});

mongoServerInstance.stop(function(error){
    if(error){
        console.error(error);
    }
});
