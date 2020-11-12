const db = require('../db')
const Recipe = require('../models/recipe')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const recipes = [
        { 
        title: 'Pancakes',
        author: 'John Doe',
        prep_time: '15 minutes',
        description: 'classic breakfast.',
        image: 'https://i.imgur.com/wMLaOzo.png',
        user_id: 'c',
        cuisine_id: 'd',
        review: 'TBD',
        },
    ]

    await Recipe.insertMany(recipes)
    console.log("Added Recipes!")
}
const run = async () => {
    await main()
    db.close()
}

run()