/** strict mode - https://johnresig.com/blog/ecmascript-5-strict-mode-json-and-more/
*
* Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, 
* or a function, in a “strict” operating context. 
* This strict context prevents certain actions from being taken and 
* throws more exceptions (generally providing the user with more information and a 
* tapered-down coding experience). 
*/
'use strict';
// mongoose to intract with mongoDB instance
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var historySchema = new schema({
	time: String,
	humans: [{
		species: String,
		conservation_status: String,
		genus: String,
		family: String,
		work: String,
		places: [{
			name: String,
			area: String
		}]
	}],
	creationdate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('History', historySchema);