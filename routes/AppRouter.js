const Router = require('express').Router()

const RecipeRouter = require('./RecipeRouter')
const UserRouter = require('./UserRouter')


Router.use('/recipes', RecipeRouter)
//1. localhost:3002/browse/albums/create
//2. localhost:3002/browse/albums/all

Router.use('/users', UserRouter)


module.exports = Router
