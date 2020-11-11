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
        cuisine: 'Breakfast',
        description: 'classic breakfast.',
        image: 'https://i.imgur.com/wMLaOzo.png',
        user_id: 'c',
        cuisine_id: 'd',
        review: 'TBD',
        },
        { 
        title: 'Salad',
        author: 'John Doe',
        prep_time: '10 minutes',
        cuisine: 'Health',
        description: 'Simple salad.',
        image: 'https://i.imgur.com/wMLaOzo.png',
        user_id: 'a',
        cuisine_id: 'b',
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