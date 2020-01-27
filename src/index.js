const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const booksController = require('./controllers/books')
const authorsController = require('./controllers/authors')
const app = express()


app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(cors())


app.use(booksController)
app.use('/authors', authorsController)

app.set("port", process.env.PORT || 5000)

app.listen(app.get("port"), () => console.log(`PORT: ${app.get("port")}`))