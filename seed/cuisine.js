const db = require('../db')
const Cuisine = require('../models/cuisine')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const cuisine = [
        { 
        title: 'Italian Food',
        },
        { 
        title: 'Breakfast',
        },
    ]

    await Cuisine.insertMany(cuisine)
    console.log("Added New Cuisine!")
}
const run = async () => {
    await main()
    db.close()
}

run()