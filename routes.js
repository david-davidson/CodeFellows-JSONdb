var fs = require('fs');
module.exports = function(app) {

	var baseUrl = '/:some_name';
	
	app.post(baseUrl, function(req, res) {
		var stream = fs.createWriteStream('db/' + req.params.some_name + '.json');
		stream.write(JSON.stringify(req.body));
		stream.end();
		res.status(200).end();
	});

	app.get(baseUrl, function(req, res) {
		var stream = fs.createReadStream('db/' + req.params.some_name + '.json');
		stream.pipe(res);
	});
};