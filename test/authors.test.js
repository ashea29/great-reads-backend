const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:5000')


// AUTHORS WITH BOOK DETAILS POPULATED //////////////////////////////////////////////

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

// Add an author then test getting that author
describe('Add an author, then Get /authors/:id', function() {
	let id;
  before(done => {
		api
			.post('/authors')
			.set('Accept', 'application/json')
			.send({
				name: 'test author 123',
			})
			.end(function(err, res) {
				id = res.body._id
				done()
			})
	})

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
})

// Add an author then test getting that author by name
describe('Add an author, then Get /authors/byName/authName', function() {
	let name;
  before(done => {
		api
			.post('/authors')
			.set('Accept', 'application/json')
			.send({
				name: 'test author 999',
			})
			.end(function(err, res) {
				name = res.body.name
				done()
			})
	})

	it('should return a 200 response !!!!', function(done) {
		api
			.get(`/authors/byName/${name}`)
			.set('Accept', 'application/json')
			.expect(200, done)
	})

	it('should return an object', function(done) {
		api
			.get(`/authors/byName/${name}`)
			.set('Accept', 'application/json')
			.end(function(error, response) {
				expect(response.body).to.be.an('object')
				done()
			})
	})

	it('should return an object with fields: <id>, <name> and <books>', function(done) {
		api
			.get(`/authors/byName/${name}`)
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

// AUTHORS WITH NO BOOK DETAILS POPULATED //////////////////////////////////////////////
// Get all authors
describe('Get /authors/noDetails/all', function() {
	it('should return a 200 response', function(done) {
		api
			.get('/authors/noDetails/all')
			.set('Accept', 'application/json')
			.expect(200, done)
	})

	it('should return an array', function(done) {
		api
			.get('/authors/noDetails/all')
			.set('Accept', 'application/json')
			.end(function(error, response) {
				expect(response.body).to.be.an('array')
				done()
			})
	})

	it('should return an array of objects with fields: <id>, <name> and <books>', function(done) {
		api
			.get('/authors/noDetails/all')
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

// Add an author then test getting that author
describe('Add an author, then Get /authors/noDetails/:id', function() {
	let id;
  before(done => {
		api
			.post('/authors')
			.set('Accept', 'application/json')
			.send({
				name: 'test author 123',
			})
			.end(function(err, res) {
				id = res.body._id
				done()
			})
	})

	it('should return a 200 response !!!!', function(done) {
		api
			.get(`/authors/noDetails/${id}`)
			.set('Accept', 'application/json')
			.expect(200, done)
	})

	it('should return an object', function(done) {
		api
			.get(`/authors/noDetails/${id}`)
			.set('Accept', 'application/json')
			.end(function(error, response) {
				expect(response.body).to.be.an('object')
				done()
			})
	})

	it('should return an object with fields: <id>, <name> and <books>', function(done) {
		api
			.get(`/authors/noDetails/${id}`)
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

// Add an author then test getting that author by name
describe('Add an author, then Get /authors/byName/authName', function() {
	let name;
  before(done => {
		api
			.post('/authors')
			.set('Accept', 'application/json')
			.send({
				name: 'test author 999',
			})
			.end(function(err, res) {
				name = res.body.name
				done()
			})
	})

	it('should return a 200 response !!!!', function(done) {
		api
			.get(`/authors/noDetails/byName/${name}`)
			.set('Accept', 'application/json')
			.expect(200, done)
	})

	it('should return an object', function(done) {
		api
			.get(`/authors/noDetails/byName/${name}`)
			.set('Accept', 'application/json')
			.end(function(error, response) {
				expect(response.body).to.be.an('object')
				done()
			})
	})

	it('should return an object with fields: <id>, <name> and <books>', function(done) {
		api
			.get(`/authors/noDetails/byName/${name}`)
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

// TEST PUT ROUTE //////////////////////////////////////////////

// Add an author then test updating that author, then get by name
describe('Add an author, then PUT /authors/:id', function() {
	let id;
	let name;
  before(done => {
		api
			.post('/authors')
			.set('Accept', 'application/json')
			.send({
				name: 'test author 000',
			})
			.end(function(err, res) {
				id = res.body._id
				done()
			})
	})

	before(done => {
		api
			.put(`/authors/${id}`)
			.set('Accept', 'application/json')
			.send({
				name: 'test name after put'
			})
			.end(function(err, res) {
				name = res.body.name
				done()
			})
	})

	it('get updated author by name: should return an object with name "test name after put"', function(done) {
		api
			.get(`/authors/byName/${name}`)
			.set('Accept', 'application/json')
			.end(function(error, response) {
				expect(response.body).to.be.an('object')
				expect(response.body.name).to.equal('test name after put')
				done()
			})
	})
})