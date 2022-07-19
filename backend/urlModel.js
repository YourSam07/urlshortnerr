const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
  originalUrl: {
    type: String,
    required: [true, "PLease add URL"],
  },
  shortenID: {
    type: String,
  }
},
{
  timestamps: true
})

module.exports = mongoose.model("Url Details", urlSchema, "url_details");