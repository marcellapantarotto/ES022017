'use strict';

var Review = require('../schemas/review.model');

module.exports = function(app){
    // app.post('/review', function(req, res){
    //     var review = new Review({
    //         username: req.body.username,
    //         name: req.body.name
    //     });
    //     user.save(function(err, doc){
    //         if(err){
    //             console.error(err);
    //             res
    //             .status(500)
    //             .send(err);
    //         }else{
    //             res
    //             .status(200)
    //             .send({id: doc._id});
    //         }
    //     });
    // });
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
    // app.put('/user/:id', function(req, res){
    //     var newUser = new User({
    //         _id: req.params.id,
    //         username: req.body.username
    //     });
    //     User.update(newUser, function(err, doc){
    //         if(err) {
    //             console.error(err);
    //             res
    //             .status(500)
    //             .send(err);
    //         }
    //         else {
    //             res
    //             .status(200)
    //             .send(doc);
    //         }
    //     });
    // });
    // app.delete('/user/:id', function(req, res){
    //     User.remove({ _id: req.params.id }, function(err){
    //         if (err) {
    //             console.error(err);
    //             res
    //             .status(500)
    //             .send(err);
    //         }
    //         else {
    //             res
    //             .status(200)
    //             .end();
    //         }
    //     });
    // });
}