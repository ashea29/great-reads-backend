const express = require('express')
const router = express.Router()

const Author = require('../models/Author')

// Get all authors (incl. book details)
router.get("/", (req, res) => {
  Author.find({})
		.populate('books', [
			'_id',
			'title',
			'description',
			'coverImgUrl'
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
			'coverImgUrl'
		])
		.then(author => res.json(author))
})

// Get author by ID (with no book details)
router.get("/noDetails/:id", (req, res) => {
  Author.findOne({ _id: req.params.id })
		.then(author => res.json(author))
})

// Get all authors (with no book details)
router.get("/noDetails/", (req, res) => {
  Author.find({}).then(allAuthors => res.json(allAuthors))
})

// Get author by Name (incl. book details)
router.get("/byName/:authName", (req, res) => {
  Author.findOne({ _id: req.params.authName })
		.populate('books', [
			'_id',
			'title',
			'description',
			'coverImgUrl'
		])
		.then(author => res.json(author))
})

// Add new author, return all authors in the DB
router.post('/', (req, res) => {
  Author.create(req.body)
    .then(author => {
      res.redirect('/authors')
  })
})

// Update existing author
router.put('/:id', (req, res) => {
  console.log(req.body)
  Author.findOneAndUpdate({_id: req.params.id},
    req.body, {new: true})
    .then(author => {
      res.redirect(303, '/authors')
    })
})

module.exports = router;