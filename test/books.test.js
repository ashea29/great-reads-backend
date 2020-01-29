const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:5000')


describe('GET /', function () {
  it('should return a 200 response', function (done) {
    api.get('/')
      .set('Accept', 'application/json')
      .expect(200, done)
  })

  it('should return an array', function (done) {
    api.get('/')
      .set('Accept', 'application/json')
      .end(function (error, response) {
        expect(response.body).to.be.an('array')
        done()
      })
  })

  it('should return an array of objects with fields: title, author, description, and coverImgURL', function (done) {
    api.get('/')
      .set('Accept', 'application/json')
      .end(function (error, response) {
        expect(response.body[0]).to.have.property('title')
        expect(response.body[0]).to.have.property('author')
        expect(response.body[0]).to.have.property('description')
        expect(response.body[0]).to.have.property('coverImgURL')
        done()
      })
  })
})


describe('GET /books/:id', function () {
  let id
  before(done => {
    api.get('/')
        .set('Accept', 'application/json')
        .end((error, response) => {
          id = response.body[0]._id
          done()
        })
  })

  it('retrieves a book by id with all the correct fields', done => {
    api.get(`/books/${id}`)
        .set('Accept', 'application/json')
        .end((error, response) => {
          expect(response.body._id).to.equal(id)
          expect(response.body.title).to.be.a('string')
          expect(response.body.author).to.be.an('object')
          expect(response.body.description).to.be.a('string')
          expect(response.body.coverImgURL).to.be.a('string')
          done()
        })
  })

})


describe('POST /books/', function() {
  let previousLength
  before((done) => {
    api.get('/')
        .set('Accept', 'application/json')
        .end((error, response) => {
          previousLength = response.body.length
          done()
        })
  })

  before((done) => {
    api.post('/books/')
        .set('Accept', 'application/json')
        .send({
          'id': previousLength + 1,
          'title': 'Test',
          'author': {name: 'Tester'},
          'description': 'Testing...1..2..3..',
          'coverImgURL': 'http://awesomeURL'
        })
        done()
  })

  it('should add a book to the books collection and return it',(done) => {
    api.get('/')
        .set('Accept', 'application/json')
        .end((error, response) => {
          expect(response.body.length).to.equal(previousLength + 1)
          done()
        })
  })
})

