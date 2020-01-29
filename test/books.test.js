const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:5000')
const authorApi = supertest('http://localhost:5000/authors')
const Author = require('../src/models/Author')


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

  let authID
  before((done) => {
    api.get('/authors/random/random')
        .set('Accept', 'application/json')
        .end((error, response) => {
          authID = response.body._id
          done()
        })
  })

  before((done) => {
    console.log(authID)
    api.post('/books/')
        .set('Accept', 'application/json')
        .send({
          title: 'Test',
          author: {_id: authID},
          description: 'Testing...1..2..3..',
          coverImgURL: 'http://awesomeURL'
        })
        .end((error, response) => {
          done()
        })
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


describe('POST /books/:authName', function () {
  let previousLength
  before((done) => {
    api.get('/')
        .set('Accept', 'application/json')
        .end((error, response) => {
          previousLength = response.body.length
          done()
        })
  })

  let authName
  before((done) => {
    api.get('/authors/random/random')
        .set('Accept', 'application/json')
        .end((error, response) => {
          authName = response.body.name
          done()
        })
  })

  before((done) => {
    console.log(authName)
    api.post(`/books/${authName}`)
        .set('Accept', 'application/json')
        .send({
          title: 'Test2',
          description: 'Testing...1..2..3..',
          coverImgURL: 'http://awesomeURL'
        })
        .end((error, response) => {
          done()
        })
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


describe('PUT /books/:id', () => {

  let bookToUpdate

  before(done => {
      api.get('/')
          .set('Accept', 'application/json')
          .end((error, response) => {
              bookToUpdate = response.body[8]
              done()
          })
  })

  before(done => {
      api.put(`/books/${bookToUpdate._id}`)
          .set('Accept', 'application/json')
          .send({
              'id': bookToUpdate._id,
              'title': 'Test4' 
          })
          .end((error, response) => {
              done()
          })
  })
  it('can update a book by id', done => {
      api
          .get(`/books/${bookToUpdate._id}`)
          .set('Accept', 'application/json')
          .end((error, response) => {
              expect(bookToUpdate.title).to.equal('Test4')
              done()
          })
  })

})


// describe('DELETE /books/:id', () => {

//     let booksPrevLength
//     let authBooksPrevLength
//     let bookToDelete
  
//     before((done) => {
//       api.post('/books/')
//           .set('Accept', 'application/json')
//           .send({
//             'id': booksPrevLength + 1,
//             'title': 'Test',
//             'author': {name: 'Tester'},
//             'description': 'Testing...1..2..3..',
//             'coverImgURL': 'http://awesomeURL'
//           })
//           done()
//     })

//     before(done => {
//         api
//             .get('/')
//             .set('Accept', 'application/json')
//             .end((error, response) => {
//                 booksPrevLength = response.body.length
//                 bookToDelete = response.body[response.body.length - 1]._id
//                 done()
//             })
//     })
  
//     before(done => {
//         api.delete(`/blogposts/${blogToDelete}`)
//             .set('Accept', 'application/json')
//             .end((error, response) => {
//                 done()
//             })
//     })
  
//     it('deletes a blog by id', done => {
//         api.get('/blogposts')
//             .set('Accept', 'application/json')
//             .end((error, response) => {
//                 expect(response.body.length).to.equal(previousLength - 1)
//                 expect(response.body.find((blog) => blog.id == blogToDelete)).to.equal(undefined)
//                 done()
//             })
//     })
//   })