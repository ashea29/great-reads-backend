const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:5000')

// Get all authors
describe('Get /authors', function() {
	it('should return a 200 response', function(done) {
		api
			.get('/authors')
			.set('Accept', 'application/json')
			.expect(200, done)
	})

	it('should return an array', function(done) {
		api
			.get('/authors')
			.set('Accept', 'application/json')
			.end(function(error, response) {
				expect(response.body).to.be.an('array')
				done()
			})
	})

	it('should return an array of objects with fields: <id>, <name> and <books>', function(done) {
		api
			.get('/authors')
			.set('Accept', 'application/json')
			.end(function(error, response) {
        expect(response.body[0]).to.have.property('_id')
        expect(response.body[0]).to.have.property('name')
        expect(response.body[0])
					.property('name')
					.to.be.a('string')
        expect(response.body[0]).to.have.property('books')
        expect(response.body[0])
					.property('books')
					.to.be.an('array')
				done()
			})
  })
})

// Get single author by ID with book details
// id will need to be replaced with an actual author id
// which has at least one associated book
describe('Get /authors/:id', function() {
  let id;
  before(done => {
		api
			.post('/authors')
			.set('Accept', 'application/json')
			.send({
				name: 'test author 123',
				books: []
			})
			.end(function(err, res) {
        id = res.
      })
	})


  let id = '5e30bec3b3d562562d106acb'
	it('should return a 200 response', function(done) {
		api
			.get(`/authors/${id}`)
			.set('Accept', 'application/json')
			.expect(200, done)
	})

	it('should return an object', function(done) {
		api
			.get(`/authors/${id}`)
			.set('Accept', 'application/json')
			.end(function(error, response) {
				expect(response.body).to.be.an('object')
				done()
			})
	})

	it('should return an object with fields: <id>, <name> and <books>', function(done) {
		api
			.get(`/authors/${id}`)
			.set('Accept', 'application/json')
			.end(function(error, response) {
        expect(response.body).to.have.property('_id')
        expect(response.body).to.have.property('name')
        expect(response.body)
					.property('name')
					.to.be.a('string')
        expect(response.body).to.have.property('books')
        expect(response.body)
					.property('books')
					.to.be.an('array')
				done()
			})
  })
  it('should return an object with fields: <id>, <name> and <books>', function(done) {
		api
			.get(`/authors/${id}`)
			.set('Accept', 'application/json')
			.end(function(error, response) {
				expect(response.body).to.have.property('_id')
				expect(response.body).to.have.property('name')
				expect(response.body)
					.property('name')
					.to.be.a('string')
				expect(response.body).to.have.property('books')
				expect(response.body)
					.property('books')
					.to.be.an('array')
				done()
			})
	})
})
