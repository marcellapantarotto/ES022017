'use strict';

var User = require('../schemas/user.model');

module.exports = function(app){
    app.post('/createuser', function(req, res){
        var user = new User({
            username: req.body.username,
            name: req.body.name
        });
        user.save(function(err, doc){
            if(err){
                console.error(err);
                res
                .status(500)
                .send(err);
            }else{
                res
                .status(200)
                .send({id: doc._id});
            }
        });
    });
    // app.get('/user/:id', function(req, res){
    //     User.findOne({
    //         _id: req.params.id
    //     }, function(err, doc){
    //         if(err){
    //             console.error(err);
    //             res
    //             .status(500)
    //             .send(err);
    //         }else{
    //             res
    //             .status(200)
    //             .send(doc);
    //         }
    //     });
    // });
}