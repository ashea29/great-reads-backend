const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const booksController = require('./controllers/books')
const authorsController = require('./controllers/authors')
const app = express()


app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(cors())


app.use('/books', booksController)
app.use('/authors', authorsController)


app.listen(5000, () => console.log('Running on port 5000'))