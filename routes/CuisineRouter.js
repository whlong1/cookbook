const Router = require('express').Router()

const CuisineController = require('../controllers/CuisineController')

Router.post('/add', CuisineController.AddCuisine)
//POST-> localhost:3001/home/cuisine/add

Router.get('/get/:cuisine_id', CuisineController.GetCuisineById)
//GET-> localhost:3001/home/cuisine/get/5fad589718f1b9f74987a725

Router.get('/all', CuisineController.AllCuisine)
// GET-> localhost:3001/home/cuisine/all

Router.get('/search/:cuisineName', CuisineController.FindCuisine)
//GET-> localhost:3001/home/cuisine/search/

Router.delete('/delete/:id', CuisineController.DeleteCuisine)

Router.put('/edit/:id', CuisineController.UpdateCuisine)

module.exports = Router