const express = require('express')
const router = express.Router()

const Author = require('../models/Author')

router.get("/", (req, res) => {
  Author.find({}).then(allAuthors => {
    res.json(allAuthors)
  })
})