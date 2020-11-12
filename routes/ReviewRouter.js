const Router = require('express').Router()

const ReviewController = require('../controllers/ReviewController')

Router.post('/add', ReviewController.AddReview)

Router.delete('/delete/:id', ReviewController.DeleteReview)

Router.put('/edit/:id', ReviewController.UpdateReview)


module.exports = Router