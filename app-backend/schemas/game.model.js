'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var imgPath = '/path/image.png';

var GameSchema = new Schema({
	// id: Schema.Types.ObjectId,
	title:{
		type: String,
		required: true,			// obrigatory field
		unique: true			// each username has to be unique
	},
	launch: {
		type: Date,
		default: Date.now
	},
	img: {
		data: Buffer
		// contentType: String
	},
	details: {
		creator: String,
		console: String,
		opSys: String,
		processor: String,
		ram: String,
		graphicsCard: String,
		memory: String,
		internet: Boolean,
	},
	rating: Number,
	reviews: {						// amount of reviews
		// type: Int,
		type: Schema.Types.ObjectId,
		ref: 'Review'
	}
})

module.exports = mongoose.model('Game', GameSchema);
