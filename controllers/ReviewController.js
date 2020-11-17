const Review = require('../models/review')
const Recipe = require('../models/recipe')


const AddReview = async (request, response) => {
    try {
        const review = await new Review({...request.body})
        await review.save()
        await Recipe.update(
            {_id: request.params.recipe_id },
            {
              $push: {
                reviews: review
              }
            }
          )
          response.send(review)
        } catch (error) {
          throw error
        }
    }

const GetReview = async (request, response) => {
    try {
        const {id} = request.params
        const review = await Review.findById(id)
        if (review) {
            return response.status(200).json({review})
        }
        return response.status(404).send('Cannot find review')
    } catch (error) {
        return response.status(500).send(error.message)
    }
}



const DeleteReview = async (request, response) => {
    try{
        const {id} = request.params
        const deleted = await Review.findByIdAndDelete(id)
        if (deleted) {
            return response.status(200).send("Review Removed")
        }
        throw new Error ("Review not found")
    } catch (error) {
        return response.status(500).send(error.message)
    }
}

const UpdateReview = async (request, response) => {
    try{
        const {id} = request.params
        await Review.findByIdAndUpdate(id, request.body, {new: true}, (error, review) => {
            if (error) {
                response.status(500).send(error)
            }
            if (!review) {
                response.status(500).send('Review not found')
            }
            return response.status(200).json(review)
        })
    } catch (error) {
        return response.status(500).send(error.message)
    }
}

module.exports = {
    AddReview,
    GetReview,
    DeleteReview,
    UpdateReview
}