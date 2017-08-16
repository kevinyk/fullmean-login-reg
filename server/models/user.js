var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
	name: {type: String, required: true},
	password: {type: String, required: true},
	email: { type:String, required: true, unique: true}
})
mongoose.model('User', UserSchema);