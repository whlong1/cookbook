const Recipe = require('../models/Recipe');

const addRecipe = async (request, response) => {
    try {
        const recipe = await new Recipe(request.body)
        await recipe.save()
        return response.status(201).json({
            recipe,
        });
    } catch (error) {
        return response.status(500).json({ error: error.message })
    }
}

module.exports = {
    addRecipe,
}