const Router = require('express').Router()

const CuisineController = require('../controllers/CuisineController')

Router.post('/add', CuisineController.AddCuisine)

Router.delete('/delete/:id', CuisineController.DeleteCuisine)

Router.put('/edit/:id', CuisineController.UpdateCuisine)


module.exports = Router