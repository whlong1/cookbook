const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (request, response) => res.send('Root test'))

router.post('/recipes', controllers.addRecipe)
//POST->localhost:3000/browse/recipes

module.exports = router;