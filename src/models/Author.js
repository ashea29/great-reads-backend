const mongoose = require('../connection')

const AuthorSchema = new mongoose.Schema({
  name: String,
  books : [
    {
      ref: "Book",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
})

module.exports = mongoose.model('Author', AuthorSchema)