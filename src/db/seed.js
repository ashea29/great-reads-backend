const mongoose = require('./connection')
const Author = require('../models/Author')
const Book = require('../models/Book')

const seedData = require('./seedData')

Author.deleteMany({}).then(() => console.log('deleted all authors'))
Book.deleteMany({}).then(() => console.log('deleted all books'))

seedData.forEach(book => {
  //If the author exists, only add the book
  Author.findOne({
    name: book.author
  }).then(author => {
    Book.create({
      title: book.title,
      author: author.id,
      description: book.description,
      coverImgURL: book.coverImgURL
    }).then(newBook => {
      author.books.push(newBook)
      author.save()
      console.log(`created ${newBook.title}`)
    })
  }).catch(err => {
    //author not found, add both
      Author.create({
        name: book.author
      }).then(author => {
        Book.create({
        title: book.title,
        author: author.id,
        description: book.description,
        coverImgURL: book.coverImgURL
      }).then(newBook => {
        author.books.push(newBook)
        author.save()
        console.log(`created ${newBook.title}`)
      })
    })
  })
})