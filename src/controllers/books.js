const express = require('express')
const router = express.Router()
const Book = require('../models/Book')


//INDEX ROUTE
router.get("/", (req, res) => {
  Book.find({})
  .then(books => res.json(books))
})


//SHOW ROUTE
router.get("/books/:id", (req, res) => {
  Book.findOne({_id: req.params.id})
  .then(thisBook => res.json(thisBook))
})


//NEW ROUTE
router.post('/', (req, res) => {
  Book.create(req.body)
  .then(newBook => {
    res.redirect('/')
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
  Book.findOneAndRemove({_id: req.params.id})
  .then(() => {
    res.redirect(303, '/')
  })
})

module.exports = router