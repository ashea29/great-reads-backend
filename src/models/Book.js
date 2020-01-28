const mongoose = require('../db/connection')

const BookSchema = new mongoose.Schema({
  title: String,
  author: {
      ref: "Author",
      type: mongoose.Schema.Types.ObjectId
  },
  description: String,
  coverImgURL: String
})

module.exports = mongoose.model('Book', BookSchema)