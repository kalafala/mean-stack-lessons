// https://www.youtube.com/watch?v=_D2w0voFlEk&ebc=ANyPxKqAf8RvTxo9sN1ibn-XCejWgeoRPao1efAPRrNl-ZMOi1n7YQWbSavY2I5vizprbCSTEMs0lnGuIZ5z4pXC71h_67fN_g#t=2.45967

// credit:  https://github.com/tonypujals/express-demo/blob/master/lesson-03-B/app.js
// credit https://github.com/tonypujals/express-demo/tree/master/lesson-03-A
// credit https://github.com/tonypujals/express-demo/blob/master/lesson-03-C/app.js

var express = require('express'),
	app = express(),
	port = process.env.PORT || 3003,
	publicDir = require('path').join(__dirname,'/files');


// Middleware to serve files from local system
// Under the covers, will only call next() if path doesn't match the static directory
app.use(express.static(publicDir));

app.use(function(req,res,next) {
var data = '<h1>Nothing here for you !</h1>';
res.writeHead(200, {'Content-Type': 'text/html'});
res.end(data);
next();
});


app.listen(port);

console.log('server started on port %s', port);

