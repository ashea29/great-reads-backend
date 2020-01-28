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

// Add new author, return all authors in the DB
router.post('/', (req, res) => {
  Author.create(req.body)
    .then(author => {
      res.redirect('/authors')
  })
})

// Add new author, return just created author in the response
// router.post('/singleAuthor/', (req, res) => {
//   Author.create(req.body)
//     .then(author => res.json(author))
// })

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