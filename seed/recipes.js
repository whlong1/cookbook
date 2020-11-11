const db = require('../db')
const Plant = require('../models/plant')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const plants = [
        { 
        title: 'Pancakes',
        author: 'John Doe',
        prep_time: '15 minutes',
        cuisine: 'Breakfast',
        description: 'In a large bowl, sift together the flour, baking powder, salt and sugar.',
        user_id: 'https://i.imgur.com/wMLaOzo.png',
        cuisine_id: 'TBD',
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