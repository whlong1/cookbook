const mongoose = require('mongoose')

let MONGODB_URI = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/recipeDatabase'

mongoose
    .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch((event) => {
        console.error('Connection error', event.message)
    })

const db = mongoose.connection

module.exports = db