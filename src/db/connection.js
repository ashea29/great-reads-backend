const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.set('useFindAndModify', false)

let mongoURI = ""
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL
} else {
  mongoURI = 'mongodb://localhost/great-reads'
}

mongoose
  .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(instance => console.log(`connected to db: ${instance.connections[0].name}`))
  .catch(err => console.log('db connection failed!', err))

module.exports = mongoose