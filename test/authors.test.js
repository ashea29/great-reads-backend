const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:5000')

describe('Get /', function() {
	it('should return a 200 response', function(done) {
		api
			.get('/authors')
			.set('Accept', 'application/json')
			.expect(200, done)
	})

	// it('should return an array', function(done) {
	// 	api
	// 		.get('/')
	// 		.set('Accept', 'application/json')
	// 		.end(function(error, response) {
	// 			expect(response.body).to.be.an('array')
	// 			done()
	// 		})
	// })

	// it('should return an array of objects with fields: title, author, description, and coverImgURL', function(done) {
	// 	api
	// 		.get('/')
	// 		.set('Accept', 'application/json')
	// 		.end(function(error, response) {
	// 			expect(response.body[0]).to.have.property('title')
	// 			expect(response.body[0]).to.have.property('author')
	// 			expect(response.body[0]).to.have.property(
	// 				'description'
	// 			)
	// 			expect(response.body[0]).to.have.property(
	// 				'coverImgURL'
	// 			)
	// 			done()
	// 		})
	// })
})
