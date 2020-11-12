const Router = require('express').Router()

const RecipeRouter = require('./RecipeRouter')
const UserRouter = require('./UserRouter')
const ReviewRouter = require('./ReviewRouter')
const CuisineRouter = require('./CuisineRouter')


Router.use('/recipes', RecipeRouter)
Router.use('/users', UserRouter)
Router.use('/reviews', ReviewRouter)
Router.use('/cuisine', CuisineRouter)


module.exports = Router
