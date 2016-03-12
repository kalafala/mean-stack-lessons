
var express = require('express'),
	app = express(),
	port = process.env.PORT || 3002;

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
	//res.writeHead(200, {'Content-Type': 'application/json'});
	//res.end(JSON.stringify(rows));
	res.json(rows);
	}); 
});


app.listen(port);

console.log('server started on port %s', port);
