'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imgPath = '/path/image.png';

var UserSchema = new Schema({
	id: Schema.Types.ObjectId,
	title: String,
	username: {
		type: String,
		admion: boolean,
		required: true,			// obrigatory field
		unique: true			// each username has to be unique
	},
	name: String,
	img: {
		data: buffer,
		contentType: String
	},
	favorite: {
		type: [String],
		ref: 'Game'
	}
})

module.export = mongoose.model('User', UserSchema);
