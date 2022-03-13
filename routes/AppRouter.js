const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const RecipeRouter = require('./RecipeRouter')
const CuisineRouter = require('./CuisineRouter')

Router.use('/users', UserRouter)
Router.use('/recipes', RecipeRouter)
Router.use('/cuisine', CuisineRouter)

module.exports = Router