const mongoose = require('mongoose')

const MONGODB_URI = process.env.DATABASE_URL

mongoose
	.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, })
	.then(() => {
		console.log('Successfully connected to MongoDB.')
	})
	.catch((event) => {
		console.error('Connection error', event.message)
	})

const db = mongoose.connection

module.exports = db