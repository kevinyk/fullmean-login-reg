var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');
module.exports = {
	create: (req,res)=>{
		console.log("in users create");
		// Check if email is already in db, else:
		// If they pass validation:
		// hash the password and save to the db
		// add them to session
		console.log("This is req.body", req.body);
		User.findOne({email: req.body.email}).exec((err,user)=>{
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log(user);
				if(user){
					res.json({
						errors:{
							email:{
								message: "Email is already taken"
							}
						}
					})
				}else{
					var hashedPW = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(9));
					console.log(hashedPW)
					var newUser = new User({
						name: req.body.name,
						email: req.body.email,
						password: hashedPW
					})
					newUser.save((err, savedUser)=>{
						if(err){
							console.log("something went wrong");
							res.json(err);
						}else{
							console.log("user added to db");
							req.session.userId = savedUser._id;
							console.log("this is req.session:", req.session);
							res.json(savedUser);
						}
					})
				}
			}
		})
	},
	login: (req,res)=>{
		console.log("in users login");
	},
	getCurrent: (req,res)=>{
		User.findOne({_id: req.session.userId}, (err, foundUser)=>{
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("current user found");
				console.log(foundUser);
				res.json(foundUser);
			}
		})
	}
}