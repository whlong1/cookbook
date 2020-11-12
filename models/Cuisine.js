const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cuisine = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    recipes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'reviews'
      }
    ]
  },
  { timestamps: true }
)

module.exports = mongoose.model('cuisines', Cuisine)
