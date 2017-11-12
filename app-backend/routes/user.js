'use strict';

var User = require('../schemas/user.model');

module.exports = function(app){
    app.post('/createuser', function(req, res){
        // console.log(req.body);
        var user = new User({
            username: req.body.username,
            name: req.body.name
        });
        res
        .status(200)
        .json({id: user._id});
        user.save(function(err, doc){
            if(err){
                console.error(err);
            }
            // res
            // .status(200)
            // .json({id: doc._id});
        });
    });
}