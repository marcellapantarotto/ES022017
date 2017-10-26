'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
	id: Schema.Types.ObjectId,
	content: String,
	user: {
		type: String,
		ref: 'User'
	},
	/*
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
	*/
	date:{
		type: Date,
		default: Date.now
	},
	game: {
		type: String,
		ref: 'Game'
	},
	votes: int
})

module.export = mongoose.model('Review', ReviewSchema);
