const Router = require('express').Router()

const CuisineController = require('../controllers/CuisineController')

Router.post('/add', CuisineController.AddCuisine)
//POST-> localhost:3000/home/cuisine/add

Router.get('/all', CuisineController.AllCuisine)
// GET-> localhost:3000/home/cuisine/all

Router.get('/search/:cuisineName', CuisineController.FindCuisine)
//GET-> localhost:3000/home/cuisine/search/

Router.delete('/delete/:id', CuisineController.DeleteCuisine)

Router.put('/edit/:id', CuisineController.UpdateCuisine)


module.exports = Router