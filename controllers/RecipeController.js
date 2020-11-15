const Recipe = require('../models/recipe');

const AddRecipe = async (request, response) => {
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

const AllRecipes = async (request, response) => {
    try{
        const recipes = await Recipe.find()
        return response.status(200).json({recipes})
    } catch (error) {
        return response.status(500).send(error.message)
    }
}

const FindRecipe = async (request, response) => {
    try{
        const {recipeName} = request.params
        const title = await Recipe.find({title: {$eq: recipeName}})
        return response.status(200).json({title})
    } catch (error) {
        return response.status(500).send(error.message, 'Not Found')
    }
}

//========

const GetRecipeById = async (request, response) => {
    try{
        const {recipe_id} = request.params
        const recipe = await Recipe.findById(recipe_id)
        if (recipe) {
            return response.status(200).json({recipe})
        }
        return response.status(404).send('Cannot find a recipe with that id');
    } catch (error) {
        return response.status(500).send(error.message, 'Error')
    }
}

//========

const ListRecipesByStyle = async (request, response) => {
    try{
        const {style} = request.params
        const list = await Recipe.find({style: {$eq: style}})
        return response.status(200).json({list})
    } catch (error) {
        return response.status(500).send(error.message, 'Not Found')
    }
}

const DeleteRecipe = async (request, response) => {
    try{
        const {id} = request.params
        const deleted = await Recipe.findByIdAndDelete(id)
        if (deleted) {
            return response.status(200).send("Recipe Removed")
        }
        throw new Error ("Recipe not found")
    } catch (error) {
        return response.status(500).send(error.message)
    }
}

const UpdateRecipe = async (request, response) => {
    try{
        const {id} = request.params
        await Recipe.findByIdAndUpdate(id, request.body, {new: true}, (error, recipe) => {
            if (error) {
                response.status(500).send(error)
            }
            if (!recipe) {
                response.status(500).send('Recipe not found')
            }
            return response.status(200).json(recipe)
        })
    } catch (error) {
        return response.status(500).send(error.message)
    }
}


module.exports = {
    AddRecipe,
    AllRecipes,
    FindRecipe,
    ListRecipesByStyle,
    DeleteRecipe,
    UpdateRecipe,
    GetRecipeById
}