const Router = require('express').Router()

const RecipeController = require('../controllers/RecipeController')

Router.post('/add', RecipeController.AddRecipe)
//POST-> localhost:3001/home/recipes/add

Router.get('/all', RecipeController.AllRecipes)
// GET-> localhost:3001/home/recipes/all

Router.get('/search/:recipeName', RecipeController.FindRecipe)
//GET-> localhost:3001/home/recipes/search/Pancakes

Router.get('/get/:recipe_id', RecipeController.GetRecipeById)
//GET-> localhost:3001/home/recipes/get/5fb007ef7135f341060cb0a8

Router.get('/sort/:style', RecipeController.ListRecipesByStyle)
//GET-> localhost:3001/home/recipes/sort/Fast Food

Router.delete('/delete/:id', RecipeController.DeleteRecipe)
//DELETE-> localhost:3001/home/recipes/delete/5fb008037135f341060cb0a9

Router.put('/edit/:id', RecipeController.UpdateRecipe)
//PUT->localhost:3001/home/recipes/edit/


module.exports = Router

