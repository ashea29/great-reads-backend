const Author = require('../models/Author')
const Book = require('../models/Book')

const seedData = require('./seedData')

Author.deleteMany({}).then(() => {
  console.log('deleted all authors')

  Book.deleteMany({}).then(() => {
    console.log('deleted all books')
    for (const book of seedData) {
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
          console.log(`created author: ${author.name}`)
          console.log(`created book: ${newBook.title}`)
        })
      })
    }
  })
})
