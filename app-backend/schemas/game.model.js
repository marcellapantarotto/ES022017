'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imgPath = '/path/image.png';

var GameSchema = new Schema({
	// id: Schema.Types.ObjectId,
	title: String,
	launch: {
		type: Date,
		default: Date.now
	},
	img: {
		data: buffer
		// contentType: String
	},
	details: {
		creator: String,
		platform: String,
		opSys: String,
		processor: String,
		ram: String,
		graphicsCard: String,
		memory: String,
		internet: boolean,
	},
	rating: Int,
	reviews: {						// amount of reviews
		// type: Int,
		type: Schema.Types.ObjectId,
		ref: 'Review'
	}
})

module.export = mongoose.model('Game', GameSchema);