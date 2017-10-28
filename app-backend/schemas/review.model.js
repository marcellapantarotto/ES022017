'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
	// id: Schema.Types.ObjectId,
	content: String,
	user: {
		// type: String,
		type: Schema.Types.ObjectId,
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
		// type: String,
		type: Schema.Types.ObjectId,
		ref: 'Game'
	},
	votes: Int
})

module.export = mongoose.model('Review', ReviewSchema);
