const Author = require('../models/Author')
const Book = require('../models/Book')

const seedData = require('./seedData')

Author.deleteMany({}).then(() => {
  console.log('deleted all authors')

  Book.deleteMany({}).then(() => {
    console.log('deleted all books')

    for (const book of seedData) {
      //If the author exists, only add the book
      Author.findOne({
        name: book.author
      }).then(author => {

        if (author) {
          console.log("found author: ", author)
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
        } else {
          //author not found, add both
          console.log(`author ${book.author} not found`)
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
    }
  })
})
