const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    prep_time: {
        type: String,
        required: true
      },
    description: {
      type: String
    },
    image: {
      type: String,
      default: "https://i.imgur.com/HnXleJ9.jpg"
    },
    cuisine_id: {
      type: Schema.Types.ObjectId,
      ref: 'Cuisine'
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review'
      }
    ]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Recipe', Recipe)
