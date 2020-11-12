const Router = require('express').Router()

const UserController = require('../controllers/UserController')

Router.post('/add', UserController.AddUser)
//POST-> localhost:3000/home/users/new

Router.delete('/delete/:id', UserController.DeleteUser)
//DELETE-> localhost:3000/home/users/delete/5fad5a0b223c0bf85226d3f8

Router.put('/edit/:id', UserController.UpdateUser)
//PUT-> localhost:3000/home/users/edit/5fad490a37d80bf073fe36ee



module.exports = Router