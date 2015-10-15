// MODEL TODO

var Sequelize = require('sequelize');
var db = require('../../config/database.js');

var Todo = db.define('todo', {
  description: Sequelize.STRING
});

Todo.sync().then(function(){});


module.exports.create = function(req, res) {
	Todo.create({
		description: req.body.description
	}).then(function(){
		res.sendStatus(200);
	})
};

module.exports.findAll = function(req, res) {
	Todo.findAll().then(function (data) {
		res.json(data); 
	});
};

module.exports.update = function(req, res){
	Todo.update({
		description: req.body.description
	}, {
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}

module.exports.delete = function(req, res){
	Todo.destroy({
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.sendStatus(200);
	})
}
