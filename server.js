var http = require('http');
var express = require('express');
var app = express();

var bodyparser = require('body-parser')
app.use(bodyparser.json());

var server = http.createServer(app);

var port = process.env.PORT || 3000;
exports.port = port;

require('./routes')(app); // Must be called *after* bodyparser

server.listen(port, function() {
	console.log('Looking legit on port ' + port);
});