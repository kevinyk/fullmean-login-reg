var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

var sessionConfig = {
	secret:'SecretKey', // Secret name for decoding secret and such
	resave:false, // Don't resave session if no changes were made
	saveUninitialized: true, // Don't save session if there was nothing initialized
	// name:'myCookie', // Sets a custom cookie name
	cookie: {
		secure: false, // This need to be true, but only on HTTPS
		httpOnly: false, // Forces cookies to only be used over http
		maxAge: 3600000
	}
}


app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, 'login-reg-app', 'dist')));
app.use(bodyParser.json({extended:true}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(8000, function(){
	console.log("on port 8000");
})