const mongoose = require('mongoose')

const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URL)
    .then((response) => {
      console.log(`Connected to the Mongo database: ${response.connection.host}`)
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = connectDB;