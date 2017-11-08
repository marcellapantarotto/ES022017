'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

<<<<<<< HEAD
// var Game = require('./game.model');
=======
var Game = require('./game.model');

>>>>>>> 9c42d54138772194beb37fca151816d9677389b5
// var imgPath = '/path/image.png';

var UserSchema = new Schema({
	// id: Schema.Types.ObjectId,
	username: {
		type: String,
		required: true,			// obrigatory field
		unique: true			// each username has to be unique
	},
	admin: Boolean,
	name: String,
	img: {
		data: Buffer
		// contentType: String
	},
	favorite: {
		type: [String],
		ref: 'Game'
	}
});

module.exports = mongoose.model('User', UserSchema);
