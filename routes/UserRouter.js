const Router = require('express').Router()

const UserController = require('../controllers/UserController')

const {
    createToken,
    verifyToken,
    getToken
  } = require('../middleware/JwtHandler')

Router.post('/add', UserController.AddUser)
//POST-> localhost:3001/home/users/add

Router.get('/search/:id', UserController.GetUser)
//GET -> localhost:3001/home/users/search/5fad6efaec3f93ff91750437

Router.delete('/delete/:id', UserController.DeleteUser)
//DELETE-> localhost:3001/home/users/delete/5fad5a0b223c0bf85226d3f8

Router.put('/edit/:id', UserController.UpdateUser)
//PUT-> localhost:3001/home/users/edit/5fad490a37d80bf073fe36ee

Router.post('/login', UserController.SignInUser, createToken)
//POST->localhost:3001/home/users/login

Router.get(
    '/refresh/session',
    getToken,
    verifyToken,
    UserController.RefreshSession
  )

module.exports = Router

