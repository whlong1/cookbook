const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cuisine = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
    },
    recipes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
      }
    ]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Cuisine', Cuisine)
