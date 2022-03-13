const User = require('../models/User')
const Cuisine = require('../models/Cuisine')
const Recipe = require('../models/Recipe')

const AddRecipe = async (req, res) => {
	for (let key in req.body) { if (req.body[key] === '') delete req.body[key] }
	req.body.author = req.user
	try {
		const recipe = await new Recipe(req.body)
		await recipe.save()
		const cuisine = await Cuisine.findById(req.body.cuisine_id)
		cuisine.recipes.push(recipe._id)
		cuisine.save()
		return res.status(201).json({ recipe })
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const AllRecipes = async (request, response) => {
	try {
		const recipes = await Recipe.find()
		return response.status(200).json({ recipes })
	} catch (error) {
		return response.status(500).send(error.message)
	}
}

const FindRecipe = async (request, response) => {
	try {
		const { recipeName } = request.params
		const title = await Recipe.find({ title: { $eq: recipeName } })
		return response.status(200).json({ title })
	} catch (error) {
		return response.status(500).send(error.message, 'Not Found')
	}
}

const GetRecipeById = async (request, response) => {
	try {
		const { recipe_id } = request.params
		const recipe = await Recipe.findById(recipe_id).populate('reviews').populate('author')
		response.send(recipe)
	}
	catch (error) {
		throw error
	}
}

const ListRecipesByStyle = async (request, response) => {
	try {
		const { cuisine_id } = request.params
		const list = await Recipe.find({ cuisine_id: { $eq: cuisine_id } })
		return response.status(200).json({ list })
	} catch (error) {
		return response.status(500).send(error.message, 'Not Found')
	}
}

const DeleteRecipe = async (request, response) => {
	try {
		const recipe = await Recipe.findById(request.params.id)
		if (recipe.author === request.user) {
			recipe.delete()
			return response.status(200).send("Recipe Removed")
		}
		throw new Error("Recipe not found")
	} catch (error) {
		return response.status(500).send(error.message)
	}
}

const UpdateRecipe = async (request, response) => {
	try {
		const { id } = request.params
		await Recipe.findByIdAndUpdate(id, request.body, { new: true }, (error, recipe) => {
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