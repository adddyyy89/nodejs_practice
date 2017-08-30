'use strict';
module.exports = function(app) {
	var humanhistory_controller = require('../controllers/humanhistory_controller');

	app.route('/query').get(humanhistory_controller.query_all_year);

	app.route('/add').post(humanhistory_controller.add_data);

	app.route('/delete').post(humanhistory_controller.delete_data);

	app.route('/test').get(humanhistory_controller.test);
};