
var express = require('express'),
	app = express(),
	port = process.env.PORT || 3002,
        publicDir = require('path').join(__dirname,'../public'),
	commonDir = require('path').join(__dirname,'../common_libs');

// Middleware to serve files from local system
// Under the covers, will only call next() if path doesn't match the static directory
app.use(express.static(publicDir));
app.use(express.static(commonDir));

var mysql = require('mysql');
var connection = mysql.createConnection({
	host  : 'localhost',
	user  : 'root',
	password : 'hello',
	database : 'mean_test'
});
connection.connect();
connection.query('SELECT * from employees', function(err, rows, fields) {
	if (err) throw err;
	console.log('Solution: ', rows);
}); 

// Simple route handler example
app.get('/getRecords',function(req,res,next) {
connection.query('SELECT * from employees', function(err, rows, fields) {
	if (err) throw err;
	console.log('Solution: ', rows);
	res.json(rows);
	}); 
});

app.get('/getEmployees',function(req,res,next) {
connection.query('SELECT name from employees', function(err, rows, fields) {
	if (err) throw err;
	console.log('Solution: ', rows);
	res.json(rows);
	}); 
});

app.listen(port);

console.log('server started on port %s', port);
