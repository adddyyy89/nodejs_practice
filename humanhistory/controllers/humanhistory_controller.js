'use strict';

var mongoose = require('mongoose'),
history = mongoose.model('History');

// Test Purpose
exports.test = function(req, res) {
	res.json( {message: 'Test message from Node Server'});
};

// Find
exports.query_all_year = function(req, res) {
	console.log('Query all records');
	history.find({}, function(err, response) {
		if(err){
			res.send(err);
		}
		//res.json(response[0].time);
		// Return HTML
		console.log(response[0]);
		res.send('<table><tr><td>Year: </td><td>' + response[0].time + '</td></tr><tr><td>Species: </td><td>' + 
			response[0].humans[0].species + '</td></tr><tr><td>Genus: </td><td>' + response[0].humans[0].genus + 
			'</td></tr><tr><td>Family: </td><td>' + response[0].humans[0].family + '</td></tr><tr><td>Work: </td><td>'
			+ response[0].humans[0].work + '</td></tr><tr><td>Places: </td><td>' + response[0].humans[0].places[0].name + 
			'</td></tr></table>');
	});
};

// Add new 
exports.add_data = function(req, res) {
	console.log('New data insertion.');
	var newHistory = new history(req.body);
	newHistory.save(function(err, new_history){
		if(err){
			res.send(err);
		}
		res.json(new_history);
	});
};

// Delete
exports.delete_data = function(req, res) {
	console.log('Data deletion.');
	history.remove({
		
	}, function(err, response){
		if(err){
			res.send(err);
		}
		res.json({ message: 'History successfully deleted (year=' + req.params.year + ')' });
	});
};