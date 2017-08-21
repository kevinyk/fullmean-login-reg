var Users = require('./../controllers/users.js');
var path = require('path')

var middleware = (req, res, next)=>{
	if(req.session.uerId){
		next();
	}else{
		res.sendStatus(401);
	}
}
module.exports = function(app){
	app.all(/^\/[^api*+]/, function(req,res, next){
		res.sendFile(path.resolve('./login-reg-app/dist/index.html'));
	})
	// Public routes
	app.post('/api/users', Users.create);
	// Authentication middleware
	app.use(middleware);
	// Protected Routes
	app.get('/api/current_user', Users.getCurrent);

}