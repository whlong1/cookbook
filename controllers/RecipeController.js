const Cuisine = require('../models/Cuisine');
const Recipe = require('../models/Recipe');


const AddRecipe = async (request, response) => {
	try {
		const recipe = await new Recipe(request.body)
		await recipe.save()
		await Cuisine.updateOne(
			{ _id: request.body.cuisine_id },
			{
				$push: {
					recipes: recipe,
				},
			}
		)
		return response.status(201).json({
			recipe,
		})
	} catch (error) {
		return response.status(500).json({ error: error.message })
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
		const recipe = await Recipe.findById(recipe_id).populate([
			{
				path: 'reviews',
				model: 'reviews'
			}
		])
		response.send(recipe)
	}
	catch (error) {
		throw error
	}
}


const ListRecipesByStyle = async (request, response) => {
	try {
		const { style } = request.params
		const list = await Recipe.find({ style: { $eq: style } })
		return response.status(200).json({ list })
	} catch (error) {
		return response.status(500).send(error.message, 'Not Found')
	}
}



const DeleteRecipe = async (request, response) => {
	console.log('hit!!!1')
	try {
		const recipe = await Recipe.findById(request.params.id)
		console.log('TRY', recipe)
		console.log('Check Equality', recipe.author === request.user)
		if (recipe.author === request.user) {
			recipe.delete()
			// const deletedRecipe = await Recipe.findByIdAndDelete(request.params.id)
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



const CreateHappyHourDeal = async (req, res) => {

	//Create the new model
	const happyHourDeal = new HappyHourDeal({
		// grab necessary attributes out of req.body
		description: req.body.description,
		startTime: req.body.startTime,
		endTime: req.body.endTime,
		sunday: req.body.sunday,
		monday: req.body.monday,
		tuesday: req.body.tuesday,
		wednesday: req.body.wednesday,
		thursday: req.body.thursday,
		friday: req.body.friday,
		saturday: req.body.saturday,
	})

	happyHourDeal.save()

	//Update the parent
	await HappyHour.updateOne(
		{ _id: req.body.happyHour_id },
		{
			$push: {
				happyhourdeals: happyHourDeal,
			},
		}
	)

	res.send(happyHourDeal)
}