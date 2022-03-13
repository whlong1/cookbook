const jwt = require('jsonwebtoken')
require('dotenv').config()

const secretKey = process.env.SECRET_KEY

const getToken = (request, response, next) => {
	const token = request.headers['authorization']?.split(' ')[1]
	response.locals.token = token
	next()
}

const verifyToken = (request, response, next) => {
	let token = response.locals.token
	jwt.verify(token, secretKey, (err, decoded) => {
		if (err) {
			return response.status(401).send('Invalid Token.')
		}
		request.user = decoded._id
		return next()
	})
}

const createToken = (request, response) => {
	const token = jwt.sign(response.locals.payload, secretKey)
	response.send({ user: response.locals.payload, token })
}

module.exports = {
	createToken,
	verifyToken,
	getToken
}