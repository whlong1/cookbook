const Cuisine = require('../models/Cuisine')
const Recipe = require('../models/Recipe')

const AddCuisine = async (request, response) => {
	try {
		const cuisine = await new Cuisine(request.body)
		await cuisine.save()
		return response.status(201).json({
			cuisine,
		});
	} catch (error) {
		return response.status(500).json({ error: error.message })
	}
}



const GetCuisineById = async (request, response) => {
	try {
		console.log('HIT')
		const { cuisine_id } = request.params
		const cuisine = await Cuisine.findById(cuisine_id)
		if (cuisine) {
			return response.status(200).json({ cuisine })
		}
		return response.status(404).send('Cannot find a cuisine with that id');
	} catch (error) {
		return response.status(500).send(error.message, 'Error')
	}
}



const FindCuisine = async (request, response) => {
	try {
		console.log('HIT2')
		const { cuisineName } = request.params
		const name = await Cuisine.find({ name: { $eq: cuisineName } })
		return response.status(200).json({ name })
	} catch (error) {
		return response.status(500).send(error.message, 'Not Found')
	}
}

const AllCuisine = async (request, response) => {
	try {
		const cuisine = await Cuisine.find({})
		return response.status(200).json({ cuisine })
	} catch (error) {
		return response.status(500).send(error.message)
	}
}


const DeleteCuisine = async (request, response) => {
	try {
		const { id } = request.params
		const deleted = await Cuisine.findByIdAndDelete(id)
		if (deleted) {
			return response.status(200).send("Cuisine Removed")
		}
		throw new Error("Cuisine not found")
	} catch (error) {
		return response.status(500).send(error.message)
	}
}

const UpdateCuisine = async (request, response) => {
	try {
		const { id } = request.params
		await Cuisine.findByIdAndUpdate(id, request.body, { new: true }, (error, cuisine) => {
			if (error) {
				response.status(500).send(error)
			}
			if (!cuisine) {
				response.status(500).send('Cuisine not found')
			}
			return response.status(200).json(cuisine)
		})
	} catch (error) {
		return response.status(500).send(error.message)
	}
}

module.exports = {
	AddCuisine,
	GetCuisineById,
	FindCuisine,
	AllCuisine,
	DeleteCuisine,
	UpdateCuisine
}