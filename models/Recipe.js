const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    prep_time: {
        type: String,
        required: true
      },
    description: {
      type: String
    },
    image: {
      type: String,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
    cuisine_id: {
      type: Schema.Types.ObjectId,
      ref: 'cuisine'
    },
    style: {
      type: String,
      required: true
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'reviews'
      }
    ]
  },
  { timestamps: true }
)

module.exports = mongoose.model('recipes', Recipe)
