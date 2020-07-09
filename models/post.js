const mongoose = require('Mongoose')
const Schema = mongoose.Schema

const emailSchema = new Schema(
  {
    Id: {
      type: String,
      required: true
    },
    sender: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Post', emailSchema)
