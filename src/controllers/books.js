const express = require('express')
const router = express.Router()
const Book = require('../models/Book')
const Author = require('../models/Author')


//INDEX ROUTE (returns all books with author ID and name included)
router.get("/", (req, res) => {
  Book.find({})
  .populate('author', ['_id', 'name'])
  .then(books => res.json(books))
})

//SHOW ROUTE
router.get("/books/:id", (req, res) => {
  Book.findOne({_id: req.params.id})
    .populate('author', ['_id', 'name'])
    .then(thisBook => res.json(thisBook))
})


//NEW ROUTE
router.post('/books/', (req, res) => {
  Book.create(req.body)
    .then(newBook => {
      // res.redirect('/')
      res.json(newBook)
  })
})

//Create new book with author name supplied
// QUERY DB WITH AUTHOR NAME
// IF AUTHOR EXISTS
//  ADD BOOK USING THE EXISTING AUTHOR ID
// ELSE
//  POST A NEW AUTHOR (using route which returns the just-created author)
//  ADD BOOK USING THE NEW AUTHOR ID
// END IF

router.post('/books/:authName', (req, res) => {
  Author.findOne({ name: req.params.authName })
		.populate('author', ['_id', 'name'])
		.then(author => {
      if (!author) {
        Author.create({"name": req.params.authName})
          .then(author => {
            Book.create(req.body).then(newBook => {
							newBook.author = author._id
							newBook.save()

							author.books.push(newBook._id)
							author.save()

							res.json(newBook)
						})
        })
      } else {
        Book.create(req.body)
          .then(newBook => {
            newBook.author = author._id
            newBook.save()

            author.books.push(newBook._id)
            author.save()

            res.json(newBook)
        })
      }
  })
})

//UPDATE ROUTE
router.put('/books/:id', (req, res) => {
  Book.findOneAndUpdate({_id: req.params.id},
    req.body, {new: true})
    .then(thisBook => {
      res.redirect(303, '/')
    })
})


//DELETE ROUTE
router.delete('/books/:id', (req, res) => {
  Author.findOne({books: { $in: [ req.params.id ]}})
  .then(author => {
    let authorBooks = author.books
    authorBooks.splice(authorBooks.indexOf(req.params.id), 1)
    author.books = authorBooks
    author.save()

    Book.findOneAndRemove({_id: req.params.id})
      .then(() => {
      res.redirect(303, '/')
      })
    })
})

module.exports = router