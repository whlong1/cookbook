const { Schema } = require('mongoose')

const Review = new Schema(
  {
    comment: {
      type: String,
      required: true
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    recipe_id: {
        type: Schema.Types.ObjectId,
        ref: 'recipes'
      }
  },
  { timestamps: true }
)


module.exports = mongoose.model('reviews', Review)