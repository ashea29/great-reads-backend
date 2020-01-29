const express = require('express')
const router = express.Router()

const Author = require('../models/Author')

/////////////// ROUTES TO GET AUTHOR DATA POPULATED WITH BOOK DETAILS  /////////////////
// Get all authors (incl. book details)
router.get("/", (req, res) => {
  Author.find({})
		.populate('books', [
			'_id',
			'title',
			'description',
			'coverImgURL'
		])
		.then(allAuthors => {
			res.json(allAuthors)
		})
})

// Get author by ID (incl. book details)
router.get("/:id", (req, res) => {
  Author.findOne({ _id: req.params.id })
		.populate('books', [
			'_id',
			'title',
			'description',
			'coverImgURL'
		])
		.then(author => res.json(author))
})

// Get author by Name (incl. book details)
router.get("/byName/:authName", (req, res) => {
  Author.findOne({ name: req.params.authName })
		.populate('books', [
			'_id',
			'title',
			'description',
			'coverImgURL'
		])
		.then(author => res.json(author))
})
//////////////// END GET-POPULATE ROUTES //////////////////////////////////


/////////////// ROUTES TO GET AUTHOR DATA WITHOUT POPULATE  /////////////////
// Get all authors (with no book details)
router.get("/noDetails/all", (req, res) => {
  Author.find({}).then(allAuthors => res.json(allAuthors))
})

// Get author by ID (with no book details)
router.get("/noDetails/:id", (req, res) => {
	console.log('here2')
   Author.findOne({ _id: req.params.id })
	 	.then(author => res.json(author))
})

// Get author by Name (with no book details)
router.get("/noDetails/byName/:authName", (req, res) => {
  Author.findOne({ name: req.params.authName })
		.then(author => res.json(author))
})
//////////////// END GET-NO-POPULATE ROUTES //////////////////////////////////


// Add new author, return all authors in the DB
router.post('/', (req, res) => {
  Author.create(req.body)
    .then(author => {
      res.json(author)
  })
})

// Update existing author
router.put('/:id', (req, res) => {
  Author.findOneAndUpdate({_id: req.params.id},
    req.body, {new: true})
    .then(author => {
      res.json(author)
    })
})

module.exports = router;