'use strict';

var mysql = require("mysql");

var pool = mysql.createPool({
	connectionLimit: 10,
	database: 'pickandgo',
	host: 'localhost',
	user: 'root',
	password: 'root'
});

module.exports = function (query, data, cb) {
	pool.getConnection(function (err, connection) {
		connection.query(query, data, onQuery);
		function onQuery(err, rows) {
			if (cb) {
				cb(err, rows);
			}
			connection.release();
		}
	});
};
//# sourceMappingURL=connection.js.map
