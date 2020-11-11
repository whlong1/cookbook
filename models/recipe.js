const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        prep_time: { type: String, required: true },
        cuisine: { type: String, required: true },
        description: { type: String, required: true },
        image: {type: String, required: true },
        user_id: {type: String, required: true },
        cuisine_id: {type: String, required: true },
        review: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('recipes', Recipe)

// Recipe requirements
// 	title
// 	author
// 	preparation time
// 	cuisine type
// 	description
// 	image
// 	user id
// 	cuisine id
// 	reviews