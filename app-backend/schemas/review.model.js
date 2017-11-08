'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
	// id: Schema.Types.ObjectId,
	content: {
		type: String,
		required: true			// obrigatory field
		// unique: true			// each username has to be unique
	},
	user: {
		// type: String,
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
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

module.exports = mongoose.model('Review', ReviewSchema);
