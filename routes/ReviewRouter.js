const Router = require('express').Router()

const ReviewController = require('../controllers/ReviewController')

Router.post('/add', ReviewController.AddReview)

Router.get('/search/:id', ReviewController.GetReview)

//GET -> localhost:3000/home/reviews/search/5fad7020ec3f93ff91750439



Router.delete('/delete/:id', ReviewController.DeleteReview)

Router.put('/edit/:id', ReviewController.UpdateReview)


module.exports = Router