const Router = require('express').Router()

const RecipeController = require('../controllers/RecipeController')

const { getToken, verifyToken } = require('../middleware/JwtHandler')

Router.post('/add', getToken, verifyToken, RecipeController.AddRecipe)
//POST-> localhost:3001/home/recipes/add

Router.get('/all', RecipeController.AllRecipes)
// GET-> localhost:3001/home/recipes/all

Router.get('/search/:recipeName', RecipeController.FindRecipe)
//GET-> localhost:3001/home/recipes/search/Pancakes

Router.get('/get/:recipe_id', RecipeController.GetRecipeById)
//GET-> localhost:3001/home/recipes/get/5fb007ef7135f341060cb0a8

Router.get('/sort/:cuisine_id', RecipeController.ListRecipesByStyle)
//GET-> localhost:3001/home/recipes/sort/Fast Food

Router.delete('/delete/:id', getToken, verifyToken, RecipeController.DeleteRecipe)
//DELETE-> localhost:3001/home/recipes/delete/5fb008037135f341060cb0a9

Router.put('/edit/:id', RecipeController.UpdateRecipe)
//PUT->localhost:3001/home/recipes/edit/

Router.post('/:recipe_id/reviews', getToken, verifyToken, RecipeController.AddReview)


module.exports = Router

