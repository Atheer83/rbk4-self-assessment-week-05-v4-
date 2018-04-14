var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });
app.use(bodyParser.json());
var User = sequelize.define('User', {
  username: Sequelize.STRING
});

/*  Create a '/users' route that responds to 
    a GET request with all users in the database */
  app.get('/users', function(req, res){
  	var data;
  	User.find().then(user => {
  		 data = (user.get(user));
     console.log(data);
      res.send(data.username);
});
});

app.listen(3000);



module.exports = { 
  app: app,
  User: User
};

