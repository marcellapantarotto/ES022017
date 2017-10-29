'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imgPath = '/path/image.png';

var UserSchema = new Schema({
	id: Schema.Types.ObjectId,
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
