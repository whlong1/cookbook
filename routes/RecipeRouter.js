const Router = require('express').Router()

const RecipeController = require('../controllers/RecipeController')

Router.post('/add', RecipeController.AddRecipe)
//POST-> localhost:3000/home/recipes/add

Router.get('/all', RecipeController.AllRecipes)
// GET-> localhost:3000/home/recipes/all

Router.get('/search/:recipeName', RecipeController.FindRecipe)
//GET-> localhost:3000/home/recipes/search/Pancakes

Router.get('/find/:cuisineId', RecipeController.ListRecipesById)
//GET-> localhost:3000/home/recipes/find/5fad589718f1b9f74987a725

Router.get('/get/:recipeId', RecipeController.GetRecipeById)
//GET-> localhost:3000/home/recipes/get/5fad6fb2ec3f93ff91750438

Router.get('/sort/:cuisineStyle', RecipeController.ListRecipesByStyle)
//GET-> localhost:3000/home/recipes/sort/Fast Food

Router.delete('/delete/:id', RecipeController.DeleteRecipe)
//DELETE-> localhost:3000/home/recipes/delete/5fab5bcd55afbfc17f279e1d

Router.put('/edit/:id', RecipeController.UpdateRecipe)
//PUT->localhost:3000/home/recipes/edit/


module.exports = Router
