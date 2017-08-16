var Users = require('./../controllers/users.js');
var path = require('path')
module.exports = function(app){
	app.post('/api/users', Users.create);
	app.get('/api/current_user', Users.getCurrent);

	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./login-reg-app/dist/index.html"))
    });
}