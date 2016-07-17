// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Profile', new Schema({ 
	profileid: Number,
    username: String,
	nickname: String,
	gender: String,
    height: Number,
    head: String,
    current_class: Number,
    experience: Number,
    pvp_rating_points: Number,
    banner_badge: String,
	banner_mark: String,
	banner_stripe: String,
	game_money: Number,
	cry_money: Number,
	crown_money: Number,
	items: [{
	    id: Number, 
        name: String, 
        attached_to: Number,
        config: String, 
        slot: Number, 
        equipped: Number, 
        default: Number, 
        permanent: Number, 
        expired_confirmed: Number, 
        buy_time_utc: Number, 
        expiration_time_utc: Number, 
        seconds_left: Number
    }]
}));