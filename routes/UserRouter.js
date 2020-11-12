const Router = require('express').Router()

const UserController = require('../controllers/UserController')

Router.post('/new', UserController.AddUser)



module.exports = Router