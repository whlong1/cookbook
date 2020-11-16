const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
  {
    comment: {
      type: String,
      required: true
    },
    recipe_id: {
        type: Schema.Types.ObjectId,
        ref: 'recipes'
      }
  },
  { timestamps: true }
)


module.exports = mongoose.model('reviews', Review)