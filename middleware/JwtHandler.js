const jwt = require('jsonwebtoken')
require('dotenv').config()

const secretKey = process.env.SECRET_KEY

const getToken = (request, response, next) => {}

const verifyToken = (request, response, next) => {}

const createToken = (request, response) => {}












module.exports = {
    createToken,
    verifyToken,
    getToken
  }