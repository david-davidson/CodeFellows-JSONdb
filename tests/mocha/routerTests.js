var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
var port = require('../../server').port;

describe('JSON-database routing', function() {
	it('Saves a post request properly', function(done) {
		chai.request('localhost:' + port)
		.post('/david')
		.req(function(req) { // <= .req lets us send a JSON object to this request
			req.send({'testData': 'Some value'});
		})
		.res(function(res) {
			expect(res).to.have.status(200);
			done();
		});
	});
	it('Saves a GET request properly', function(done) {
		chai.request('localhost:' + port)
		.get('/david')
		.res(function(res) {
			expect(res.body).to.eql('Some value');
		});
		done();
	});
});